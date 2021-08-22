import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import useTimeDisplay from "../../hooks/useTimeDisplay";

const Circle = ({ playPausePress }) => {
  const stopwatch = useSelector((state) => state.stopwatch.stopwatch);
  const [hour, timeDisplay] = useTimeDisplay(stopwatch);

  return (
    <View style={styles.circleContainer}>
      <Pressable onPress={() => playPausePress()} style={styles.circle}>
        <View style={styles.timeContainer}>
          <Text style={[styles.text, hour > 10 ? styles.smallText : null]}>
            {timeDisplay}
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
