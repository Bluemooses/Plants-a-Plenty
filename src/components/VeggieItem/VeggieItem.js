import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieCard from "../VeggieCard/VeggieCard";
import Popup from "reactjs-popup";

function VeggieItem(props) {
  function goToVeggie() {
    console.log("click");
  }

  return (
    <div margin={"30px"}>
      {" "}
      <Popup
        padding={"20px"}
        margin={20}
        position="right"
        width={"125%"}
        closeOnDocumentClick
        trigger={
          <img
            width={"25%"}
            className="veggieImage"
            onClick={() => goToVeggie()}
            src={props.veggie.img}
            alt={props.veggies.key}
          />
        }
        modal
      >
        <div>
          <VeggieCard veggie={props.veggie} />
        </div>
      </Popup>
    </div>
  );
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write code like
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  state: state,
  veggies: state.veggies,
});

export default connect(mapStateToProps)(VeggieItem);

// goToVeggie() {
//     setState({
//       toggleDescription: !state.toggleDescription,
//     });
//   }
//     return (
//       <div>
//         {state.toggleDescription ? (
//           <img
//             width={"25%"}
//             className="veggieImage"
//             onClick={() => goToVeggie()}
//             src={props.veggie.img}
//             alt={props.veggies.key}
//           />
//         ) : (
//           <div onClick={() => goToVeggie()}>
//             <VeggieCard veggie={props.veggie} />
//           </div>
//         )}
//       </div>
