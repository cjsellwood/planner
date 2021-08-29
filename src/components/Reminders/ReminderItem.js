import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const ReminderItem = ({ reminder }) => {
  // TODO - Add Delete button
  // TODO - Add style to show if past their time
  return (
    <View style={[styles.reminderItem, styles["color" + reminder.color]]}>
      {reminder.label ? (
        <Text style={styles.text}>{reminder.label}</Text>
      ) : null}
      <Text style={styles.text}>{reminder.time}</Text>
      <Text style={styles.text}>
        {new Date(reminder.time).toLocaleString()}
      </Text>
      {reminder.time < Date.now() ? (
        <View style={styles.oldOverlay}></View>
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
  ...theme.noteColorStyles,
});
