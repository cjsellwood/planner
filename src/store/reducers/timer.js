const initialState = {
  timer: 0,
  timerInput: [0, 0, 0, 0, 0, 0],
  started: false,
  endTime: 0,
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
        endTime: action.endTime,
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
        endTime: 0,
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
    case "INIT_TIMER":
      let timer = action.stored.timer;
      if (!action.stored.paused && action.stored.endTime - Date.now() <= 0) {
        timer = 0;
      } else {
        timer = action.stored.endTime - Date.now();
      }
      return {
        ...state,
        ...action.stored,
        storageUsed: true,
        timer,
      };
    default:
      return state;
  }
};

export default reducer;
