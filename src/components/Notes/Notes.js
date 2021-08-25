import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  FlatList,
  StatusBar,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-native";
import { setPage } from "../../store/actions/global";
import theme from "../../theme";
import PlusIcon from "./PlusIcon";
import { v4 as uuid } from "uuid";
import { createNote } from "../../store/actions/notes";

const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Notes"));
  }, []);

  const history = useHistory();

  const newNotePress = () => {
    const id = uuid();
    const newNote = {
      id,
      title: "",
      text: "",
      lastEdited: Date.now(),
      color: 0,
    };
    dispatch(createNote(newNote));
    history.push(`/notes/${id}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.colors.mainBackground}
        style={styles.statusBar}
        hidden={false}
      />
      <Pressable onPress={newNotePress} style={styles.newNoteButton}>
        <PlusIcon />
      </Pressable>
      <Text style={styles.notesHeader}>Notes</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={notes.sort((a, b) => b.lastEdited - a.lastEdited)}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link to={`/notes/${item.id}`}>
            <View style={[styles.note, styles["color" + item.color]]}>
              {item.title ? (
                <Text style={styles.noteTitle}>{item.title}</Text>
              ) : null}
              {item.text ? (
                <Text style={styles.noteText}>{item.text}</Text>
              ) : null}
            </View>
          </Link>
        )}
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30,
  },
  container: {
    flex: 1,
    position: "relative",
    marginBottom: theme.navBarHeight + 10,
  },
  notesHeader: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    padding: 8,
  },
  note: {
    marginHorizontal: 8,
    padding: 10,
    borderRadius: 4,
    elevation: 4,
  },
  separator: {
    padding: 6,
  },
  noteTitle: {
    color: "white",
    fontWeight: "bold",
  },
  noteText: {
    color: "white",
  },
  newNoteButton: {
    backgroundColor: theme.colors.primary,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 20,
    padding: 16,
    bottom: 15,
    zIndex: 10,
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
