import React from "react";
import { StyleSheet, Pressable } from "react-native";
import theme from "../../theme";
import PlusIcon from "./icons/PlusIcon";

const AddReminderButton = ({ setNewReminderModal }) => {
  return (
    <Pressable
      onPress={() => setNewReminderModal(true)}
      style={styles.newReminderButton}
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

export default AddReminderButton;

const styles = StyleSheet.create({
  newReminderButton: {
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
