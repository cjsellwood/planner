export const changeTitle = (noteIndex, text) => {
  return {
    type: "CHANGE_TITLE",
    noteIndex,
    text,
  };
};
