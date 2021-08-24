import React, { useEffect } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/actions/global";
import theme from "../../theme";

const Reminders = () => {
  const dispatch = useDispatch();

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Reminders"));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.colors.mainBackground}
        style={styles.statusBar}
        hidden={false}
      />
      <Text style={styles.text}>Reminders</Text>
    </View>
  );
};

export default Reminders;

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
