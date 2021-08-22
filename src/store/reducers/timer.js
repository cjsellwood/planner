const initialState = {
  timer: 0,
  timerInput: [0, 0, 0, 0, 0, 0],
  started: false,
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
      const hours = state.timerInput[0] * 10 + state.timerInput[1];
      const mins = state.timerInput[2] * 10 + state.timerInput[3];
      const secs = state.timerInput[4] * 10 + state.timerInput[5];
      return {
        ...state,
        started: true,
        timer: 1000 * (hours * 60 * 60 + mins * 60 + secs),
      };
    case "DELETE_TIMER":
      return {
        ...state,
        timerInput: initialState.timerInput,
        started: false,
        timer: 0,
      };
    default:
      return state;
  }
};

export default reducer;
