import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Switch, Route, Redirect, useHistory } from "react-router-native";
import NotesList from "./Notes/NotesList/NotesList";
import Reminders from "./Reminders/Reminders";
import Timer from "./Timer/Timer";
import Stopwatch from "./Stopwatch/Stopwatch";
import Navbar from "./Navbar/Navbar";
import theme from "../theme";
import Note from "./Notes/Note/Note";
import * as Notifications from "expo-notifications";

const Main = () => {
  const history = useHistory();
  useEffect(() => {
    const responseSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        history.push(response.notification.request.content.data.page);
      });
    return () => {
      responseSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="/notes" />
        </Route>
        <Route exact path="/notes">
          <NotesList />
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
