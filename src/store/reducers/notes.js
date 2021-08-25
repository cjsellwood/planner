const initialState = {};

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
      notesCopy[action.noteIndex].title = action.title;
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
    case "CREATE_NOTE": {
      const notesCopy = duplicateNotes(state.notes);
      return {
        ...state,
        notes: [...notesCopy, action.newNote],
      };
    }
    case "INIT_NOTES": {
      return {
        ...state,
        notes: action.notes,
      };
    }

    default:
      return state;
  }
};
