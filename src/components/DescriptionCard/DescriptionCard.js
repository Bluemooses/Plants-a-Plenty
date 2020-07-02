import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieButton from "../VeggieButton/VeggieButton";
import GardenBed from "../GardenBed/GardenBed";

class DescriptionCard extends Component {
  state = {
    veggies: this.props.state.veggies,
  };

  render() {
    return (
      <div>
        {/* Maps image  */}
        {this.state.veggies.map((veggie, i) => {
          return (
            <img
              height={100}
              width={150}
              src={veggie.img}
              alt={veggie.veggie_name}
            ></img>
          );
        })}
        {/* Maps for description */}
        {this.state.veggies.map((veggie, i) => {
          return <li key={i}>{veggie.description}</li>;
        })}
        {/* Maps name and button */}
        {this.state.veggies.map((veggie, i) => {
          return (
            <li key={i}>
              {veggie.veggie_name}
              <button
                onClick={(id) => {
                  this.props.dispatch({
                    type: "DELETE_ITEM",
                    payload: veggie.ID,
                  });
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
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
