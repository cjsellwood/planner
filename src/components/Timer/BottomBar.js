import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import PlayIcon from "../Stopwatch/PlayIcon";
import PauseIcon from "../Stopwatch/PauseIcon";
import theme from "../../theme";

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.playPauseIcon}>
          <PlayIcon />
        </Pressable>
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
    backgroundColor: "orange",
    height: 70,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
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
