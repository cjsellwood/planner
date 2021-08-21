import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BottomBar from "./BottomBar";
import Circle from "./Circle";
import theme from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import {
  pauseTimer,
  startTimer,
  resetTimer,
  changeTimer,
} from "../../store/actions/stopwatch";

const Stopwatch = () => {
  const [timerInterval, setTimerInterval] = useState(null);

  const { started, startTime, offset } = useSelector(
    (state) => state.stopwatch
  );

  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        dispatch(changeTimer(Date.now() - startTime + offset));
      }, 10);
      setTimerInterval(interval);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearInterval(timerInterval);
    };
  }, [timerInterval]);

  const dispatch = useDispatch();

  const playPausePress = () => {
    console.log(timerInterval, started, startTime, offset);
    // If already started pause instead
    if (started) {
      dispatch(pauseTimer(Date.now() - startTime + offset));
      clearInterval(timerInterval);
      setTimerInterval(timerInterval);
      return;
    }

    const newStartTime = Date.now();
    dispatch(startTimer(newStartTime));

    // Set interval for changing displayed time
    const interval = setInterval(() => {
      dispatch(changeTimer(Date.now() - newStartTime + offset));
    }, 10);
    setTimerInterval(interval);
  };

  const resetPress = () => {
    dispatch(resetTimer());
    clearInterval(timerInterval);
    setTimerInterval(null);
  };

  return (
    <View style={styles.container}>
      <Circle playPausePress={playPausePress} />
      <BottomBar resetPress={resetPress} playPausePress={playPausePress} />
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
