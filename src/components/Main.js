import React from "react";
import { StyleSheet, View } from "react-native";
import { Switch, Route, Redirect } from "react-router-native";
import Notes from "./Notes/Notes";
import Reminders from "./Reminders/Reminders";
import Timer from "./Timer/Timer";
import Stopwatch from "./Stopwatch/Stopwatch";
import Navbar from "./Navbar/Navbar";
import theme from "../theme";
import Note from "./Notes/Note/Note";

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="/notes" />
        </Route>
        <Route exact path="/notes">
          <Notes />
        </Route>
        <Route path="/notes/:id">
          <Note />
        </Route>
        <Route path="/reminders">
          <Reminders />
        </Route>
        <Route path="/timer">
          <Timer />
        </Route>
        <Route path="/stopwatch">
          <Stopwatch />
        </Route>
      </Switch>
      <Navbar />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.mainBackground,
    position: "relative",
    flex: 1,
  },
});
