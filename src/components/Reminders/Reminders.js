import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Reminders = () => {
  return (
    <View>
      <Text style={styles.text}>Reminders</Text>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
