import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieCard from "../VeggieCard/VeggieCard";
import Popup from "reactjs-popup";
import "./VeggieItem.css";

function VeggieItem(props) {
  function goToVeggie() {
    console.log("click");
  }

  // 
  return (
    <div margin={"30px"}>
      {" "}
      <Popup
        className="popUp"
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
