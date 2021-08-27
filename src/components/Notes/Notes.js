import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-native";
import { setPage } from "../../store/actions/global";
import theme from "../../theme";
import PlusIcon from "./PlusIcon";
import { createNote, initNotes } from "../../store/actions/notes";
import duplicateNotes from "../../functions/duplicateNotes";
import SquareIcon from "./Note/icons/SquareIcon";

const Notes = () => {
  const dispatch = useDispatch();

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Notes"));
  }, []);

  const { notes, storageUsed } = useSelector((state) => state.notes);

  // Load notes from async storage
  useEffect(() => {
    if (!storageUsed) {
      dispatch(initNotes());
    }
  }, [storageUsed]);

  const history = useHistory();

  const newNotePress = () => {
    dispatch(createNote(history));
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
      <Pressable
        onPress={newNotePress}
        style={styles.newNoteButton}
        android_ripple={{
          color: "rgba(0, 0, 0, 0.2)",
          borderless: false,
          radius: 30,
        }}
      >
        <PlusIcon />
      </Pressable>
      <Text style={styles.notesHeader}>Notes</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={
          !notes
            ? null
            : duplicateNotes(notes).sort((a, b) => b.lastEdited - a.lastEdited)
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link
            to={`/notes/${item.id}`}
            component={TouchableOpacity}
            activeOpacity={0.8}
          >
            <View style={[styles.note, styles["color" + item.color]]}>
              {item.title ? (
                <Text style={styles.noteTitle}>{item.title}</Text>
              ) : null}
              {item.text ? (
                <Text style={styles.noteText}>
                  {item.text.includes("\n") &&
                  item.text.match(/\n/g).length &&
                  item.text.length < 150 > 5
                    ? item.text.split("\n").slice(0, 5).join("\n") + "..."
                    : item.text.length > 150
                      ? item.text.slice(0, 150) + "..."
                      : item.text}
                </Text>
              ) : item.checkboxes ? (
                <View>
                  {item.checkboxes
                    .filter((line) => !line.checked)
                    .map((line, index) => {
                      if (index < 5) {
                        let text = line.text;
                        if (
                          line.text.includes("\n") &&
                          line.text.match(/\n/g).length >= 3
                        ) {
                          text =
                            line.text.split("\n").slice(0, 3).join("\n") +
                            "...";
                        } else if (line.text.length >= 140) {
                          text = line.text.slice(0, 140) + "...";
                        }
                        return (
                          <View
                            key={"check" + index}
                            style={styles.checkboxContainer}
                          >
                            <SquareIcon />
                            <Text style={styles.checkBoxText}>{text}</Text>
                          </View>
                        );
                      }
                    })}
                  {item.checkboxes.length > 5 ? (
                    <Text style={styles.tooLongText}>...</Text>
                  ) : null}
                </View>
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
    lineHeight: 20,
    paddingTop: 4,
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
    elevation: 2,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  checkBoxText: {
    marginLeft: 6,
    color: "white",
    lineHeight: 20,
    marginRight: 14,
  },
  tooLongText: {
    color: "white",
    marginLeft: 26,
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
