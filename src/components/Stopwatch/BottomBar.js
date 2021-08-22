import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../theme";
import PauseIcon from "./PauseIcon";
import PlayIcon from "./PlayIcon";

const BottomBar = ({ resetPress, playPausePress }) => {
  const { stopwatch, started } = useSelector((state) => state.stopwatch);
  return (
    <View style={styles.bottomBarContainer}>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarItem}>
          {stopwatch === 0 ? null : (
            <Pressable onPress={() => resetPress()} style={styles.button}>
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
          )}
        </View>
        <View style={styles.bottomBarItem}>
          <Pressable
            onPress={() => playPausePress()}
            style={styles.playPauseIcon}
          >
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
    height: 70,
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
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
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    padding: 16,
  },
});
