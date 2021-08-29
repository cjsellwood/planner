import React, { useState } from "react";
import { StyleSheet, Pressable, TextInput, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import theme from "../../theme";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addNewReminder } from "../../store/actions/reminders";

const EditReminder = ({ setNewReminderModal }) => {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [showDate, setShowDate] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [color, setColor] = useState(0);
  const [inputError, setInputError] = useState(null);

  const dispatch = useDispatch();

  // Change the value of the date stored in state
  const changeDate = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    currentDate.setSeconds(0, 0);
    setDate(currentDate);

    if (currentDate.getTime() < Date.now()) {
      setInputError("That time has already passed");
    }
  };

  // Show date or time picker
  const showPicker = (currentMode) => {
    setInputError(null);
    setShowDate(true);
    setPickerMode(currentMode);
  };

  // Show the date picker
  const showDatePicker = () => {
    showPicker("date");
  };

  // Show the time picker
  const showTimePicker = () => {
    showPicker("time");
  };

  // Display time in a readable format
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

  const submitNewReminder = () => {
    const currentDate = date;
    currentDate.setSeconds(0, 0);
    if (currentDate.getTime() < Date.now()) {
      setInputError("That time has already passed");
      return;
    }
    setNewReminderModal(false);
    dispatch(
      addNewReminder({ id: uuid(), label, time: date.getTime(), color })
    );
  };

  return (
    <Pressable onPress={() => {}} style={styles.modalContent}>
      {inputError ? <Text style={styles.inputError}>{inputError}</Text> : null}
      <TextInput
        placeholder="Label"
        placeholderTextColor={"gray"}
        maxLength={50}
        value={label}
        onChangeText={(text) => setLabel(text)}
        style={styles.labelInput}
      />
      <Pressable onPress={showDatePicker}>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </Pressable>
      <Pressable onPress={showTimePicker}>
        <Text style={styles.dateText}>{displayTime(date)}</Text>
      </Pressable>
      {showDate ? (
        <DateTimePicker
          value={date}
          onChange={changeDate}
          mode={pickerMode}
          minimumDate={new Date(Date.now())}
        />
      ) : null}
      <Pressable style={styles.colorContainer} onPress={() => {}}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Pressable
            key={"color" + number}
            style={[
              styles.colorChoice,
              styles["color" + number],
              color === number && styles.colorChoiceHighlight,
            ]}
            onPress={() => setColor(number)}
          ></Pressable>
        ))}
      </Pressable>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => setNewReminderModal(false)}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.1)",
            borderless: false,
          }}
        >
          <Text style={styles.buttonText}>CANCEL</Text>
        </Pressable>
        <Pressable
          onPress={submitNewReminder}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.1)",
            borderless: false,
          }}
          disabled={inputError}
        >
          <Text
            style={[styles.buttonText, inputError && styles.disabledButton]}
          >
            OK
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default EditReminder;

const styles = StyleSheet.create({
  modalContent: {
    padding: 8,
    marginBottom: 100,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: theme.colors.mainBackground,
  },
  inputError: {
    color: "#cf4e40",
  },
  labelInput: {
    color: "white",
  },
  dateText: {
    color: "white",
  },
  colorContainer: {
    backgroundColor: theme.colors.mainBackground,
    flexWrap: "wrap",
    flexDirection: "row",
    width: 160,
    padding: 4,
  },
  colorChoice: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 100,
  },
  colorChoiceHighlight: {
    borderColor: "white",
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.primary,
    padding: 8,
    width: 80,
    textAlign: "center",
    marginHorizontal: 4,
  },
  disabledButton: {
    color: "gray",
  },
  ...theme.noteColorStyles,
});
