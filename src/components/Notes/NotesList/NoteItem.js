import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

import NoteText from "./NoteText";
import theme from "../../../theme";
import NoteCheckboxes from "./NoteCheckboxes";

const NoteItem = ({ item }) => {
  return (
    <Link
      to={`/notes/${item.id}`}
      component={TouchableOpacity}
      activeOpacity={0.8}
    >
      <View style={[styles.note, styles["color" + item.color]]}>
        {item.title ? <Text style={styles.title}>{item.title}</Text> : null}
        {item.text ? (
          <NoteText text={item.text} />
        ) : item.checkboxes ? (
          <NoteCheckboxes checkboxes={item.checkboxes} />
        ) : null}
      </View>
    </Link>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  note: {
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 4,
    elevation: 4,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 4,
    fontSize: 16,
  },
  ...theme.noteColorStyles,
});
