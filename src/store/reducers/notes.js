const initialState = {
  notes: [
    {
      id: 0,
      title: "First",
      text: "Starting note text with extra to write and show. Notes Starting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. NotesStarting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 1,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 2,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 3,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 4,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 5,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 6,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 7,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 8,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 9,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 10,
      title: "Default",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
    {
      id: 11,
      title: "Last",
      text: "Starting note text with extra to write and show. Notes",
      lastEdited: Date.now(),
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      const notesCopy = [];
      for (let note of state.notes) {
        notesCopy.push({ ...note });
      }
      notesCopy[action.noteIndex].title = action.text;
      return { ...state, notes: notesCopy };
    default:
      return state;
  }
};
