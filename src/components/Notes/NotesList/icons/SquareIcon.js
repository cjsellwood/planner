import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const SquareIcon = () => {
  return (
    <Svg
      style={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <Path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    </Svg>
  );
};

export default SquareIcon;

const styles = StyleSheet.create({
  svg: {
    color: "white",
    marginTop: 1,
  },
});
