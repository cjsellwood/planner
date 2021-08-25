import { v4 as uuid } from "uuid";

const initialState = {
  notes: [
    {
      id: uuid(),
      title: "First",
      text: "Starting note text with extra to write and show. Notes Starting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
    {
      id: uuid(),
      title: "Last",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
      color: 0,
    },
  ],
};

const duplicateNotes = (notes) => {
  const notesCopy = [];
  for (let note of notes) {
    notesCopy.push({ ...note });
  }
  return notesCopy;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].title = action.text;
      notesCopy[action.noteIndex].lastEdited = Date.now();
      return { ...state, notes: notesCopy };
    }
    case "CHANGE_TEXT": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].text = action.text;
      notesCopy[action.noteIndex].lastEdited = Date.now();
      return {
        ...state,
        notes: notesCopy,
      };
    }
    case "SET_NOTE_COLOR": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].color = action.colorIndex;
      return {
        ...state,
        notes: notesCopy,
      };
    }
    case "DELETE_NOTE": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy.splice(action.noteIndex, 1);
      return {
        ...state,
        notes: notesCopy,
      };
    }

    default:
      return state;
  }
};
