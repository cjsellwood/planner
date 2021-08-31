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
              android_ripple={{
                color: "rgba(255, 255, 255, 0.2)",
                borderless: true,
                radius: 35,
              }}
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 200,
  },
  keysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 270,
  },
  keyButton: {
    width: 75,
    height: 75,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: "white",
    fontSize: 40,
  },
});
