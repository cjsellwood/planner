export default (notes) => {
  const notesCopy = [];
  for (let note of notes) {
    let checkboxes = note.checkboxes;
    let checkboxesCopy = null;
    if (checkboxes) {
      checkboxesCopy = [];
      for (let line of checkboxes) {
        checkboxesCopy.push({ ...line });
      }
    }
    notesCopy.push({ ...note, checkboxes: checkboxesCopy });
  }
  return notesCopy;
};
