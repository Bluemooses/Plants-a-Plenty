const vegetableButtonCountReducer = (
  state = { carrot: 0, bellPepper: 0, corn: 0, peas: 0, beans: 0, lettuce: 0 },
  action
) => {
  switch (action.type) {
    case "VEGGIE_CLICKED":
      switch (action.payload.type) {
        case "Carrot":
          return { ...state, carrot: state.carrot + 1 };
          break;
        case "Bell Pepper":
          return { ...state, bellPepper: state.bellPepper + 1 };
          break;

        case "Corn":
          return { ...state, corn: state.corn + 1 };
          break;

        case "Peas":
          return { ...state, peas: state.peas + 1 };
          break;

        case "Beans":
          return { ...state, beans: state.beans + 1 };
          break;

        case "Lettuce":
          return { ...state, lettuce: state.lettuce + 1 };
          break;
        default:
          return state;
      }

      break;
    case "VEGGIE_REMOVED":
      switch (action.payload.type) {
        case "Carrot":
          if (state.carrot > 0) {
            return { ...state, carrot: state.carrot - 1 };
          }
          break;

        case "Bell Pepper":
          if (state.bellPepper > 0) {
            return { ...state, bellPepper: state.bellPepper - 1 };
          }
          break;

        case "Corn":
          if (state.corn > 0) {
            return { ...state, corn: state.corn - 1 };
          }
          break;

        case "Peas":
          if (state.peas > 0) {
            return { ...state, peas: state.peas - 1 };
          }
          break;

        case "Beans":
          if (state.beans > 0) {
            return { ...state, beans: state.beans - 1 };
          }
          break;

        case "Lettuce":
          if (state.lettuce > 0) {
            return { ...state, lettuce: state.lettuce - 1 };
          }
          break;
      }
    default:
      return state;
  }
};

export default vegetableButtonCountReducer;
