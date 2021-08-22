import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const BackspaceIcon = () => {
  return (
    <Svg {...svgProps} style={styles.svg}>
      <Path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
    </Svg>
  );
};

export default BackspaceIcon;

const styles = StyleSheet.create({
  svg: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
});

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "28",
  height: "28",
  fill: "currentColor",
  viewBox: "0 0 16 16",
};
