import React from "react";
import { StyleSheet, Text, View } from "react-native";
import theme from "../../theme";

const ReminderItem = ({ item }) => {
  return (
    <View style={[styles.reminderItem, styles["color" + item.color]]}>
      {item.label ? <Text style={styles.text}>{item.label}</Text> : null}
      <Text style={styles.text}>{item.time}</Text>
      <Text style={styles.text}>{new Date(item.time).toLocaleString()}</Text>
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
  ...theme.noteColorStyles,
});
