import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-native";
import theme from "../../../theme";
import { changeTitle, changeText } from "../../../store/actions/notes";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import CheckboxEditingContainer from "./CheckboxEditingContainer";

const Note = () => {
  const { id } = useParams();

  const [noteIndex, setNoteIndex] = useState();

  const notes = useSelector((state) => state.notes.notes);

  const note = notes.find((note) => note.id.toString() === id.toString());

  // If accessing deleted note with back button
  if (!note) {
    const history = useHistory();
    history.push("/notes");
    return null;
  }

  // Get index of note in notes array for updating text
  useEffect(() => {
    setNoteIndex(
      notes.findIndex((note) => {
        return note.id.toString() === id.toString();
      })
    );
  }, [id]);

  const dispatch = useDispatch();

  const titleInput = (title) => {
    dispatch(changeTitle(noteIndex, title));
  };

  const textInput = (text) => {
    dispatch(changeText(noteIndex, text));
  };

  return (
    <View style={[styles.container, styles["color" + note.color]]}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={
          theme.noteColorStyles["color" + note.color].backgroundColor
        }
        style={styles.statusBar}
        hidden={false}
      />
      <TopBar noteIndex={noteIndex} />
      <ScrollView
        style={[styles.noteContainer, styles["color" + note.color]]}
        keyboardShouldPersistTaps="handled"
      >
        <TextInput
          style={styles.noteTitle}
          value={note.title}
          onChangeText={titleInput}
          placeholder="Title"
          placeholderTextColor={"gray"}
          multiline={true}
          maxLength={100}
        />
        {!note.checkboxes ? (
          <TextInput
            style={styles.noteText}
            value={note.text}
            onChangeText={textInput}
            placeholder="Note"
            placeholderTextColor={"gray"}
            multiline={true}
            autoFocus
          />
        ) : (
          <CheckboxEditingContainer
            checkboxes={note.checkboxes}
            noteIndex={noteIndex}
          />
        )}
      </ScrollView>
      <BottomBar note={note} noteIndex={noteIndex} />
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: theme.navBarHeight,
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
    lineHeight: 22,
  },
  ...theme.noteColorStyles,
});
