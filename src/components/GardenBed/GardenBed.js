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
import { BlueButton } from "../Buttons/Button";
class GardenBed extends Component {
  state = {
    veggies: [],
    seedCount: [],
    materials: [],
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
        <div className="gardeniestOfLists">
          <h2>Theoretical Yields</h2>
          <ul>
            <li>
              Carrots: {Number(this.state.seedCount.carrot * 1.5).toFixed(2)}{" "}
              lbs.
            </li>
            <li>
              Bell Peppers:{" "}
              {Number(this.state.seedCount.bellPepper * 1.25).toFixed(2)} lbs.
            </li>
            <li>
              Lettuce: {Number(this.state.seedCount.lettuce * 1).toFixed(2)}{" "}
              lbs.
            </li>
            <li>
              Tomatoes: {Number(this.state.seedCount.beans * 8).toFixed(2)} lbs.
            </li>
            <li>
              Peas: {Number(this.state.seedCount.peas * 0.66).toFixed(2)} lbs.
            </li>
            <li>
              Corn: {Number(this.state.seedCount.corn * 1.2).toFixed(2)} lbs.
            </li>
          </ul>
        </div>
        <BlueButton onClick={(props) => this.addVeggie(props)}>
          Create Garden
        </BlueButton>
        <container className="gardenBedBox">
          <div>
            <div className="gardenBedVeggie">
              <img src={carrot} />

              {Array(this.state.seedCount.carrot).fill(
                <img src={carrot} alt="Carrot" />
              )}
            </div>
            <div className="gardenBedVeggie">
              <img src={bellPepper} />
              {Array(this.state.seedCount.bellPepper).fill(
                <img src={bellPepper} alt="Bell Pepper" />
              )}
            </div>
            <div className="gardenBedVeggie">
              <img src={lettuce} />

              {Array(this.state.seedCount.lettuce).fill(
                <img src={lettuce} alt="Lettuce" />
              )}
            </div>
            <div className="gardenBedVeggie">
              <img src={beans} />

              {Array(this.state.seedCount.beans).fill(
                <img src={beans} alt="Beans" />
              )}
            </div>
            <div className="gardenBedVeggie">
              <img src={peas} />

              {Array(this.state.seedCount.peas).fill(
                <img src={peas} alt="Peas" />
              )}
            </div>
            <div className="gardenBedVeggie">
              <img src={corn} />

              {Array(this.state.seedCount.corn).fill(
                <img src={corn} alt="Corn" />
              )}
            </div>
          </div>
        </container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(GardenBed));
