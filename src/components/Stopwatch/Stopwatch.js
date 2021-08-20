import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Stopwatch = () => {
  const [started, setStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerInterval, setTimerInterval] = useState();
  const [startTime, setStartTime] = useState();
  const [offset, setOffset] = useState(0);

  const startTimer = () => {
    // If already started pause instead
    if (started) {
      setTimer(Date.now() - startTime + offset);
      setOffset(Date.now() - startTime + offset);
      setStarted(false);
      clearInterval(timerInterval);
      return;
    }

    const newStartTime = Date.now();
    setStartTime(newStartTime);
    setStarted(true);

    // Set interval for timer to show change
    setTimerInterval(
      setInterval(() => {
        setTimer(Date.now() - newStartTime + offset);
      }, 10)
    );
  };

  const resetTimer = () => {
    setStarted(false);
    setTimer(0);
    setOffset(0);
    setStartTime();
    clearInterval(timerInterval);
  };

  const millisecond = Math.floor(new Date(timer).getMilliseconds() / 10)
    .toString()
    .padStart(2, "0");

  const second =
    timer > 1000 * 10
      ? new Date(timer).getSeconds().toString().padStart(2, "0")
      : new Date(timer).getSeconds();

  let minute = null;
  if (timer > 1000 * 60 * 60) {
    new Date(timer).getMinutes().toString().padStart(2, "0") + ":";
  } else if (timer > 1000 * 60) {
    new Date(timer).getMinutes() + ":";
  }

  const hour = timer > 1000 * 60 * 60 ? new Date(timer).getHours() + ":" : null;

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <React.Fragment>
              <Text>{hour}</Text>
              <Text>{minute}</Text>
              <Text>{second}:</Text>
              <Text>{millisecond}</Text>
            </React.Fragment>
          </Text>
        </View>
      </View>
      <View style={styles.bottomBarContainer}>
        <View style={styles.bottomBar}>
          <Pressable onPress={() => resetTimer()} style={styles.button}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
          <Pressable onPress={() => startTimer()} style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Lap</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    paddingBottom: 50,
    flex: 1,
  },
  circleContainer: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 60,
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
  bottomBarContainer: {
    height: 50,
    backgroundColor: "red",
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "pink",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    backgroundColor: "purple",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
