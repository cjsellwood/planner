import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { changeCheckboxText } from "../../../store/actions/notes";

import theme from "../../../theme";
import AddItemButton from "./AddItemButton";
import CheckboxButton from "./CheckboxButton";
import CheckboxSeparator from "./CheckboxSeparator";
import DeleteButton from "./DeleteButton";

const CheckboxEditingContainer = ({ checkboxes, noteIndex }) => {
  const dispatch = useDispatch();

  const textLineInput = (e, line) => {
    dispatch(changeCheckboxText(noteIndex, e.nativeEvent.text, line));
  };

  const [deleteButton, setDeleteButton] = useState(null);
  return (
    <View style={styles.checkBoxViewContainer}>
      {checkboxes.map((line, index) => {
        if (!line.checked) {
          return (
            <View key={"line" + index} style={styles.checkBoxContainer}>
              <CheckboxButton
                noteIndex={noteIndex}
                index={index}
                checked={false}
              />
              <TextInput
                style={styles.checkText}
                value={line.text}
                onChange={(e) => textLineInput(e, index)}
                multiline={true}
                onFocus={() => setDeleteButton(index)}
                onBlur={() => setDeleteButton(null)}
                autoFocus
              />
              {deleteButton === index ? (
                <DeleteButton noteIndex={noteIndex} index={index} />
              ) : (
                <View style={styles.deleteButtonPlaceholder}></View>
              )}
            </View>
          );
        }
      })}
      <AddItemButton noteIndex={noteIndex} />
      <CheckboxSeparator
        show={checkboxes.filter((line) => line.checked === true).length > 0}
      />
      {checkboxes.map((line, index) => {
        if (line.checked) {
          return (
            <View key={"line" + index} style={styles.checkBoxContainer}>
              <CheckboxButton
                noteIndex={noteIndex}
                index={index}
                checked={true}
              />
              <TextInput
                style={styles.checkTextFilled}
                value={line.text}
                onChange={(e) => textLineInput(e, index)}
                multiline={true}
                onFocus={() => setDeleteButton(index)}
                onBlur={() => setDeleteButton(null)}
              />
              {deleteButton === index ? (
                <DeleteButton noteIndex={noteIndex} index={index} />
              ) : (
                <View style={styles.deleteButtonPlaceholder}></View>
              )}
            </View>
          );
        }
      })}
    </View>
  );
};

export default CheckboxEditingContainer;

const styles = StyleSheet.create({
  checkBoxViewContainer: {
    paddingBottom: 16,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  checkText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
    lineHeight: 22,
  },
  checkTextFilled: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
    lineHeight: 22,
    color: theme.colors.dullNoteText,
    textDecorationLine: "line-through",
  },
  deleteButtonPlaceholder: {
    height: 25,
    width: 25,
  },
});
