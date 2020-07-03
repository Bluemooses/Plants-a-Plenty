import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieButton from "../VeggieButton/VeggieButton";
import GardenBed from "../GardenBed/GardenBed";

class DescriptionCard extends Component {
  state = {
    veggies: this.props.state.veggies,
  };
  //pass a function click (id) {    }

  //inside onClick
  // onClick(id) => {

  // }

  // // veggies.filter(veg => veg.id === id){
  //    console.log(veg.description);

  render() {
    return (
      <div>
        <VeggieButton />
        <GardenBed />
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
