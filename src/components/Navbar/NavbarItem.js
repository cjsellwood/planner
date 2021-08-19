import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";

const NavbarItem = ({ text, to, icon }) => {
  return (
    <Pressable style={styles.item}>
      <Link style={styles.link} to={to}>
        <View>
          {icon}
          <Text style={styles.text}>{text}</Text>
        </View>
      </Link>
    </Pressable>
  );
};

export default NavbarItem;

const styles = StyleSheet.create({
  item: {},
  link: {
    padding: 8,
  },
  text: {
    color: theme.colors.navBarText,
  },
});
