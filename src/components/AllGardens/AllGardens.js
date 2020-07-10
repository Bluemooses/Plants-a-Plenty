import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { RemoveButton, StyledButton } from "../Buttons/Button";
import "./AllGarden.css";

class AllGardens extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_GARDEN_BEDS",
    });
    this.forceUpdate();
  }

  goToGarden = (id) => {
    this.props.dispatch({
      type: "GET_THIS_GARDEN_BED",
      payload: id,
    });
    this.props.history.push("/current-garden");
  };

  dropGarden = (id) => {
    this.props.dispatch({
      type: "DELETE_USER_GARDEN",
      payload: id,
    });
    console.log(id);
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <h3>Click Garden Bed to See and Edit Details</h3>
        <h1>Your Gardens</h1>

        {/* PROVIDE LIST OF USER GARDEN BEDS */}
        {this.props.state.gardenBedReducer.map((gardenbed) => {
          return (
            <div>
              <ul>
                <span>
                  <h2 className="allGardenH2">Garden Bed: {gardenbed.id}</h2>
                  <StyledButton
                    onClick={() => this.goToGarden(gardenbed.garden_bed_id)}
                  >
                    Go to Garden
                  </StyledButton>
                  <RemoveButton
                    onClick={() => this.dropGarden(gardenbed.garden_bed_id)}
                  >
                    Remove
                  </RemoveButton>
                </span>
              </ul>
            </div>
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
