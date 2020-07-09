import carrot from "../../images/carrotSvg.svg";
import bellPepper from "../../images/bellPepperSvg.svg";
import lettuce from "../../images/lettuceSvg.svg";
import beans from "../../images/tomatoSvg.svg";
import peas from "../../images/peaSvg.svg";
import corn from "../../images/cornSvg.svg";

const vegetableButtonReducer = (
  state = [
    { img: carrot, id: 1, type: "Carrot" },
    { img: bellPepper, id: 2, type: "Bell Pepper" },
    { img: lettuce, id: 3, type: "Lettuce" },
    { img: beans, id: 4, type: "Green Bean" },
    { img: peas, id: 5, type: "Peas" },
    { img: corn, id: 6, type: "Corn" },
  ],
  action
) => {
  switch (action.type) {
    case "GET_VEGETABLE_BUTTON_PICTURES":
      return state;
    case "UNSET_VEGGIES":
      return [];
    default:
      return state;
  }
};

export default vegetableButtonReducer;
