import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { setPage } from "../../store/actions/global";
import { useDispatch } from "react-redux";

const Timer = () => {
  const dispatch = useDispatch();

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Timer"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Timer</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
