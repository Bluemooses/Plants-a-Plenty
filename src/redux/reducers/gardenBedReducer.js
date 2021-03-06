const gardenBedReducer = (state = [{}], action) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_GARDENS":
      return action.payload;
    case "UNSET_GARDEN_ID":
      return {};
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default gardenBedReducer;
