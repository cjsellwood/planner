const useTimeDisplay = (timer) => {
  const millisecond = Math.floor(new Date(timer).getMilliseconds() / 10)
    .toString()
    .padStart(2, "0");

  const second =
    timer > 1000 * 10
      ? new Date(timer).getSeconds().toString().padStart(2, "0")
      : new Date(timer).getSeconds();

  let minute = "";
  if (timer > 1000 * 60 * 60) {
    minute = new Date(timer).getMinutes().toString().padStart(2, "0") + ":";
  } else if (timer > 1000 * 60) {
    minute = new Date(timer).getMinutes() + ":";
  }

  const hour = timer > 1000 * 60 * 60 ? Math.floor(timer / 1000 / 60 / 60) + ":": "";

  return [Number(hour.replace(":", "")), `${hour}${minute}${second}:${millisecond}`];
};

export default useTimeDisplay;
