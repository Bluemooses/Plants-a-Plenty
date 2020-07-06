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

  dropGarden = (id) => {
    console.log(id);
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
                <p className="userGardens" key={gardenbed.id}>
                  <span>
                    <Link onClick={() => this.goToGarden(gardenbed)}>
                      Garden Bed: {gardenbed.id}
                    </Link>
                    <button onClick={() => this.dropGarden(gardenbed.id)}>
                      Remove
                    </button>
                  </span>
                </p>
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
