const veggieReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VEGGIES":
      return action.payload;
    case "UNSET_VEGGIES":
      return [];
    default:
      return state;
  }
};

export default veggieReducer;
