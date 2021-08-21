import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import BottomBar from "./BottomBar";
import Circle from "./Circle";
import theme from "../../theme";

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
      <Circle
        startTimer={startTimer}
        hour={hour}
        minute={minute}
        second={second}
        millisecond={millisecond}
      />
      <BottomBar
        timer={timer}
        started={started}
        resetTimer={resetTimer}
        startTimer={startTimer}
      />
    </View>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    paddingBottom: theme.navBarHeight,
    flex: 1,
  },
});
