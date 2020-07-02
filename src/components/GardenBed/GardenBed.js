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
    console.log(this.props.state.seedCount);
  }
  componentDidUpdate() {
    console.log(this.props.state.seedCount);
  }

  render() {
    return (
      <div>
          <p>We want a garden BED NOW!</p>
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
