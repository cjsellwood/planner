import useAsyncStorage from "../../hooks/useAsyncStorage";

const { get, store, remove } = useAsyncStorage("timer");

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

export const startTimer = (endTime, timer) => {
  return async (dispatch) => {
    const stored = await get("timer");
    await store({
      ...stored,
      started: true,
      paused: false,
      endTime: endTime,
      timer: timer,
    });
    dispatch({
      type: "START_TIMER",
      endTime,
      timer,
    });
  };
};

export const pauseTimer = (timer) => {
  return async (dispatch) => {
    const stored = await get("timer");
    await store({
      ...stored,
      paused: true,
      timer: timer,
    });
    dispatch({
      type: "PAUSE_TIMER",
      timer,
    });
  };
};

export const deleteTimer = () => {
  return async (dispatch) => {
    await remove();
    dispatch({
      type: "DELETE_TIMER",
    });
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

export const initTimer = () => {
  return async (dispatch) => {
    const stored = await get();
    if (!stored) {
      return;
    }
    dispatch({
      type: "INIT_TIMER",
      stored,
    });
  };
};
