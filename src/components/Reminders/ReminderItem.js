import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import theme from "../../theme";
import { deleteReminder } from "../../store/actions/reminders";
import showAmPm from "../../functions/showAmPm";
import formatDate from "../../functions/formatDate";

const ReminderItem = ({ reminder }) => {
  const dispatch = useDispatch();
  // TODO - Style Reminder

  return (
    <View style={[styles.reminderItem, styles["color" + reminder.color]]}>
      {reminder.label ? (
        <Text style={styles.label}>{reminder.label}</Text>
      ) : null}
      <Text style={styles.text}>{showAmPm(new Date(reminder.time))}</Text>
      <Text style={styles.text}>{formatDate(new Date(reminder.time))}</Text>
      <Pressable
        onPress={() => dispatch(deleteReminder(reminder.id))}
        style={styles.deleteButton}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
      >
        <Text>DELETE</Text>
      </Pressable>
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
  },
  text: {
    color: "white",
  },
  oldOverlay: {
    backgroundColor: "rgba(1, 1, 1, 0.5)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 4,
  },
  deleteButton: {
    padding: 8,
  },
  ...theme.noteColorStyles,
});
