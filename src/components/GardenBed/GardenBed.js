import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./GardenBed.css";
import carrot from "../../images/carrotSvg.svg";
import bellPepper from "../../images/bellPepperSvg.svg";
import lettuce from "../../images/lettuceSvg.svg";
import beans from "../../images/tomatoSvg.svg";
import peas from "../../images/peaSvg.svg";
import corn from "../../images/cornSvg.svg";
class GardenBed extends Component {
  state = {
    veggies: [],
    seedCount: [],
  };

  // GIVE INITIAL VALUE TO SHOW 0's
  componentDidMount() {
    this.props.dispatch({
      type: "RESET_SEED COUNT",
    });
    this.setState({
      seedCount: this.props.state.seedCount,
    });
  }

  // SHOW NEW VALUE
  componentWillReceiveProps(nextProps) {
    this.setState({
      seedCount: nextProps.state.seedCount,
    });
  }

  // CREATE GARDEN / SEND OUR DATAOBJECT/ RESET LOCAL SEED COUNT/ MOVE TO NEW ROUTE
  addVeggie = (props) => {
    console.log("click");
    let payload = {
      seedCount: this.state.seedCount,
      materials: this.props.state.materials,
    };
    this.props.dispatch({
      type: "CREATE_GARDEN_BED",
      payload: payload,
    });
    this.setState({
      seedCount: " ",
    });
    this.props.history.push("/garden-created");
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

        <button onClick={(props) => this.addVeggie(props)}>
          Create Garden
        </button>
        <div className="gardenBedBox">
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.carrot).fill(
              <img src={carrot} alt="Carrot" />
            )}
          </div>
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.bellPepper).fill(
              <img src={bellPepper} alt="Bell Pepper" />
            )}
          </div>
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.lettuce).fill(
              <img src={lettuce} alt="Lettuce" />
            )}
          </div>
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.beans).fill(
              <img src={beans} alt="Beans" />
            )}
          </div>
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.peas).fill(
              <img src={peas} alt="Peas" />
            )}
          </div>
          <div className="gardenBedVeggie">
            {Array(this.state.seedCount.corn).fill(
              <img src={corn} alt="Corn" />
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(GardenBed));
