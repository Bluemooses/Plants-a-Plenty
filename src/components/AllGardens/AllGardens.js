import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

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
        <label>Your Gardens</label>

        {/* PROVIDE LIST OF USER GARDEN BEDS */}
        {this.props.state.gardenBedReducer.map((gardenbed) => {
          return (
            <div>
              <ul>
                <span>
                  <Link
                    onClick={() => this.goToGarden(gardenbed.garden_bed_id)}
                  >
                    Garden Bed: {gardenbed.id}
                  </Link>
                  <button
                    onClick={() => this.dropGarden(gardenbed.garden_bed_id)}
                  >
                    Remove
                  </button>
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
