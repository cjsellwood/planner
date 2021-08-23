import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";

const Circle = () => {
  const { timer } = useSelector((state) => state.timer);

  let hour = Math.floor(timer / 1000 / 60 / 60);
  let minute = Math.floor(timer / 1000 / 60) % 60;
  let second = Math.ceil(timer / 1000) % 60;

  let hourDisplay = hour + ":";
  let minuteDisplay = minute + ":";
  let secondDisplay = second;

  // Don't show hour if 0
  if (hour === 0) {
    hourDisplay = "";
    // If second is 0 and minute is 0 and hour is more than 0, add 1 hour
  } else if (second === 0 && minute === 59 && hour > 0) {
    hourDisplay = hour + 1 + ":";
  }

  // If second is 0  and hour is more than 0, add 1 to minute
  if (second === 0 && minute === 59 && hour > 0) {
    minuteDisplay = "00:";
  } else if (second !== 0 && minute === 0 && hour === 0) {
    // Don't show minute if 0 when hour is also 0
    minuteDisplay = "";
  } else if (second === 0) {
    // If second is 0 add 1 to it
    minuteDisplay = (minute + 1).toString().padStart(2, "0") + ":";
  } else if (hour > 0) {
    // Add leading 0 if also hours shown
    minuteDisplay = minute.toString().padStart(2, "0") + ":";
  }

  // Add leading 0 if also minutes or hours shown
  if (second === 0 || minute > 0 || hour > 0) {
    secondDisplay = second.toString().padStart(2, "0");
  }

  console.log(
    hour,
    minute,
    second,
    hourDisplay + minuteDisplay + secondDisplay
  );

  return (
    <View style={styles.circleContainer}>
      <Pressable onPress={() => {}} style={styles.circle}>
        <View style={styles.timeContainer}>
          <Text style={styles.text}>{hourDisplay}</Text>
          <Text style={styles.text}>{minuteDisplay}</Text>
          <Text style={styles.text}>{secondDisplay}</Text>
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
