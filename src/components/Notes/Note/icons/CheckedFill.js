import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const CheckedFill = () => {
  return (
    <Svg
      style={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <Path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
    </Svg>
  );
};

export default CheckedFill;

const styles = StyleSheet.create({
  svg: {
    color: "lightgray",
    marginTop: 1,
  },
});
