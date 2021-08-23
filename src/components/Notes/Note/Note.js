import React from "react";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-native";
import theme from "../../../theme";
import { changeTitle } from "../../../store/actions/notes";

const Note = () => {
  const { id } = useParams();

  const notes = useSelector((state) => state.notes.notes);

  const note = notes.find((note) => note.id.toString() === id.toString());

  const noteIndex = notes.findIndex(
    (note) => note.id.toString() === id.toString()
  );

  const dispatch = useDispatch();

  const titleInput = (text) => {
    dispatch(changeTitle(noteIndex, text));
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}></View>
      <ScrollView style={styles.noteContainer}>
        <TextInput
          style={styles.noteTitle}
          value={note.title}
          onChangeText={titleInput}
          placeholder="Title"
        />
        <Text style={styles.noteText}>{note.text}</Text>
      </ScrollView>
      <View style={styles.bottomBar}></View>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: theme.navBarHeight,
  },
  topBar: {
    height: 50,
    backgroundColor: "fuchsia",
  },
  noteContainer: {
    flex: 1,
    backgroundColor: "darkorange",
    padding: 16,
  },
  noteTitle: {
    color: "white",
    fontSize: 22,
    marginBottom: 8,
  },
  noteText: {
    color: "white",
    fontSize: 16,
  },
  bottomBar: {
    height: 50,
    backgroundColor: "chartreuse",
  },
});
