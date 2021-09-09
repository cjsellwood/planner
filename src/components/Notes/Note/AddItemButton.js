import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import PlusIcon from "./icons/PlusIcon";
import { addNewCheckbox } from "../../../store/actions/notes";

const AddItemButton = ({ noteIndex }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.addItemButton}
      onPress={() => dispatch(addNewCheckbox(noteIndex))}
      android_ripple={{
        color: "rgba(255, 255, 255, 0.1)",
        borderless: false,
      }}
    >
      <PlusIcon />
      <Text style={styles.addItemText}>ADD ITEM</Text>
    </Pressable>
  );
};

export default AddItemButton;

const styles = StyleSheet.create({
  addItemButton: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 1,
    marginVertical: 8,
  },
  addItemText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
});
