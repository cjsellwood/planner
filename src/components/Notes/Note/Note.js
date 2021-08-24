import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, TextInput, Text } from "react-native";
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

  const displayEditDate = (lastEdited) => {
    const dateObj = new Date(lastEdited - 9000000000000);
    console.log(dateObj);
    const hour = dateObj.getHours();
    const minute = dateObj.getMinutes();
    let time = `${hour % 12 === 0 ? "12" : hour % 12}:${minute
      .toString()
      .padStart(2, "0")}`;
    if (hour >= 12) {
      time += " pm";
    } else {
      time += " am";
    }
    console.log(time);
    let date;
    const dateNow = new Date(Date.now());
    const dateDay = dateObj.getDate();
    const dateMonth = dateObj.getMonth() + 1;
    const dateYear = dateObj.getFullYear();
    if (dateNow.getFullYear() - dateYear > 0) {
      // Show full date if year is different
      date = `${dateDay}/${dateMonth}/${dateYear} `;
    } else if (
      dateNow.getDay() === dateObj.getDay() &&
      dateNow - dateObj < 1000 * 60 * 60 * 24
    ) {
      // If the same day don't show any date
      date = "";
    } else if (
      (dateNow.getDay() === 6 && dateObj.getDay() === 0) ||
      dateNow.getDay() - dateObj.getDay() === 1
    ) {
      // If date is yesterday, show yesterday
      date = "Yesterday ";
    } else {
      // Show only date and month if in the same year and not today or yesterday
      date = `${dateDay}/${dateMonth} `;
    }
    return date + time;
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
          placeholderTextColor={"gray"}
        />
        <TextInput
          style={styles.noteText}
          value={note.text}
          onChangeText={textInput}
          placeholder="Note"
          multiline={true}
        />
      </ScrollView>
      <View style={styles.bottomBar}>
        <View></View>
        <View>
          <Text style={styles.lastEdited}>
            Edited {displayEditDate(note.lastEdited)}
          </Text>
        </View>
        <View></View>
      </View>
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
  lastEdited: {
    color: "gray",
  },
});
