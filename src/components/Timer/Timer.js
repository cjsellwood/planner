import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { setPage } from "../../store/actions/global";
import { useDispatch, useSelector } from "react-redux";
import TimerInput from "./TimerInput";
import Keypad from "./Keypad";
import BottomBar from "./BottomBar";
import theme from "../../theme";
import Circle from "./Circle";

const Timer = () => {
  const dispatch = useDispatch();
  const { started } = useSelector((state) => state.timer);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Timer"));
  }, []);

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
