import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const PlayIcon = () => {
  return (
    <Svg {...svgProps} style={styles.svg}>
      <Path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
    </Svg>
  );
};

export default PlayIcon;

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
  viewBox: "0 0 14 16",
};
