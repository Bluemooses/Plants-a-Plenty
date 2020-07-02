const veggieDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER_SEEDS":
      return action.payload;
    case "UNSET_USER_SEEDS":
      return [];
    default:
      return state;
  }
};

export default veggieDetailsReducer;
