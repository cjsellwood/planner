export default (reminders) => {
  if (!reminders) {
    return [];
  }
  return reminders.map((reminder) => {
    return {
      ...reminder,
    };
  });
};
