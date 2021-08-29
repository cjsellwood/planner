import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ReminderItem from "./ReminderItem";
import duplicateReminders from "../../functions/duplicateReminders";

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
              <ReminderItem item={reminder} />
              <View style={styles.separator} />
            </React.Fragment>
          ))}
        <View style={styles.typeSeparator} />
        {remindersCopy
          .filter((reminder) => reminder.time <= Date.now())
          .map((reminder) => (
            <React.Fragment key={reminder.id}>
              <ReminderItem item={reminder} />
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
    backgroundColor: "gray",
    padding: 2,
    marginBottom: 8,
  },
});
