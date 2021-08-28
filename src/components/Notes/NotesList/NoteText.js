import React from "react";
import { StyleSheet, Text } from "react-native";

const NoteText = ({ text }) => {
  let textDisplay = text;
  if (
    text.includes("\n") &&
    text.match(/\n/g).length >= 5 &&
    text.length < 150
  ) {
    // If text has a lot of lines only show first 5
    textDisplay = text.split("\n").slice(0, 5).join("\n") + "...";
  } else if (text.length >= 150) {
    // If length of text is greater than 150 display cut off text
    textDisplay = text.slice(0, 150) + "...";
  }

  return <Text style={styles.noteText}>{textDisplay}</Text>;
};

export default NoteText;

const styles = StyleSheet.create({
  noteText: {
    color: "white",
    lineHeight: 20,
  },
});
