import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import theme from "../../theme";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";

const BottomBar = ({ timer, started, resetTimer, startTimer }) => {
  return (
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
          <Pressable onPress={() => startTimer()} style={styles.playPauseIcon}>
            {!started ? <PlayIcon /> : <PauseIcon />}
          </Pressable>
        </View>
        <View style={styles.bottomBarItem}>
          <Pressable style={styles.button}></Pressable>
        </View>
      </View>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBarContainer: {
    height: 60,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 70,
    paddingBottom: 10,
  },
  bottomBarItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexBasis: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "white",
  },
  playPauseIcon: {
    backgroundColor: theme.colors.stopwatchButton,
    borderRadius: 50,
    padding: 16,
  },
});
