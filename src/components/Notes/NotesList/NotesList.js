import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../../../store/actions/global";
import { initNotes } from "../../../store/actions/notes";
import theme from "../../../theme";
import duplicateNotes from "../../../functions/duplicateNotes";
import AddNoteButton from "./AddNoteButton";
import NoteItem from "./NoteItem";

const NotesList = () => {
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

  const [error, setError] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={false}
        barStyle={"light-content"}
        backgroundColor={theme.colors.mainBackground}
        hidden={false}
      />
      <AddNoteButton setError={setError}/>
      <Text style={styles.notesHeader}>Notes {error}</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={
          !notes
            ? null
            : duplicateNotes(notes).sort((a, b) => b.lastEdited - a.lastEdited)
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <NoteItem item={item} />}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
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
  separator: {
    padding: 6,
  },
});
