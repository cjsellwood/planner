import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import theme from "../../theme";

const Circle = ({ startTimer, hour, minute, second, millisecond }) => {
  return (
    <View style={styles.circleContainer}>
      <Pressable onPress={() => startTimer()} style={styles.circle}>
        <View style={styles.timeContainer}>
          <Text style={[styles.text, hour > 100 ? styles.smallText : null]}>
            {hour}
          </Text>
          <Text style={[styles.text, hour > 100 ? styles.smallText : null]}>
            {minute}
          </Text>
          <Text style={[styles.text, hour > 100 ? styles.smallText : null]}>
            {second}:
          </Text>
          <Text style={[styles.text, hour > 100 ? styles.smallText : null]}>
            {millisecond}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  circleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
  smallText: {
    fontSize: 35,
  },
  circle: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 200,
    height: 250,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
  },
});
