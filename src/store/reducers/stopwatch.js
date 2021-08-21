const initialState = {
  started: false,
  timer: 0,
  startTime: 0,
  offset: 0,
  storageUsed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER": {
      const newState = {
        ...state,
        startTime: action.startTime,
        started: true,
      };
      return newState;
    }
    case "CHANGE_TIMER":
      return {
        ...state,
        timer: action.timer,
      };
    case "RESET_TIMER": {
      const newState = {
        ...state,
        started: false,
        timer: 0,
        offset: 0,
        startTime: 0,
      };
      return newState;
    }
    case "PAUSE_TIMER": {
      const newState = {
        ...state,
        timer: action.pauseTime,
        offset: action.pauseTime,
        started: false,
      };
      return newState;
    }
    case "INIT_TIMER": {
      let timer = action.stored.timer;
      if (action.stored.started) {
        timer = Date.now() - action.stored.startTime + action.stored.offset;
      }
      return {
        ...state,
        ...action.stored,
        storageUsed: true,
        timer,
      };
    }
    default:
      return state;
  }
};

export default reducer;
