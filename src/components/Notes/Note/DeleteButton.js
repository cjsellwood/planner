import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { deleteCheckbox } from "../../../store/actions/notes";

const DeleteButton = ({ noteIndex, index }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.deleteLineButton}
      onPress={() => dispatch(deleteCheckbox(noteIndex, index))}
      android_ripple={{
        color: "rgba(255, 255, 255, 0.4)",
        borderless: true,
        radius: 15,
      }}
    >
      <Text style={styles.deleteLineText}>x</Text>
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  deleteLineButton: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteLineText: {
    color: "white",
    fontSize: 24,
    lineHeight: 25,
  },
});
