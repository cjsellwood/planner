import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { setPage } from "../../store/actions/global";
import { useDispatch } from "react-redux";
import TimerInput from "./TimerInput";
import Keypad from "./Keypad";
import BottomBar from "./BottomBar";
import theme from "../../theme";

const Timer = () => {
  const dispatch = useDispatch();

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Timer"));
  }, []);

  return (
    <View style={styles.container}>
      <TimerInput />
      <Keypad />
      <BottomBar />
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
