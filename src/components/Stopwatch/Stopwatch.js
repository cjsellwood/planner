import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BottomBar from "./BottomBar";
import Circle from "./Circle";
import theme from "../../theme";
import { useSelector, useDispatch } from "react-redux";
import {
  pauseStopwatch,
  startStopwatch,
  resetStopwatch,
  changeStopwatch,
  initStopwatch,
} from "../../store/actions/stopwatch";
import { setPage } from "../../store/actions/global";

const Stopwatch = () => {
  const [stopwatchInterval, setStopwatchInterval] = useState(null);

  const dispatch = useDispatch();
  const { started, startTime, offset, storageUsed } = useSelector(
    (state) => state.stopwatch
  );

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Stopwatch"));
  }, []);

  // Retrieve any stored timer values
  useEffect(() => {
    dispatch(initStopwatch());
  }, []);

  // Start interval if stored values should make the timer run
  useEffect(() => {
    if (started) {
      const interval = setInterval(() => {
        dispatch(changeStopwatch(Date.now() - startTime + offset));
      }, 10);
      setStopwatchInterval(interval);
    }
  }, [storageUsed]);

  // Clear the currently used interval on unmount of stopwatch component
  useEffect(() => {
    return () => {
      clearInterval(stopwatchInterval);
    };
  }, [stopwatchInterval]);


  const playPausePress = () => {
    // If already started pause instead
    if (started) {
      dispatch(pauseStopwatch(Date.now() - startTime + offset));
      clearInterval(stopwatchInterval);
      setStopwatchInterval(stopwatchInterval);
      return;
    }

    const newStartTime = Date.now();
    dispatch(startStopwatch(newStartTime));

    // Set interval for changing displayed time
    const interval = setInterval(() => {
      dispatch(changeStopwatch(Date.now() - newStartTime + offset));
    }, 10);
    setStopwatchInterval(interval);
  };

  const resetPress = () => {
    dispatch(resetStopwatch());
    clearInterval(stopwatchInterval);
    setStopwatchInterval(null);
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
