import React from "react";
import { connect } from "react-redux";
import VeggieButton from "../VeggieButton/VeggieButton";
import GardenBed from "../GardenBed/GardenBed";
import InputForm from "../InputForm/InputForm";
import "./UserEntryPage.css";

function DescriptionCard(props) {
  // state = {
  //   veggies: this.props.state.veggies,
  // };
  console.log(props.state);
  {
    return (
      <div>
        {InputForm(props.state)}
        <GardenBed />
        <div className="vegetableButtonWrapper">
          <VeggieButton />
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(DescriptionCard);
