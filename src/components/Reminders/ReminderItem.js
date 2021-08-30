import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import theme from "../../theme";
import { deleteReminder } from "../../store/actions/reminders";
import showAmPm from "../../functions/showAmPm";
import formatDate from "../../functions/formatDate";
import * as Notifications from "expo-notifications";

const ReminderItem = ({ reminder }) => {
  const dispatch = useDispatch();

  const deletePress = async () => {
    dispatch(deleteReminder(reminder.id));
    await Notifications.cancelScheduledNotificationAsync(reminder.scheduleId);
  };

  return (
    <View style={[styles.reminderItem, styles["color" + reminder.color]]}>
      {reminder.label ? (
        <Text style={styles.label}>{reminder.label}</Text>
      ) : null}
      <View style={styles.timeContainer}>
        <Text style={styles.text}>{formatDate(new Date(reminder.time))}</Text>
        <Text style={styles.text}>{showAmPm(new Date(reminder.time))}</Text>
      </View>
      <View style={styles.deleteButtonContainer}>
        <Pressable
          onPress={deletePress}
          style={styles.deleteButton}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.1)",
            borderless: false,
          }}
        >
          <Text style={styles.deleteText}>DELETE</Text>
        </Pressable>
      </View>
      {reminder.time < Date.now() ? (
        <View style={styles.oldOverlay} pointerEvents="none"></View>
      ) : null}
    </View>
  );
};

export default ReminderItem;

const styles = StyleSheet.create({
  reminderItem: {
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 4,
    elevation: 4,
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  oldOverlay: {
    backgroundColor: "rgba(1, 1, 1, 0.4)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 4,
  },
  deleteButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    padding: 8,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  deleteText: {
    color: "rgb(225, 225, 225)",
  },
  ...theme.noteColorStyles,
});
