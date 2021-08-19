import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Switch, Route } from "react-router-native";
import Notes from "./Notes/Notes";
import Reminders from "./Reminders/Reminders";
import Timer from "./Timer/Timer";
import Stopwatch from "./Stopwatch/Stopwatch";

const Main = () => {
  return (
    <View>
      <Switch>
        <Route path="/notes">
          <Notes />
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
      <Text>Navigation Bar</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
