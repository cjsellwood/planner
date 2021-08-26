import useAsyncStorage from "../../hooks/useAsyncStorage";
import { v4 as uuid } from "uuid";

const { get, store } = useAsyncStorage("notes");

let titleTimeout;
export const changeTitle = (noteIndex, title) => {
  return async (dispatch) => {
    clearTimeout(titleTimeout);
    titleTimeout = setTimeout(async () => {
      const stored = await get();
      stored[noteIndex].title = title;
      await store(stored);
    }, 500);

    dispatch({
      type: "CHANGE_TITLE",
      noteIndex,
      title,
    });
  };
};

let textTimeout;
export const changeText = (noteIndex, text) => {
  return async (dispatch) => {
    clearTimeout(textTimeout);
    textTimeout = setTimeout(async () => {
      const stored = await get();
      stored[noteIndex].text = text;
      await store(stored);
    }, 500);

    dispatch({
      type: "CHANGE_TEXT",
      noteIndex,
      text,
    });
  };
};

export const setNoteColor = (noteIndex, colorIndex) => {
  return async (dispatch) => {
    const stored = await get();
    stored[noteIndex].color = colorIndex;
    await store(stored);

    dispatch({
      type: "SET_NOTE_COLOR",
      noteIndex,
      colorIndex,
    });
  };
};

export const deleteNote = (noteIndex) => {
  return async (dispatch) => {
    const stored = await get();
    stored.splice(noteIndex, 1);
    await store(stored);
    dispatch({
      type: "DELETE_NOTE",
      noteIndex,
    });
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

    // Store new note in async storage
    const stored = await get();
    if (stored) {
      await store([...stored, newNote]);
    } else {
      await store([newNote]);
    }

    await dispatch({
      type: "CREATE_NOTE",
      newNote,
    });

    history.push(`/notes/${newNote.id}`);
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
    const stored = await get();
    let lines;
    if (hasCheckboxes) {
      stored[noteIndex].checkboxes = null;
    } else {
      console.log(stored[noteIndex].text);
      console.log("action", stored[noteIndex].text.match(/^$|[^.\n]+/g));
      lines = stored[noteIndex].text.match(/^$|[^.\n]+/g).length;
      stored[noteIndex].checkboxes = new Array(lines).fill(false);
    }
    await store(stored);
    dispatch({
      type: "CHANGE_TYPE",
      noteIndex,
      lines,
      hasCheckboxes,
    });
  };
};
