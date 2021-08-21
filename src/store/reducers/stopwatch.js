const initialState = {
  started: false,
  timer: 0,
  timerInterval: null,
  startTime: 0,
  offset: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER":
      return {
        ...state,
        startTime: action.startTime,
        started: true,
      };
    case "CHANGE_TIMER":
      return {
        ...state,
        timer: action.timer,
      };
    case "RESET_TIMER":
      return {
        ...state,
        started: false,
        timer: 0,
        offset: 0,
        startTime: 0,
      };
    case "PAUSE_TIMER":
      return {
        ...state,
        timer: action.pauseTime,
        offset: action.pauseTime,
        started: false,
      };
    default:
      return state;
  }
};

export default reducer;
