export const numberInput = (number) => {
  return {
    type: "NUMBER_INPUT",
    number,
  };
};

export const backspaceInput = () => {
  return {
    type: "BACKSPACE_INPUT",
  };
};

export const clearTimerInput = () => {
  return {
    type: "CLEAR_TIMER_INPUT",
  };
};

export const startTimer = (startTime, timer) => {
  return {
    type: "START_TIMER",
    startTime,
    timer,
  };
};

export const pauseTimer = (timer) => {
  return {
    type: "PAUSE_TIMER",
    timer,
  };
};

export const deleteTimer = () => {
  return {
    type: "DELETE_TIMER",
  };
};

export const changeTimer = (timer) => {
  return {
    type: "CHANGE_TIMER",
    timer,
  };
};

export const finishTimer = () => {
  return {
    type: "FINISH_TIMER",
  };
};

export const stopTimer = (timer) => {
  return {
    type: "STOP_TIMER",
    timer,
  };
};
