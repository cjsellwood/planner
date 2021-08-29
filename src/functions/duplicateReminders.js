export default (reminders) => {
  return reminders.map((reminder) => {
    return {
      ...reminder,
    };
  });
};
