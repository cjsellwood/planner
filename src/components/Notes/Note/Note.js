import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-native";
import theme from "../../../theme";
import { changeTitle, changeText } from "../../../store/actions/notes";
import BackIcon from "./BackIcon";
import { Link } from "react-router-native";

const Note = () => {
  const { id } = useParams();

  const [noteIndex, setNoteIndex] = useState();

  const notes = useSelector((state) => state.notes.notes);

  const note = notes.find((note) => note.id.toString() === id.toString());

  useEffect(() => {
    setNoteIndex(
      notes.findIndex((note) => note.id.toString() === id.toString())
    );
  }, [id]);

  const dispatch = useDispatch();

  const titleInput = (text) => {
    dispatch(changeTitle(noteIndex, text));
  };

  const textInput = (text) => {
    dispatch(changeText(noteIndex, text));
  };

  // Split text by line - for use if adding checkboxes
  // console.log(note.text.match(/[^.\n]+/g));

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Link style={styles.backLink} to="/notes">
          <BackIcon />
        </Link>
      </View>
      <ScrollView style={styles.noteContainer}>
        <TextInput
          style={styles.noteTitle}
          value={note.title}
          onChangeText={titleInput}
          placeholder="Title"
        />
        <TextInput
          style={styles.noteText}
          value={note.text}
          onChangeText={textInput}
          placeholder="Note"
          multiline={true}
        />
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
    justifyContent: "center",
  },
  backLink: {
    padding: 8,
    marginLeft: 8,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  noteContainer: {
    flex: 1,
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
    paddingBottom: 16,
  },
  bottomBar: {
    height: 50,
  },
});
