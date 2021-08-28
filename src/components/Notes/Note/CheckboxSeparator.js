import React from "react";
import { StyleSheet, View } from "react-native";

const CheckboxSeparator = ({ show }) => {
  if (!show) {
    return null;
  }
  return <View style={styles.checkboxSeparator}></View>;
};

export default CheckboxSeparator;

const styles = StyleSheet.create({
  checkboxSeparator: { backgroundColor: "gray", height: 1, marginVertical: 12 },
});
