import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import theme from "../../../theme";
import displayEditDate from "./displayEditDate";
import ColorIcon from "./icons/ColorIcon";
import { changeType } from "../../../store/actions/notes";
import CheckboxIcon from "./icons/CheckboxIcon";
import NotesIcon from "./icons/NotesIcon";
import ColorModal from "./ColorModal";

const BottomBar = ({ note, noteIndex }) => {
  const [showColorChoice, setShowColorChoice] = useState(false);

  const dispatch = useDispatch();
  return (
    <View style={styles.bottomBar}>
      <View style={styles.sideContainer}>
        <Pressable
          style={styles.sideButton}
          onPress={() => setShowColorChoice(true)}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.2)",
            borderless: false,
            radius: 25,
          }}
        >
          <ColorIcon />
        </Pressable>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.lastEdited}>
          Edited {displayEditDate(note.lastEdited)}
        </Text>
      </View>
      <View style={styles.sideContainer}>
        <Pressable
          style={styles.sideButton}
          onPress={() => dispatch(changeType(noteIndex, note.text === null))}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.2)",
            borderless: false,
            radius: 25,
          }}
        >
          {note.checkboxes ? <NotesIcon /> : <CheckboxIcon />}
        </Pressable>
      </View>
      <ColorModal
        showColorChoice={showColorChoice}
        setShowColorChoice={setShowColorChoice}
        noteIndex={noteIndex}
      />
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    height: 50,
    flexDirection: "row",
  },
  lastEdited: {
    color: theme.colors.dullNoteText,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sideContainer: {
    width: 50,
    height: 50,
  },
  sideButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
