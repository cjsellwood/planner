import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-native";
import { createNote } from "../../../store/actions/notes";
import theme from "../../../theme";
import PlusIcon from "./icons/PlusIcon";

const AddNoteButton = ({ setError }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const newNotePress = () => {
    setError("pressed new note button");
    dispatch(createNote(history, setError));
  };
  return (
    <Pressable
      onPress={newNotePress}
      style={styles.newNoteButton}
      android_ripple={{
        color: "rgba(0, 0, 0, 0.2)",
        borderless: false,
        radius: 30,
      }}
    >
      <PlusIcon />
    </Pressable>
  );
};

export default AddNoteButton;

const styles = StyleSheet.create({
  newNoteButton: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    padding: 16,
    bottom: 15,
    zIndex: 10,
    elevation: 2,
  },
});
