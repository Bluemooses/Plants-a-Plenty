// No negative veggies please.
const vegetableButtonCountReducer = (
  state = {
    carrot: 0,
    bellPepper: 0,
    corn: 0,
    peas: 0,
    beans: 0,
    lettuce: 0,
  },
  action
) => {
  // console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "VEGGIE_CLICKED":
      switch (action.payload.type) {
        case "Carrot":
          return { ...state, carrot: state.carrot + 1 };

        case "Bell Pepper":
          return { ...state, bellPepper: state.bellPepper + 1 };

        case "Corn":
          return { ...state, corn: state.corn + 1 };

        case "Peas":
          return { ...state, peas: state.peas + 1 };

        case "Green Bean":
          return { ...state, beans: state.beans + 1 };

        case "Lettuce":
          return { ...state, lettuce: state.lettuce + 1 };

        default:
          return state;
      }
    case "VEGGIE_REMOVED":
      switch (action.payload.type) {
        case "Carrot":
          if (state.carrot > 0) {
            return { ...state, carrot: state.carrot - 1 };
          } else {
            return state;
          }
        case "Bell Pepper":
          if (state.bellPepper > 0) {
            return { ...state, bellPepper: state.bellPepper - 1 };
          } else {
            return state;
          }

        case "Corn":
          if (state.corn > 0) {
            return { ...state, corn: state.corn - 1 };
          } else {
            return state;
          }

        case "Peas":
          if (state.peas > 0) {
            return { ...state, peas: state.peas - 1 };
          } else {
            return state;
          }

        case "Green Bean":
          if (state.beans > 0) {
            return { ...state, beans: state.beans - 1 };
          } else {
            return state;
          }

        case "Lettuce":
          if (state.lettuce > 0) {
            console.log(state);
            return { ...state, lettuce: state.lettuce - 1 };
          } else {
            return state;
          }

        default:
          return state;
      }
    case "SET_CURRENT_SEEDS":
      return action.payload;

    default:
      return state;
  }
};

export default vegetableButtonCountReducer;
