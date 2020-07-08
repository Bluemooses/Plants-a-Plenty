import carrot from "../../images/carrot.png";

function remove(array, element) {
  return array.filter((el) => el !== element);
}

const veggiePictureReducer = (state = [], action) => {
  switch (action.type) {
    case "VEGGIE_CLICKED":
      switch (action.payload.type) {
        case "Carrot":
          return [...state, carrot];

        case "Bell Pepper":
          return [...state, carrot];

        case "Corn":
          return [...state, carrot];

        case "Peas":
          return [...state, carrot];

        case "Green Bean":
          return [...state, carrot];
        case "Lettuce":
          return [...state, carrot];

        default:
          return state;
      }
    case "VEGGIE_REMOVED":
      switch (action.payload.type) {
        case "Carrot":
          console.log("STATE IS", state, "CARROT IS", carrot);
          const newerArray = remove(state, carrot);
          console.log(newerArray);
          return  newerArray;
        case "Bell Pepper":
          if (state.bellPepper > 0) {
            return [...state, carrot];
          } else {
            return state;
          }

        case "Corn":
          if (state.corn > 0) {
            return [...state, carrot];
          } else {
            return state;
          }

        case "Peas":
          if (state.peas > 0) {
            return [...state, carrot];
          } else {
            return state;
          }

        case "Green Bean":
          if (state.beans > 0) {
            return [...state, carrot];
          } else {
            return state;
          }

        case "Lettuce":
          if (state.lettuce > 0) {
            console.log(state);
            return [...state, carrot];
          } else {
            return state;
          }

        default:
          return state;
      }
    case "SET_GARDEN_PICTURES":
      return action.payload;

    default:
      return state;
  }
};

export default veggiePictureReducer;
