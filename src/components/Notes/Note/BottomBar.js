import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import theme from "../../../theme";
import displayEditDate from "./displayEditDate";
import ColorIcon from "./icons/ColorIcon";
import { setNoteColor } from "../../../store/actions/notes";

const BottomBar = ({ note, noteIndex }) => {
  const [showColorChoice, setShowColorChoice] = useState(false);

  const dispatch = useDispatch();
  return (
    <View style={styles.bottomBar}>
      <View style={styles.sideContainer}>
        <Pressable
          style={styles.colorButton}
          onPress={() => setShowColorChoice(true)}
        >
          <ColorIcon />
        </Pressable>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.lastEdited}>
          Edited {displayEditDate(note.lastEdited)}
        </Text>
      </View>
      <View style={styles.sideContainer}></View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showColorChoice}
        onRequestClose={() => setShowColorChoice(false)}
      >
        <Pressable
          onPress={() => {
            setShowColorChoice(false);
          }}
          style={styles.modal}
        >
          <Pressable style={styles.colorContainer} onPress={() => {}}>
            {theme.noteColors.map((color, index) => (
              <Pressable
                key={color}
                style={[styles.colorChoice, styles["color" + index]]}
                onPress={() => {
                  setShowColorChoice(false);
                  dispatch(setNoteColor(noteIndex, index));
                }}
              ></Pressable>
            ))}
          </Pressable>
        </Pressable>
      </Modal>
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
    color: "gray",
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
  colorButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(1, 1, 1, 0.7)",
    zIndex: 4,
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
  color0: {
    backgroundColor: theme.noteColors[0],
  },
  color1: {
    backgroundColor: theme.noteColors[1],
  },
  color2: {
    backgroundColor: theme.noteColors[2],
  },
  color3: {
    backgroundColor: theme.noteColors[3],
  },
  color4: {
    backgroundColor: theme.noteColors[4],
  },
  color5: {
    backgroundColor: theme.noteColors[5],
  },
  color6: {
    backgroundColor: theme.noteColors[6],
  },
  color7: {
    backgroundColor: theme.noteColors[7],
  },
  color8: {
    backgroundColor: theme.noteColors[8],
  },
});
