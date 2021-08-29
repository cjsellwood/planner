import showAmPm from "../../../functions/showAmPm";

export default (lastEdited) => {
  const dateObj = new Date(lastEdited);

  const time = showAmPm(dateObj);

  let date;
  const dateNow = new Date(Date.now());
  const dateDay = dateObj.getDate();
  const dateMonth = dateObj.getMonth() + 1;
  const dateYear = dateObj.getFullYear();

  if (dateNow.getFullYear() - dateYear > 0) {
    // Show full date if year is different
    date = `${dateDay}/${dateMonth}/${dateYear} `;
  } else if (
    dateNow.getDay() === dateObj.getDay() &&
    dateNow - dateObj < 1000 * 60 * 60 * 24
  ) {
    // If the same day don't show any date
    date = "";
  } else if (
    (dateNow.getDay() === 6 && dateObj.getDay() === 0) ||
    dateNow.getDay() - dateObj.getDay() === 1
  ) {
    // If date is yesterday, show yesterday
    date = "Yesterday ";
  } else {
    // Show only date and month if in the same year and not today or yesterday
    date = `${dateDay}/${dateMonth} `;
  }
  return date + time;
};
