import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import theme from "../../theme";

const ModalButtons = ({
  inputError,
  setNewReminderModal,
  submitNewReminder,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => setNewReminderModal(false)}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
      >
        <Text style={styles.buttonText}>CANCEL</Text>
      </Pressable>
      <Pressable
        onPress={submitNewReminder}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.1)",
          borderless: false,
        }}
        disabled={inputError}
      >
        <Text style={[styles.buttonText, inputError && styles.disabledButton]}>
          OK
        </Text>
      </Pressable>
    </View>
  );
};

export default ModalButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: theme.colors.primary,
    padding: 8,
    width: 80,
    textAlign: "center",
    marginHorizontal: 4,
  },
  disabledButton: {
    color: "gray",
  },
});
