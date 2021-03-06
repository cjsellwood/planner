const initialState = {
  started: false,
  stopwatch: 0,
  startTime: 0,
  offset: 0,
  storageUsed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_STOPWATCH": {
      const newState = {
        ...state,
        startTime: action.startTime,
        started: true,
      };
      return newState;
    }
    case "CHANGE_STOPWATCH":
      return {
        ...state,
        stopwatch: action.stopwatch,
      };
    case "RESET_STOPWATCH": {
      const newState = {
        ...state,
        started: false,
        stopwatch: 0,
        offset: 0,
        startTime: 0,
      };
      return newState;
    }
    case "PAUSE_STOPWATCH": {
      const newState = {
        ...state,
        stopwatch: action.pauseTime,
        offset: action.pauseTime,
        started: false,
      };
      return newState;
    }
    case "INIT_STOPWATCH": {
      let stopwatch = action.stored.stopwatch;
      if (action.stored.started) {
        stopwatch = Date.now() - action.stored.startTime + action.stored.offset;
      }
      return {
        ...state,
        ...action.stored,
        storageUsed: true,
        stopwatch,
      };
    }
    default:
      return state;
  }
};

export default reducer;
