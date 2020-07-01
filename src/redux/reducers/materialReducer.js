const veggieReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_MATERIALS":
      return action.payload;
    case "UNSET_MATERIALS":
      return [];
    default:
      return state;
  }
};

export default veggieReducer;
