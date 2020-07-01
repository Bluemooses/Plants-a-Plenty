import React, { Component } from "react";
import { connect } from "react-redux";

class GardenBed extends Component {
  state = {
    veggies: this.props.state.veggies,
  };
  componentDidMount() {
    console.log(this.props.state);
    // this.props.dispatch({
    //   type: "GET_VEGGIES",
    // });
    console.log(this.props.state.veggies);
    console.log(this.state);
  }

  doAThing() {
    console.log("Auebo");
  }
  render() {
    return (
      <div>
        <h2>Hello amigo!</h2>'<p>Why</p>
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

export default connect(mapStateToProps)(GardenBed);
