export const changeTitle = (noteIndex, text) => {
  return {
    type: "CHANGE_TITLE",
    noteIndex,
    text,
  };
};

export const changeText = (noteIndex, text) => {
  return {
    type: "CHANGE_TEXT",
    noteIndex,
    text,
  };
};

export const setNoteColor = (noteIndex, colorIndex) => {
  return {
    type: "SET_NOTE_COLOR",
    noteIndex,
    colorIndex,
  };
};

export const deleteNote = (noteIndex) => {
  return {
    type: "DELETE_NOTE",
    noteIndex,
  };
};
