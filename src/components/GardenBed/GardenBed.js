import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class GardenBed extends Component {
  state = {
    veggies: {},
    seedCount: {},
  };

  componentDidMount() {
    console.log(this.props.history);
    console.log("GARDEN BEDS ARE", this.props.state.gardenBedReducer);
    console.log("LAST GARDEN IS");
    const [latestGarden] = this.props.state.gardenBedReducer.slice(-1);
    console.log(latestGarden);

    this.setState({
      veggies: this.props.state.veggies,
      seedCount: this.props.state.seedCount,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      seedCount: nextProps.state.seedCount,
    });
  }

  addVeggie = (props) => {
    console.log("click");
    let payload = {
      seedCount: this.state.seedCount,
      materials: this.props.state.materials,
    };
    console.log("EASIER TO SEE", this.payload);
    this.props.dispatch({
      type: "CREATE_GARDEN_BED",
      payload: payload,
    });
    // this.props.dispatch({
    //   type: "POST_VEGGIE_COUNTS",
    //   payload: this.state.seedCount,
    // });
    // // console.log(props);
    // this.props.dispatch({
    //   type: "POST_MATERIALS",
    //   payload: this.props.state.materials,
    // });

    this.props.history.push("/current-garden");
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
          Add Veggies to My Garden
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(GardenBed));
