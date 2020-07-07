import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import VeggieButton from "../VeggieButton/VeggieButton";
import "./CurrentGardenBed.css";

class CurrentGardenBed extends Component {
  state = {
    currentBed: [],
    seedCount: [],
    isEditing: false,
  };

  // SET MOST RECENT USER SEED COUNT && SET OUR CURRENT GARDEN BED
  componentWillReceiveProps(nextProps) {
    this.setState({
      currentBed: nextProps.state.currentGardenBed,
      seedCount: nextProps.state.seedCount,
    });
    console.log(this.state.currentBed);
  }

  //SEND US THE CURRENT GARDEN BED INFORMATION SET MOST RECENT SEEDS TO CURRENT BED.
  handleEdit = (bed, payload) => {
    console.log(bed);
    console.log(payload);
    this.setState({
      isEditing: !this.state.isEditing,
    });
    this.props.dispatch({ type: "SET_CURRENT_SEEDS", payload: payload });
    console.log(this.props.state);
  };

  handleGardenBedChanges = (bed) => {
    // this.props.dispatch({ type: "UPDATE_SEEDS", payload: payload });
    console.log("submit complete");
    // console.log(payload);
    let updatePayload = {
      carrot: this.props.state.seedCount.carrot,
      corn: this.props.state.seedCount.corn,
      bellPepper: this.props.state.seedCount.bellPepper,
      peas: this.props.state.seedCount.peas,
      beans: this.props.state.seedCount.beans,
      lettuce: this.props.state.seedCount.lettuce,
    };
    console.log(updatePayload);
    
  };

  render() {
    return (
      <div>
        <label>Garden Details</label>
        {this.state.currentBed.map((bed) => {
          let payload = {
            carrot: bed.carrot_seeds,
            bellPepper: bed.bell_pepper_seeds,
            corn: bed.corn_seeds,
            peas: bed.pea_seeds,
            beans: bed.greenbean_seeds,
            lettuce: bed.lettuce_seeds,
          };
          return (
            <div>
              <ul>
                <label>Soil Required</label>
                <ul>
                  <li>{bed.soil} cuYd.</li>
                </ul>
                <label>Bed Dimensions in Ft</label>
                <ul>
                  <li>Length: {bed.wood_length} </li>
                  <li>Width: {bed.wood_width}</li>
                  <li>Height: {bed.wood_height}</li>
                </ul>
              </ul>
              <label>Plants Selected</label>
              {!this.state.isEditing ? (
                <ul>
                  <li>Carrots: {payload.carrot}</li>
                  <li>Lettuce: {payload.lettuce}</li>
                  <li>Green Beans: {payload.beans}</li>
                  <li>Peas: {payload.peas}</li>
                  <li>Bell Peppers: {payload.bellPepper}</li>
                  <li>Corn: {payload.corn}</li>
                </ul>
              ) : (
                <ul>
                  <li>Carrots: {this.state.seedCount.carrot}</li>
                  <li>Lettuce: {this.state.seedCount.lettuce}</li>
                  <li>Green Beans: {this.state.seedCount.beans}</li>
                  <li>Peas: {this.state.seedCount.peas}</li>
                  <li>Bell Peppers: {this.state.seedCount.bellPepper}</li>
                  <li>Corn: {this.state.seedCount.corn}</li>
                </ul>
              )}
              <button onClick={() => this.handleEdit(bed, payload)}>
                {!this.state.isEditing ? "Edit Garden" : "Undo"}
              </button>
              <button onClick={() => this.props.history.push("/create-garden")}>
                Back to Gardens
              </button>
              <section className="veggieButtons">
                {this.state.isEditing ? (
                  <div>
                    <VeggieButton />
                    <button
                      onClick={() => {
                        this.handleGardenBedChanges(bed, payload);
                      }}
                    >
                      Submit Changes
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
              </section>
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

export default connect(mapStateToProps)(withRouter(CurrentGardenBed));
