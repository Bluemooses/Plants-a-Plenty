const gardenBedReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CURRENT_GARDEN_BED":
      return action.payload;
    case "UNSET_GARDEN_ID":
      return [];
    case "SET_UPDATED_GARDEN_BED":
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default gardenBedReducer;
