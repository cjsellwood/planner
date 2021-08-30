import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import showAmPm from "../../functions/showAmPm";

const DateButtons = ({
  date,
  showPicker,
  showDate,
  changeDate,
  pickerMode,
}) => {
  // Show the date picker
  const showDatePicker = () => {
    showPicker("date");
  };

  // Show the time picker
  const showTimePicker = () => {
    showPicker("time");
  };
  return (
    <View style={styles.dateButtonsContainer}>
      <Pressable
        onPress={showDatePicker}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
      >
        <Text style={styles.dateText}>{date.toLocaleDateString()} ▼</Text>
      </Pressable>
      <Pressable
        onPress={showTimePicker}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
      >
        <Text style={styles.dateText}>{showAmPm(date)} ▼</Text>
      </Pressable>
      {showDate ? (
        <DateTimePicker
          value={date}
          onChange={changeDate}
          mode={pickerMode}
          minimumDate={new Date(Date.now())}
        />
      ) : null}
    </View>
  );
};

export default DateButtons;

const styles = StyleSheet.create({
  dateButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 8,
  },
  dateText: {
    color: "white",
    padding: 8,
    margin: 4,
    fontSize: 18
  },
});
