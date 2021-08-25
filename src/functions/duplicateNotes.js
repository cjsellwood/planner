export default (notes) => {
  const notesCopy = [];
  for (let note of notes) {
    notesCopy.push({ ...note });
  }
  return notesCopy;
};
