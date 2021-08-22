import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { Link } from "react-router-native";
import theme from "../../theme";

const NavbarItem = ({ text, to, icon }) => {
  const page = useSelector((state) => state.global.page);
  return (
    <Pressable>
      <Link style={styles.link} to={to}>
        <View>
          {icon}
          <Text style={[styles.text, text === page ? styles.selected : null]}>
            {text}
          </Text>
        </View>
      </Link>
    </Pressable>
  );
};

export default NavbarItem;

const styles = StyleSheet.create({
  link: {
    padding: 8,
    width: 90,
    textAlign: "center"
  },
  text: {
    color: theme.colors.navBarText,
    textAlign: "center"
  },
  selected: {
    color: theme.colors.primary,
  },
});
