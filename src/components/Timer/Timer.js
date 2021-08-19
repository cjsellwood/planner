import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = () => {
  return (
    <View>
      <Text style={styles.text}>Timer</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
