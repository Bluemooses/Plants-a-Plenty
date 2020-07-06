import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CurrentGardenBed extends Component {
  componentDidMount() {
    console.log(this.props.state);
  }
  render() {
    return (
      <div>
        <p>Yo FROM CurrentGardenBed</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(CurrentGardenBed));
