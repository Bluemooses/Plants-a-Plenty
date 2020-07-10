import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieCard from "../VeggieCard/VeggieCard";
import Popup from "reactjs-popup";
import "./VeggieItem.css";
import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function VeggieItem(props) {
  function goToVeggie() {
    console.log("click");
  }

  //
  return (
    <div className="veggieWrapper">
      {" "}
      <Popup
        className="popUp"
        margin={20}
        position="right"
        width={"125%"}
        closeOnDocumentClick
        trigger={
          <div className="flexVeg">
            <img
              className="veggieImage"
              onClick={() => goToVeggie()}
              src={props.veggie.img}
              alt={props.veggies.key}
            />
          </div>
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
