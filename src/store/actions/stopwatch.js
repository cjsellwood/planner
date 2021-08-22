import useAsyncStorage from "../../hooks/useAsyncStorage";

const { get, store } = useAsyncStorage("stopwatch");

export const startTimer = (startTime) => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    await store({ ...stored, startTime, started: true });
    dispatch({
      type: "START_TIMER",
      startTime,
    });
  };
};

export const pauseTimer = (pauseTime) => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    await store({
      ...stored,
      stopwatch: pauseTime,
      offset: pauseTime,
      started: false,
    });
    dispatch({
      type: "PAUSE_TIMER",
      pauseTime,
    });
  };
};

export const resetTimer = () => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    await store({
      ...stored,
      started: false,
      stopwatch: 0,
      offset: 0,
      startTime: 0,
    });
    dispatch({
      type: "RESET_TIMER",
    });
  };
};

export const changeTimer = (stopwatch) => {
  return {
    type: "CHANGE_TIMER",
    stopwatch,
  };
};

export const initTimer = () => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    if (!stored) {
      return;
    }
    dispatch({
      type: "INIT_TIMER",
      stored,
    });
  };
};
