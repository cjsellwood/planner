import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import PlayIcon from "../Stopwatch/PlayIcon";
import PauseIcon from "../Stopwatch/PauseIcon";
import theme from "../../theme";
import { useSelector } from "react-redux";
import StopIcon from "./icons/StopIcon";

const BottomBar = ({ playPress, pausePress, deletePress, stopPress }) => {
  const { timerInput, started, paused, finished } = useSelector(
    (state) => state.timer
  );
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {!started ? null : (
          <Pressable style={styles.button} onPress={() => deletePress()}>
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.buttonContainer}>
        {timerInput.every((number) => number === 0) || !paused ? null : (
          <Pressable
            style={styles.playPauseIcon}
            onPress={() => playPress(timerInput)}
          >
            <PlayIcon />
          </Pressable>
        )}
        {started && !paused && !finished ? (
          <Pressable style={styles.playPauseIcon} onPress={() => pausePress()}>
            <PauseIcon />
          </Pressable>
        ) : null}
        {finished ? (
          <React.Fragment>
            <Pressable
              style={styles.playPauseIcon}
              onPress={() => stopPress(timerInput)}
            >
              <StopIcon />
            </Pressable>
          </React.Fragment>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable></Pressable>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  playPauseIcon: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 16,
  },
});
