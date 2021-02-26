const initialState = {
  searchText: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_TEXT":
      state = {
        ...state,
        searchText: action.payload,
      };
      break;
    default:
      break;
  }
  return state;
};

export default searchReducer;
