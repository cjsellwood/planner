import React, { useState } from "react";
import {
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  View,
} from "react-native";
import theme, { noteColors } from "../../theme";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addNewReminder } from "../../store/actions/reminders";
import ModalButtons from "./ModalButtons";
import DateButtons from "./DateButtons";
import * as Notifications from "expo-notifications";
import formatDate from "../../functions/formatDate";
import showAmPm from "../../functions/showAmPm";
import rgbToHex from "../../functions/rgbToHex";

const EditReminder = ({ setNewReminderModal }) => {
  const [label, setLabel] = useState("");
  const [date, setDate] = useState(new Date(Date.now()));
  const [showDate, setShowDate] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");
  const [color, setColor] = useState(Math.floor(Math.random() * 9));
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

  const triggerNotification = (label, time, color) => {
    const scheduledId = Notifications.scheduleNotificationAsync({
      content: {
        title: label,
        body: `${showAmPm(new Date(time))} - ${formatDate(new Date(time))}`,
        color: rgbToHex(noteColors[color]),
        data: { page: "/reminders" },
      },
      trigger: {
        seconds: (time - Date.now()) / 1000,
      },
    });
    return scheduledId;
  };

  const submitNewReminder = async () => {
    const currentDate = date;
    currentDate.setSeconds(0, 0);
    if (currentDate.getTime() < Date.now()) {
      setInputError("That time has already passed");
      return;
    }
    setNewReminderModal(false);

    const scheduleId = await triggerNotification(label, date.getTime(), color);

    dispatch(
      addNewReminder({
        id: uuid(),
        label,
        time: date.getTime(),
        color,
        scheduleId,
      })
    );
  };

  return (
    <Pressable onPress={() => {}} style={styles.modalContent}>
      {inputError ? <Text style={styles.inputError}>{inputError}</Text> : null}
      <TextInput
        placeholder="Label"
        placeholderTextColor={"gray"}
        maxLength={48}
        value={label}
        onChangeText={(text) => setLabel(text)}
        style={styles.labelInput}
      />
      <DateButtons
        date={date}
        showPicker={showPicker}
        showDate={showDate}
        changeDate={changeDate}
        pickerMode={pickerMode}
      />
      <View style={styles.colorsWrapper}>
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
      </View>
      <ModalButtons
        submitNewReminder={submitNewReminder}
        inputError={inputError}
        setNewReminderModal={setNewReminderModal}
      />
    </Pressable>
  );
};

export default EditReminder;

const styles = StyleSheet.create({
  modalContent: {
    padding: 16,
    borderRadius: 8,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: theme.colors.mainBackground,
  },
  inputError: {
    color: "#cf4e40",
    paddingBottom: 6,
    textAlign: "center",
  },
  labelInput: {
    color: "white",
    borderColor: "gray",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  colorsWrapper: {
    alignItems: "center",
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
  ...theme.noteColorStyles,
});
