import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const PlusIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 16 16"
      style={styles.svg}
    >
      <Path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
    </Svg>
  );
};

export default PlusIcon;

const styles = StyleSheet.create({
  svg: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
  },
});
