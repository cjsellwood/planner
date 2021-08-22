import useAsyncStorage from "../../hooks/useAsyncStorage";

const { get, store, clear } = useAsyncStorage("stopwatch");

export const startStopwatch = (startTime) => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    await store({ ...stored, startTime, started: true });
    dispatch({
      type: "START_STOPWATCH",
      startTime,
    });
  };
};

export const pauseStopwatch = (pauseTime) => {
  return async (dispatch) => {
    const stored = await get("stopwatch");
    await store({
      ...stored,
      stopwatch: pauseTime,
      offset: pauseTime,
      started: false,
    });
    dispatch({
      type: "PAUSE_STOPWATCH",
      pauseTime,
    });
  };
};

export const resetStopwatch = () => {
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
      type: "RESET_STOPWATCH",
    });
  };
};

export const changeStopwatch = (stopwatch) => {
  return {
    type: "CHANGE_STOPWATCH",
    stopwatch,
  };
};

export const initStopwatch = () => {
  return async (dispatch) => {
    const stored = await get();
    console.log("stopwatch stored", stored);
    if (!stored) {
      return;
    }
    // clear();
    dispatch({
      type: "INIT_STOPWATCH",
      stored,
    });
  };
};
