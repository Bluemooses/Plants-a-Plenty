import React, { Component } from "react";
import { connect } from "react-redux";

class GardenBed extends Component {
  state = {
    veggies: {},
    seedCount: {},
  };
  // componentDidMount() {
  //   console.log(this.props.state);
  //   console.log(this.props.state.seedCount);
  // }
  // componentDidUpdate() {
  //   console.log(this.props.state.seedCount);
  // }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(nextProps.state.seedCount);
    this.setState({
      seedCount: nextProps.state.seedCount,
    });
  }

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
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(GardenBed);
