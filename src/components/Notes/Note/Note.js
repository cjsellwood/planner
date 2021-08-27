import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Text,
  Pressable,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-native";
import theme from "../../../theme";
import {
  changeTitle,
  changeText,
  changeCheckboxText,
  deleteCheckbox,
  toggleCheckbox,
  addNewCheckbox,
} from "../../../store/actions/notes";
import BottomBar from "./BottomBar";
import TopBar from "./TopBar";
import SquareIcon from "./icons/SquareIcon";
import CheckedFill from "./icons/CheckedFill";
import PlusIcon from "../PlusIcon";

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
    dispatch(changeCheckboxText(noteIndex, e.nativeEvent.text, line));
  };

  const [deleteButton, setDeleteButton] = useState(null);

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
          <View style={styles.checkBoxViewContainer}>
            {note.checkboxes.map((line, index) => {
              if (!line.checked) {
                return (
                  <View key={"line" + index} style={styles.checkBoxContainer}>
                    <Pressable
                      style={styles.checkIconContainer}
                      onPress={() => dispatch(toggleCheckbox(noteIndex, index))}
                    >
                      <SquareIcon />
                    </Pressable>
                    <TextInput
                      style={styles.checkText}
                      value={line.text}
                      onChange={(e) => textLineInput(e, index)}
                      multiline={true}
                      onFocus={() => setDeleteButton(index)}
                      onBlur={() => setDeleteButton(null)}
                    />
                    {deleteButton === index ? (
                      <Pressable
                        style={styles.deleteLineButton}
                        onPress={() =>
                          dispatch(deleteCheckbox(noteIndex, index))
                        }
                      >
                        <Text style={styles.deleteLineText}>x</Text>
                      </Pressable>
                    ) : null}
                  </View>
                );
              }
            })}
            <Pressable
              style={styles.addItemButton}
              onPress={() => dispatch(addNewCheckbox(noteIndex))}
            >
              <PlusIcon width="18" height="18" />
              <Text style={styles.addItemText}>ADD ITEM</Text>
            </Pressable>
            {note.checkboxes.filter((line) => line.checked === true).length ? (
              <View style={styles.checkboxSeparator}></View>
            ) : null}
            {note.checkboxes.map((line, index) => {
              if (line.checked) {
                return (
                  <View key={"line" + index} style={styles.checkBoxContainer}>
                    <Pressable
                      style={styles.checkIconContainer}
                      onPress={() => dispatch(toggleCheckbox(noteIndex, index))}
                    >
                      <CheckedFill />
                    </Pressable>
                    <TextInput
                      style={styles.checkTextFilled}
                      value={line.text}
                      onChange={(e) => textLineInput(e, index)}
                      multiline={true}
                      onFocus={() => setDeleteButton(index)}
                      onBlur={() => setDeleteButton(null)}
                    />
                    {deleteButton === index ? (
                      <Pressable
                        style={styles.deleteLineButton}
                        onPress={() =>
                          dispatch(deleteCheckbox(noteIndex, index))
                        }
                      >
                        <Text style={styles.deleteLineText}>x</Text>
                      </Pressable>
                    ) : null}
                  </View>
                );
              }
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
    lineHeight: 22,
  },
  checkBoxViewContainer: {
    paddingBottom: 16,
  },
  checkBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
    lineHeight: 22,
  },
  checkTextFilled: {
    fontSize: 16,
    marginLeft: 8,
    flex: 1,
    lineHeight: 22,
    color: "lightgray",
    textDecorationLine: "line-through",
  },
  checkboxSeparator: { backgroundColor: "gray", height: 1, marginVertical: 12 },
  deleteLineButton: {
    height: 25,
    width: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteLineText: {
    color: "white",
    fontSize: 24,
    lineHeight: 25,
  },
  checkIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
  addItemButton: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 1,
  },
  addItemText: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
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
