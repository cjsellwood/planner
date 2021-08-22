import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BackspaceIcon from "./icons/BackspaceIcon";
import { backspaceInput, clearTimerInput } from "../../store/actions/timer";

const TimerInput = () => {
  const {timerInput} = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.timeInput}>
        <Text
          style={styles.timeText}
        >{`${timerInput[0]}${timerInput[1]}`}</Text>
        <Text style={styles.timeLabel}>h </Text>
        <Text
          style={styles.timeText}
        >{`${timerInput[2]}${timerInput[3]}`}</Text>
        <Text style={styles.timeLabel}>m </Text>
        <Text
          style={styles.timeText}
        >{`${timerInput[4]}${timerInput[5]}`}</Text>
        <Text style={styles.timeLabel}>s </Text>
        <Pressable
          onPress={() => dispatch(backspaceInput())}
          onLongPress={() => dispatch(clearTimerInput())}
          style={styles.backspace}
        >
          <BackspaceIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default TimerInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 180,
    alignItems: "center",
    justifyContent: "center",
  },
  timeInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    fontSize: 50,
    color: "white",
  },
  timeLabel: {
    fontSize: 24,
    color: "white",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  backspace: {
    marginLeft: 10,
  },
});
