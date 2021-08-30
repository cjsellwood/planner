import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import NavbarItem from "./NavbarItem";
import StopwatchIcon from "./icons/StopwatchIcon";
import TimerIcon from "./icons/TimerIcon";
import RemindersIcon from "./icons/RemindersIcon";
import NotesIcon from "./icons/NotesIcon";
import theme from "../../theme";
import HideWhenKeyboard from "./HideWhenKeyboard";

const Navbar = () => {
  return (
    <HideWhenKeyboard>
      <View style={styles.navBar}>
        <ScrollView horizontal={true} contentContainerStyle={styles.bar}>
          <NavbarItem text="Notes" to="/notes" icon={<NotesIcon />} />
          <NavbarItem
            text="Reminders"
            to="/reminders"
            icon={<RemindersIcon />}
          />
          <NavbarItem text="Timer" to="/timer" icon={<TimerIcon />} />
          <NavbarItem
            text="Stopwatch"
            to="/stopwatch"
            icon={<StopwatchIcon />}
          />
        </ScrollView>
      </View>
    </HideWhenKeyboard>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: theme.colors.navBarBackground,
    position: "absolute",
    left: 0,
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  bar: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
