import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { toggleCheckbox } from "../../../store/actions/notes";
import SquareIcon from "./icons/SquareIcon";
import CheckedFill from "./icons/CheckedFill";

const CheckboxButton = ({ noteIndex, index, checked }) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      style={styles.checkIconContainer}
      onPress={() => dispatch(toggleCheckbox(noteIndex, index))}
      android_ripple={{
        color: "rgba(255, 255, 255, 0.4)",
        borderless: false,
        radius: 12,
      }}
    >
      {checked ? <CheckedFill /> : <SquareIcon />}
    </Pressable>
  );
};

export default CheckboxButton;

const styles = StyleSheet.create({
  checkIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
});
