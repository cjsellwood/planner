import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SquareIcon from "./icons/SquareIcon";

const NoteCheckboxes = ({ checkboxes }) => {
  // Trim text if taking up too much space on notes list
  const displayText = (text) => {
    let trimmedText = text;
    if (text.includes("\n") && text.match(/\n/g).length >= 3) {
      trimmedText = text.split("\n").slice(0, 3).join("\n") + "...";
    } else if (text.length >= 140) {
      trimmedText = text.slice(0, 140) + "...";
    }
    return trimmedText;
  };

  return (
    <View>
      {checkboxes
        .filter((line) => !line.checked)
        .map((line, index) => {
          if (index < 5) {
            return (
              <View key={"check" + index} style={styles.checkboxContainer}>
                <SquareIcon />
                <Text style={styles.checkBoxText}>
                  {displayText(line.text)}
                </Text>
              </View>
            );
          }
        })}
      {checkboxes.filter((line) => !line.checked).length > 5 ? (
        <Text style={styles.tooLongText}>...</Text>
      ) : null}
    </View>
  );
};

export default NoteCheckboxes;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  checkBoxText: {
    marginLeft: 6,
    color: "white",
    lineHeight: 20,
    marginRight: 14,
  },
  tooLongText: {
    color: "white",
    marginLeft: 26,
  },
});
