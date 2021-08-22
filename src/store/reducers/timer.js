const initialState = {
  timer: 0,
  timerInput: [0, 0, 0, 0, 0, 0],
  started: false,
  startTime: 0,
  paused: true,
  finished: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUMBER_INPUT":
      // Do nothing if already at max length of input
      if (state.timerInput[0] !== 0) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        timerInput: [...state.timerInput.slice(1, 6), action.number],
      };
    case "BACKSPACE_INPUT":
      return {
        ...state,
        timerInput: [0, ...state.timerInput.slice(0, 5)],
      };
    case "CLEAR_TIMER_INPUT":
      return {
        ...state,
        timerInput: initialState.timerInput,
      };
    case "START_TIMER":
      return {
        ...state,
        started: true,
        paused: false,
        startTime: action.startTime,
        timer: action.timer,
      };
    case "PAUSE_TIMER":
      return {
        ...state,
        paused: true,
        timer: action.timer,
      };
    case "DELETE_TIMER":
      return {
        ...state,
        timerInput: initialState.timerInput,
        started: false,
        paused: true,
        startTime: 0,
        timer: 0,
        finished: false,
      };
    case "CHANGE_TIMER":
      return {
        ...state,
        timer: action.timer,
      };
    case "FINISH_TIMER":
      return {
        ...state,
        timer: 0,
        finished: true,
      };
    case "STOP_TIMER":
      return {
        ...state,
        timer: action.timer,
        finished: false,
        paused: true,
      };
    default:
      return state;
  }
};

export default reducer;
