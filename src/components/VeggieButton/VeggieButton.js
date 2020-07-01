import React, { Component } from "react";
import { connect } from "react-redux";

class VeggieButton extends Component {
  componentDidMount() {
    console.log(this.props.vegImages);
  }

  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  vegImages: state.vegImages,
});

export default connect(mapStateToProps)(VeggieButton);
