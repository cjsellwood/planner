const initialState = {
  page: "Notes",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};

export default reducer;
