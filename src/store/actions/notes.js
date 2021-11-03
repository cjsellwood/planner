import useAsyncStorage from "../../hooks/useAsyncStorage";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

const { get, store } = useAsyncStorage("notes");

let titleTimeout;
export const changeTitle = (noteIndex, title) => {
  return async (dispatch) => {
    dispatch({
      type: "CHANGE_TITLE",
      noteIndex,
      title,
    });

    clearTimeout(titleTimeout);
    titleTimeout = setTimeout(async () => {
      try {
        const stored = await get();
        stored[noteIndex].title = title;
        stored[noteIndex].lastEdited = Date.now();
        await store(stored);
      } catch (error) {
        null;
      }
    }, 500);
  };
};

let textTimeout;
export const changeText = (noteIndex, text) => {
  return async (dispatch) => {
    dispatch({
      type: "CHANGE_TEXT",
      noteIndex,
      text,
    });

    clearTimeout(textTimeout);
    textTimeout = setTimeout(async () => {
      try {
        const stored = await get();
        stored[noteIndex].text = text;
        stored[noteIndex].lastEdited = Date.now();
        await store(stored);
      } catch (error) {
        null;
      }
    }, 500);
  };
};

export const setNoteColor = (noteIndex, colorIndex) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_NOTE_COLOR",
      noteIndex,
      colorIndex,
    });

    const stored = await get();
    stored[noteIndex].color = colorIndex;
    await store(stored);
  };
};

export const deleteNote = (noteIndex) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_NOTE",
      noteIndex,
    });

    const stored = await get();
    stored.splice(noteIndex, 1);
    await store(stored);
  };
};

export const createNote = (history) => {
  return async (dispatch) => {
    const newNote = {
      id: uuid(),
      title: "",
      text: "",
      lastEdited: Date.now(),
      color: 0,
      checkboxes: null,
    };

    await dispatch({
      type: "CREATE_NOTE",
      newNote,
    });

    history.push(`/notes/${newNote.id}`);

    // Store new note in async storage
    const stored = await get();
    if (stored) {
      await store([...stored, newNote]);
    } else {
      await store([newNote]);
    }
  };
};

export const initNotes = () => {
  return async (dispatch) => {
    const notes = await get();
    dispatch({
      type: "INIT_NOTES",
      notes,
    });
  };
};

export const changeType = (noteIndex, hasCheckboxes) => {
  return async (dispatch) => {
    dispatch({
      type: "CHANGE_TYPE",
      noteIndex,
      hasCheckboxes,
    });

    const stored = await get();
    // Convert to text
    if (hasCheckboxes) {
      const newText = stored[noteIndex].checkboxes.map((line) => line.text);
      stored[noteIndex].text = newText.join("\n");
      stored[noteIndex].checkboxes = null;
    } else {
      // Convert to checkboxes
      const splitText = stored[noteIndex].text.match(/^$|[^\r\n]+/g);
      stored[noteIndex].checkboxes = splitText.map((line) => {
        return { checked: false, text: line };
      });
      stored[noteIndex].text = null;
    }
    await store(stored);
  };
};

let checkboxTimeout;
export const changeCheckboxText = (noteIndex, text, line) => {
  return async (dispatch) => {
    dispatch({
      type: "CHANGE_CHECKBOX_TEXT",
      noteIndex,
      text,
      line,
    });

    clearInterval(checkboxTimeout);
    checkboxTimeout = setTimeout(async () => {
      try {
        const stored = await get();
        stored[noteIndex].checkboxes[line].text = text;
        stored[noteIndex].lastEdited = Date.now();
        await store(stored);
      } catch (error) {
        null;
      }
    }, 500);
  };
};

export const deleteCheckbox = (noteIndex, line) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_CHECKBOX",
      noteIndex,
      line,
    });

    const stored = await get();
    stored[noteIndex].checkboxes.splice(line, 1);
    stored[noteIndex].lastEdited = Date.now();
    await store(stored);
  };
};

export const toggleCheckbox = (noteIndex, line) => {
  return async (dispatch) => {
    dispatch({
      type: "TOGGLE_CHECKBOX",
      noteIndex,
      line,
    });

    const stored = await get();
    stored[noteIndex].checkboxes[line].checked =
      !stored[noteIndex].checkboxes[line].checked;
    stored[noteIndex].lastEdited = Date.now();
    await store(stored);
  };
};

export const addNewCheckbox = (noteIndex) => {
  return async (dispatch) => {
    dispatch({
      type: "ADD_NEW_CHECKBOX",
      noteIndex,
    });
    const stored = await get();
    stored[noteIndex].checkboxes.push({ checked: false, text: "" });
    stored[noteIndex].lastEdited = Date.now();
    await store(stored);
  };
};
