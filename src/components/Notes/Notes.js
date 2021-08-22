import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setPage } from "../../store/actions/global";

const Notes = () => {
  const dispatch = useDispatch();

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Notes"));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notes</Text>
    </View>
  );
};

export default Notes;

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
