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
