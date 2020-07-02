import React, { Component } from "react";
import { connect } from "react-redux";

class GardenBed extends Component {
  state = {
    veggies: {},
    seedCount: {},
  };

  componentDidMount() {
    this.setState({
      veggies: this.props.state.veggies,
      seedCount: this.props.state.seedCount,
    });
  }
  componentDidUpdate() {
    console.log(this.props.state.seedCount);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(nextProps.state.seedCount);
    this.setState({
      seedCount: nextProps.state.seedCount,
    });
  }
  addVeggie = () => {
    console.log("click");
    this.props.dispatch({
      type: "POST_VEGGIE_COUNTS",
      payload: this.state.seedCount,
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>Carrots: {this.state.seedCount.carrot}</li>
          <li>Bell Peppers: {this.state.seedCount.bellPepper}</li>
          <li>Lettuce: {this.state.seedCount.lettuce}</li>
          <li>Beans: {this.state.seedCount.beans}</li>
          <li>Peas: {this.state.seedCount.peas}</li>
          <li>Corn: {this.state.seedCount.corn}</li>
        </ul>
        <button onClick={() => this.addVeggie()}>
          Add Veggies to My Garden
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(GardenBed);
