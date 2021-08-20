import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const PauseIcon = () => {
  return (
    <Svg {...svgProps} style={styles.svg}>
      <Path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
    </Svg>
  );
};

export default PauseIcon;

const styles = StyleSheet.create({
  svg: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
});

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "white",
  viewBox: "0 0 16 16",
};
