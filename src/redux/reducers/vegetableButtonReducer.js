import carrot from "../../images/carrot.png";
import bellPepper from "../../images/bell-pepper.png";
import lettuce from "../../images/lettuce.png";
import beans from "../../images/beans.png";
import peas from "../../images/peas.png";
import corn from "../../images/corn.png";

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
