const materialsReducer = (state = [], action) => {
  switch (action.type) {
    case "POST_MATERIALS":
      console.log("Yo", action.payload);
      return action.payload;
    case "UNSET_MATERIALS":
      return [];
    default:
      return state;
  }
};

export default materialsReducer;
