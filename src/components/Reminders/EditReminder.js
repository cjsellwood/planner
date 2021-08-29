import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "../../theme";

const EditReminder = () => {
  const [date, setDate] = useState(new Date(Date.now()));
  const [showDate, setShowDate] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  const changeDate = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
  };

  const showPicker = (currentMode) => {
    setShowDate(true);
    setPickerMode(currentMode);
  };

  const showDatePicker = () => {
    showPicker("date");
  };

  const showTimePicker = () => {
    showPicker("time");
  };

  const displayTime = (date) => {
    const hour = date.getHours();
    const minute = date.getMinutes();
    let time = `${hour % 12 === 0 ? "12" : hour % 12}:${minute
      .toString()
      .padStart(2, "0")}`;
    if (hour >= 12) {
      time += " pm";
    } else {
      time += " am";
    }
    return time;
  };

  return (
    <Pressable onPress={() => {}} style={styles.modalContent}>
      <TextInput placeholder="Label" maxLength={50} />

      <Pressable onPress={showDatePicker}>
        <Text>{date.toLocaleDateString()}</Text>
      </Pressable>
      <Pressable onPress={showTimePicker}>
        <Text>{displayTime(date)}</Text>
      </Pressable>

      {showDate ? (
        <DateTimePicker value={date} onChange={changeDate} mode={pickerMode} />
      ) : null}

      <Pressable style={styles.colorContainer} onPress={() => {}}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Pressable
            key={"color" + number}
            style={[styles.colorChoice, styles["color" + number]]}
            onPress={() => {}}
          ></Pressable>
        ))}
      </Pressable>
    </Pressable>
  );
};

export default EditReminder;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    padding: 8,
  },
  colorContainer: {
    backgroundColor: theme.colors.mainBackground,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 160,
    padding: 4,
  },
  colorChoice: {
    borderWidth: 1,
    borderColor: "gray",
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 100,
  },
  ...theme.noteColorStyles,
});
