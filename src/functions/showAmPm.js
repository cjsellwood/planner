export default (dateObj) => {
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  let time = `${hour % 12 === 0 ? "12" : hour % 12}:${minute
    .toString()
    .padStart(2, "0")}`;
  if (hour >= 12) {
    time += " pm";
  } else {
    time += " am";
  }
  return time;
};
