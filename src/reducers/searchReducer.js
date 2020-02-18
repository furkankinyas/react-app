const initialState = {
  searchText: "",
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
      case "searchText":
          state = {
            ...state,
            searchText : action.payload
          };
      break;
      default:
      break;
  }
  return state;
};

export default homeReducer;