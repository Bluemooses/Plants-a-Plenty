import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import carrot from "../../images/carrot.png";
import bellPepper from "../../images/bell-pepper.png";
import lettuce from "../../images/lettuce.png";
import beans from "../../images/beans.png";
import peas from "../../images/peas.png";
import corn from "../../images/corn.png";
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
          {Array(this.state.seedCount.carrot).fill(
            <img src={carrot} alt="Carrot" />
          )}
          {Array(this.state.seedCount.bellPepper).fill(
            <img src={bellPepper} alt="Bell Pepper" />
          )}
          {Array(this.state.seedCount.lettuce).fill(
            <img src={lettuce} alt="Lettuce" />
          )}
          {Array(this.state.seedCount.beans).fill(
            <img src={beans} alt="Beans" />
          )}
          {Array(this.state.seedCount.peas).fill(<img src={peas} alt="Peas" />)}
          {Array(this.state.seedCount.corn).fill(<img src={corn} alt="Corn" />)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(GardenBed));
