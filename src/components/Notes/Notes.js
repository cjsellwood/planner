import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Notes = () => {
  return (
    <View>
      <Text style={styles.text}>Notes</Text>
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
