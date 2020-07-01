const vegetableButtonReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_VEGETABLE_BUTTON_PICTURES":
      return action.payload;
    case "UNSET_VEGGIES":
      return [];
    default:
      return state;
  }
};

export default vegetableButtonReducer;
