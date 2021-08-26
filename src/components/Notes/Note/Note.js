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
import SquareIcon from "./icons/SquareIcon";

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

  const textLineInput = (e, line) => {
    console.log(e, e.nativeEvent.text, line);
    const splitText = note.text.match(/^$|[^.\n]+/g);
    splitText[line] = e.nativeEvent.text;
    dispatch(changeText(noteIndex, splitText.join("\n")));
  };

  const submitPress = (index) => {
    console.log(index);
  };

  // Split text by line - for use if adding checkboxes
  // console.log(note.text.match(/[^.\n]+/g));

  console.log(note.text.match(/^$|[^.\n]+/g));

  return (
    <View style={[styles.container, styles["color" + note.color]]}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.noteColors[note.color]}
        style={styles.statusBar}
        hidden={false}
      />
      <TopBar noteIndex={noteIndex} />
      <ScrollView style={[styles.noteContainer, styles["color" + note.color]]}>
        <TextInput
          style={styles.noteTitle}
          value={note.title}
          onChangeText={titleInput}
          placeholder="Title"
          placeholderTextColor={"gray"}
          multiline={true}
        />
        {!note.checkboxes ? (
          <TextInput
            style={styles.noteText}
            value={note.text}
            onChangeText={textInput}
            placeholder="Note"
            placeholderTextColor={"gray"}
            multiline={true}
          />
        ) : (
          <View>
            {note.text.match(/^$|[^.\n]+/g).map((line, index) => {
              return (
                <View key={"line" + index} style={styles.checkBoxContainer}>
                  <SquareIcon />
                  <TextInput
                    style={styles.checkText}
                    value={line}
                    onChange={(e) => textLineInput(e, index)}
                    multiline={true}
                    onSubmitEditing={(index) => submitPress(index)}
                  />
                </View>
              );
            })}
          </View>
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
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    color: "white",
    fontSize: 16,
    marginLeft: 6,
    flex: 1,
  },
  color0: {
    backgroundColor: theme.noteColors[0],
  },
  color1: {
    backgroundColor: theme.noteColors[1],
  },
  color2: {
    backgroundColor: theme.noteColors[2],
  },
  color3: {
    backgroundColor: theme.noteColors[3],
  },
  color4: {
    backgroundColor: theme.noteColors[4],
  },
  color5: {
    backgroundColor: theme.noteColors[5],
  },
  color6: {
    backgroundColor: theme.noteColors[6],
  },
  color7: {
    backgroundColor: theme.noteColors[7],
  },
  color8: {
    backgroundColor: theme.noteColors[8],
  },
});
