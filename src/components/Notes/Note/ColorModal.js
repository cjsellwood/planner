import React from "react";
import { StyleSheet, Modal, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { setNoteColor } from "../../../store/actions/notes";
import theme from "../../../theme";

const ColorModal = ({ showColorChoice, setShowColorChoice, noteIndex }) => {
  const dispatch = useDispatch();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showColorChoice}
      onRequestClose={() => setShowColorChoice(false)}
      statusBarTranslucent={true}
    >
      <Pressable
        onPress={() => {
          setShowColorChoice(false);
        }}
        style={styles.modal}
      >
        <Pressable style={styles.colorContainer} onPress={() => {}}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <Pressable
              key={"color" + number}
              style={[styles.colorChoice, styles["color" + number]]}
              onPress={() => {
                setShowColorChoice(false);
                dispatch(setNoteColor(noteIndex, number));
              }}
            ></Pressable>
          ))}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default ColorModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(1, 1, 1, 0.7)",
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
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 100,
  },
  ...theme.noteColorStyles,
});
