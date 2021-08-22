import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { setPage } from "../../store/actions/global";
import { useDispatch, useSelector } from "react-redux";
import TimerInput from "./TimerInput";
import Keypad from "./Keypad";
import BottomBar from "./BottomBar";
import theme from "../../theme";
import Circle from "./Circle";
import {
  startTimer,
  pauseTimer,
  deleteTimer,
  changeTimer,
  finishTimer,
  stopTimer,
} from "../../store/actions/timer";

const Timer = () => {
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();
  const { started, timer, startTime } = useSelector((state) => state.timer);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Timer"));
  }, []);

  const convertToTimer = (timerInput) => {
    const hours = timerInput[0] * 10 + timerInput[1];
    const mins = timerInput[2] * 10 + timerInput[3];
    const secs = timerInput[4] * 10 + timerInput[5];
    const timer = 1000 * (hours * 60 * 60 + mins * 60 + secs);
    return timer;
  };

  console.log(timer);
  const playPress = (timerInput) => {
    // If on first press, get the entered time
    let newTimer = timer;
    if (timer === 0) {
      newTimer = convertToTimer(timerInput);
    }

    const newStartTime = Date.now();
    dispatch(startTimer(newStartTime, newTimer));

    const interval = setInterval(() => {
      // Stop interval if once 0 reached
      if (newStartTime + newTimer - Date.now() <= 0) {
        clearInterval(interval);
        setIntervalId(null);
        dispatch(finishTimer());
        return;
      }
      dispatch(changeTimer(newStartTime + newTimer - Date.now()));
    }, 200);
    setIntervalId(interval);
  };

  const pausePress = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    dispatch(pauseTimer(startTime + timer - Date.now()));
  };

  const deletePress = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    dispatch(deleteTimer());
  };

  const stopPress = (timerInput) => {
    dispatch(stopTimer(convertToTimer(timerInput)));
  };
  return (
    <View style={styles.container}>
      {started ? (
        <Circle />
      ) : (
        <React.Fragment>
          <TimerInput />
          <Keypad />
        </React.Fragment>
      )}

      <BottomBar
        playPress={playPress}
        pausePress={pausePress}
        deletePress={deletePress}
        stopPress={stopPress}
      />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: theme.navBarHeight,
  },
});
