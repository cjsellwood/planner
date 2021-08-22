import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";

const Circle = () => {
  const { timer } = useSelector((state) => state.timer);

  return (
    <View style={styles.circleContainer}>
      <Pressable onPress={() => {}} style={styles.circle}>
        <View style={styles.timeContainer}>
          {timer >= 1000 * 60 * 60 ? (
            <Text style={styles.text}>
              {Math.floor(timer / 1000 / 60 / 60)}:
            </Text>
          ) : null}
          {timer >= 1000 * 60 * 60 ? (
            <Text style={styles.text}>
              {new Date(timer).getMinutes().toString().padStart(2, "0")}:
            </Text>
          ) : timer >= 1000 * 60 ? (
            <Text style={styles.text}>{new Date(timer).getMinutes()}:</Text>
          ) : null}
          {timer >= 1000 * 60 ? (
            <Text style={styles.text}>
              {new Date(timer).getSeconds().toString().padStart(2, "0")}
            </Text>
          ) : (
            <Text style={styles.text}>
              {Math.ceil(new Date(timer).getSeconds())}
            </Text>
          )}
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
