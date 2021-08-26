import duplicateNotes from "../../functions/duplicateNotes";
const initialState = { notes: [], storageUsed: false };

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
        storageUsed: true,
      };
    }
    case "CHANGE_TYPE": {
      const notesCopy = duplicateNotes(state.notes);
      // Convert to text
      if (action.hasCheckboxes) {
        const newText = notesCopy[action.noteIndex].checkboxes.map(
          (line) => line.text
        );
        notesCopy[action.noteIndex].text = newText.join("\n");
        notesCopy[action.noteIndex].checkboxes = null;
      } else {
        // Convert to checkboxes
        const splitText =
          notesCopy[action.noteIndex].text.match(/^$|[^\r\n]+/g);
        notesCopy[action.noteIndex].checkboxes = splitText.map((line) => {
          return { checked: false, text: line };
        });
        notesCopy[action.noteIndex].text = null;
      }
      return {
        ...state,
        notes: notesCopy,
      };
    }
    case "CHANGE_CHECKBOX_TEXT": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].checkboxes[action.line].text = action.text;
      return {
        ...state,
        notes: notesCopy,
      };
    }
    case "DELETE_CHECKBOX": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].checkboxes.splice(action.line, 1);
      return {
        ...state,
        notes: notesCopy,
      };
    }
    case "TOGGLE_CHECKBOX": {
      const notesCopy = duplicateNotes(state.notes);
      notesCopy[action.noteIndex].checkboxes[action.line].checked =
        !notesCopy[action.noteIndex].checkboxes[action.line].checked;
      return {
        ...state,
        notes: notesCopy,
      };
    }

    default:
      return state;
  }
};
