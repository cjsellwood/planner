import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";

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
    minute = new Date(timer).getMinutes().toString().padStart(2, "0") + ":";
  } else if (timer > 1000 * 60) {
    minute = new Date(timer).getMinutes() + ":";
  }

  const hour = timer > 1000 * 60 * 60 ? new Date(timer).getHours() + ":" : null;

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Pressable onPress={() => startTimer()} style={styles.circle}>
          <View style={styles.timeContainer}>
            <Text style={styles.text}>{hour}</Text>
            <Text style={styles.text}>{minute}</Text>
            <Text style={styles.text}>{second}:</Text>
            <Text style={styles.text}>{millisecond}</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.bottomBarContainer}>
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarItem}>
            {timer === 0 ? null : (
              <Pressable onPress={() => resetTimer()} style={styles.button}>
                <Text style={styles.buttonText}>Reset</Text>
              </Pressable>
            )}
          </View>
          <View style={styles.bottomBarItem}>
            <Pressable onPress={() => startTimer()} style={styles.button}>
              <View style={styles.playPauseIcon}>
                {!started ? <PlayIcon /> : <PauseIcon />}
              </View>
            </Pressable>
          </View>
          <View style={styles.bottomBarItem}>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Lap</Text>
            </Pressable>
          </View>
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
    backgroundColor: "yellow",
  },
  timeContainer: {
    flexDirection: "row",
    backgroundColor: "red",
  },
  bottomBarContainer: {
    height: 50,
    backgroundColor: "red",
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
  },
  bottomBarItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexBasis: 1,
  },
  button: {
    backgroundColor: "purple",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
  },
  playPauseIcon: {
    backgroundColor: "blue",
    borderRadius: 50,
  },
});
