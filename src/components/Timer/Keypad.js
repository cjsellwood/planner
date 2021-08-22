import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { numberInput } from "../../store/actions/timer";

const Keypad = () => {
  const dispatch = useDispatch();

  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <View style={styles.container}>
      <View style={styles.keysContainer}>
        {keys.map((key) => {
          return (
            <Pressable
              key={key}
              style={styles.keyButton}
              onPress={() => dispatch(numberInput(key))}
            >
              <Text style={styles.keyText}>{key}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    flex: 1,
    alignItems: "center",
  },
  keysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 270,
  },
  keyButton: {
    backgroundColor: "blue",
    width: 70,
    height: 70,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: "white",
    fontSize: 40,
  },
});
