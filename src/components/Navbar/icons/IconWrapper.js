import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../../theme";
import Svg from "react-native-svg";
import { useSelector } from "react-redux";

const IconWrapper = (props) => {
  const page = useSelector((state) => state.global.page);
  return (
    <View>
      <Svg
        {...svgProps}
        style={[styles.svg, page === props.icon ? styles.selected : null]}
      >
        {props.children}
      </Svg>
    </View>
  );
};

export default IconWrapper;

const styles = StyleSheet.create({
  svg: {
    marginLeft: "auto",
    marginRight: "auto",
    color: theme.colors.navBarText,
  },
  selected: {
    color: theme.colors.primary,
  },
});

const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor",
  viewBox: "0 0 16 16",
};
