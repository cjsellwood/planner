import React, { useEffect } from "react";
import { StyleSheet, View, Pressable, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-native";
import { setPage } from "../../store/actions/global";
import theme from "../../theme";
import PlusIcon from "./PlusIcon";

const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  // Set highlighted navbar tab
  useEffect(() => {
    dispatch(setPage("Notes"));
  }, []);

  return (
    <View style={styles.container}>
      <Pressable style={styles.newNoteButton}>
        <PlusIcon />
      </Pressable>
      <Text style={styles.notesHeader}>Notes</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={notes}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <Link to={`/notes/${item.id}`}>
            <View style={styles.note}>
              <Text style={styles.noteTitle}>{item.title}</Text>
              <Text style={styles.noteText}>{item.text}</Text>
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
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 4,
    backgroundColor: "darkslateblue",
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
});
