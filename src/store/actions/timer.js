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

export const startTimer = () => {
  return {
    type: "START_TIMER",
  };
};

export const deleteTimer = () => {
  return {
    type: "DELETE_TIMER",
  };
};
