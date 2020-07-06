import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class AllGardens extends Component {
  componentDidMount() {
    // const [latestGarden] = this.props.state.gardenBedReducer.slice(-1);
    this.forceUpdate();
  }

  goToGarden = (gardenbed) => {
    this.props.dispatch({
      type: "GET_THIS_GARDEN_BED",
      payload: gardenbed.id,
    });
    this.props.history.push("/current-garden");
  };
  render() {
    return (
      <div>
        {this.props.state.gardenBedReducer.map((gardenbed) => {
          return (
            <li key={gardenbed.id} onClick={() => this.goToGarden(gardenbed)}>
              <Link>Garden Bed: {gardenbed.id}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(AllGardens));
