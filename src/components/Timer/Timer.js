import React, { useEffect, useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
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
  initTimer,
} from "../../store/actions/timer";
import { Audio } from "expo-av";
import * as Notifications from "expo-notifications";

const Timer = () => {
  const [intervalId, setIntervalId] = useState(null);
  const dispatch = useDispatch();
  const { started, endTime, paused, timer, storageUsed, scheduleId } =
    useSelector((state) => state.timer);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Timer"));
  }, []);

  // Retrieve any stored timer values
  useEffect(() => {
    dispatch(initTimer());
  }, []);

  const triggerNotification = (time) => {
    const scheduledId = Notifications.scheduleNotificationAsync({
      content: {
        title: "Timer Finished",
        body: "0:00",
        data: { page: "/timer" },
      },
      trigger: {
        seconds: time / 1000,
      },
    });
    return scheduledId;
  };

  // Start interval if stored values should make the timer run
  useEffect(() => {
    if (started && !paused) {
      // Set timer to 0 if already finished
      if (endTime - Date.now() <= 0) {
        dispatch(finishTimer());
        clearInterval(beepInterval);
        playSound();
        const interval = setInterval(() => {
          playSound();
        }, 800);
        setBeepInterval(interval);
        return;
      }
      const interval = setInterval(() => {
        // Stop interval if once 0 reached
        if (endTime - Date.now() <= 0) {
          clearInterval(interval);
          setIntervalId(null);
          dispatch(finishTimer());

          clearInterval(beepInterval);
          playSound();
          const interval = setInterval(() => {
            playSound();
          }, 800);
          setBeepInterval(interval);
          return;
        }
        dispatch(changeTimer(endTime - Date.now()));
      }, 200);
      setIntervalId(interval);
    }
  }, [storageUsed]);

  // Clear the currently used interval on unmount of timer component
  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  const convertToTimer = (timerInput) => {
    const hours = timerInput[0] * 10 + timerInput[1];
    const mins = timerInput[2] * 10 + timerInput[3];
    const secs = timerInput[4] * 10 + timerInput[5];
    const timer = 1000 * (hours * 60 * 60 + mins * 60 + secs);
    return timer;
  };

  const playPress = async (timerInput) => {
    // If on first press, get the entered time
    let newTimer = timer;
    if (timer === 0) {
      newTimer = convertToTimer(timerInput);
    }
    const newEndTime = Date.now() + newTimer;

    const scheduleId = await triggerNotification(newTimer);
    dispatch(startTimer(newEndTime, newTimer, scheduleId));

    triggerNotification(newTimer);

    const interval = setInterval(() => {
      // Stop interval once 0 reached
      if (newEndTime - Date.now() <= 0) {
        clearInterval(interval);
        setIntervalId(null);
        dispatch(finishTimer());

        clearInterval(beepInterval);
        playSound();
        const interval = setInterval(() => {
          playSound();
        }, 1000);
        setBeepInterval(interval);
        return;
      }
      dispatch(changeTimer(newEndTime - Date.now()));
    }, 200);
    setIntervalId(interval);
  };

  const pausePress = async () => {
    await Notifications.cancelScheduledNotificationAsync(scheduleId);
    clearInterval(intervalId);
    setIntervalId(null);
    dispatch(pauseTimer(endTime - Date.now()));
  };

  const deletePress = async () => {
    await Notifications.cancelScheduledNotificationAsync(scheduleId);
    clearInterval(beepInterval);
    clearInterval(intervalId);
    setIntervalId(null);
    dispatch(deleteTimer());
  };

  const stopPress = (timerInput) => {
    clearInterval(beepInterval);
    dispatch(stopTimer(convertToTimer(timerInput)));
  };

  const [sound, setSound] = useState();
  const [beepInterval, setBeepInterval] = useState(null);

  const playSound = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        // eslint-disable-next-line no-undef
        require("../../../assets/beep.wav")
      );

      setSound(sound);

      await sound.playAsync();
      await setTimeout(() => {}, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unload = () => {
      sound.unloadAsync();
    };
    return () => {
      sound ? unload() : undefined;
    };
  }, [sound]);

  // Clear sound interval
  useEffect(() => {
    return () => clearInterval(beepInterval);
  }, [beepInterval]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.colors.mainBackground}
        style={styles.statusBar}
        hidden={false}
      />
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
