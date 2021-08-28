import React from "react";
import {
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-native";
import BackIcon from "./icons/BackIcon";
import DeleteIcon from "./icons/DeleteIcon";
import { deleteNote } from "../../../store/actions/notes";

const TopBar = ({ noteIndex }) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const deletePress = () => {
    dispatch(deleteNote(noteIndex));
    history.replace("/notes");
  };
  return (
    <View style={styles.topBar}>
      <Link
        style={styles.backLink}
        to="/notes"
        component={Pressable}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.2)",
          borderless: true,
          radius: 25,
        }}
      >
        <BackIcon />
      </Link>
      <View style={styles.centerContainer}></View>
      <Pressable
        onPress={deletePress}
        style={styles.deleteContainer}
        android_ripple={{
          color: "rgba(255, 255, 255, 0.2)",
          borderless: false,
          radius: 25,
        }}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: 50,
    justifyContent: "center",
    flexDirection: "row",
  },
  backLink: {
    width: 70,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
  },
  deleteContainer: {
    height: 50,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
