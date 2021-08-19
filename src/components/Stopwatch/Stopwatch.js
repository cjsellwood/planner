import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Stopwatch = () => {
  return (
    <View>
      <Text style={styles.text}>Stopwatch</Text>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
