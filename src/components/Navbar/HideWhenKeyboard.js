import React, { useState, useEffect } from "react";
import { Keyboard, StyleSheet, View } from "react-native";

const HideWhenKeyboard = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setVisible(false);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setVisible(true);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (!visible) {
    return <View style={styles.hiddenNavbar}></View>;
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default HideWhenKeyboard;

const styles = StyleSheet.create({
  hiddenNavbar: {
    backgroundColor: "red",
    marginTop: -60,
  },
});
