import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import ReminderItem from "./ReminderItem";
import duplicateReminders from "../../functions/duplicateReminders";
import theme from "../../theme";

const RemindersList = () => {
  const { reminders } = useSelector((state) => state.reminders);

  const remindersCopy = duplicateReminders(reminders);

  remindersCopy.sort((a, b) => a.time - b.time);
  return (
    <React.Fragment>
      <ScrollView>
        {remindersCopy
          .filter((reminder) => reminder.time > Date.now())
          .map((reminder) => (
            <React.Fragment key={reminder.id}>
              <ReminderItem reminder={reminder} />
              <View style={styles.separator} />
            </React.Fragment>
          ))}
        {remindersCopy.some((reminder) => reminder.time < Date.now()) ? (
          <View style={styles.typeSeparator}>
            <Text style={styles.typeSeparatorText}>Old</Text>
          </View>
        ) : null}
        {remindersCopy
          .filter((reminder) => reminder.time <= Date.now())
          .sort((a, b) => b.time - a.time)
          .map((reminder) => (
            <React.Fragment key={reminder.id}>
              <ReminderItem reminder={reminder} />
              <View style={styles.separator} />
            </React.Fragment>
          ))}
      </ScrollView>
    </React.Fragment>
  );
};

export default RemindersList;

const styles = StyleSheet.create({
  separator: {
    padding: 6,
  },
  typeSeparator: {
    backgroundColor: "lightgray",
    height: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  typeSeparatorText: {
    color: "white",
    backgroundColor: theme.colors.mainBackground,
    padding: 8,
    fontSize: 16,
    lineHeight: 16,
  },
});
