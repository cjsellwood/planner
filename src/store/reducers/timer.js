const initialState = {
  timer: 0,
  timerInput: [0, 0, 0, 0, 0, 0],
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
    case "LONG_BACKSPACE_INPUT":
      return {
        ...state,
        timerInput: [0, 0, 0, 0, 0, 0],
      };
    case "START_TIMER":
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
