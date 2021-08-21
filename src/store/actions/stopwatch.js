export const startTimer = (startTime) => {
  return {
    type: "START_TIMER",
    startTime,
  };
};

export const pauseTimer = (pauseTime) => {
  return {
    type: "PAUSE_TIMER",
    pauseTime,
  };
};

export const resetTimer = () => {
  return {
    type: "RESET_TIMER",
  };
};

export const changeTimer = (timer) => {
  return {
    type: "CHANGE_TIMER",
    timer,
  };
};
