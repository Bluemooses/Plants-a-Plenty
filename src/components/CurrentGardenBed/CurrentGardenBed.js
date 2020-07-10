import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import VeggieButton from "../VeggieButton/VeggieButton";
import "./CurrentGardenBed.css";
import carrot from "../../images/carrotSvg.svg";
import bellPepper from "../../images/bellPepperSvg.svg";
import lettuce from "../../images/lettuceSvg.svg";
import beans from "../../images/tomatoSvg.svg";
import peas from "../../images/peaSvg.svg";
import corn from "../../images/cornSvg.svg";
import { BlueButton } from "../Buttons/Button";

class CurrentGardenBed extends Component {
  state = {
    currentBed: [],
    seedCount: [],
    isEditing: false,
    currentGardenBed: 0,
  };

  // SET MOST RECENT USER SEED COUNT && SET OUR CURRENT GARDEN BED
  componentWillReceiveProps(nextProps) {
    this.setState({
      currentBed: nextProps.state.currentGardenBed,
      seedCount: nextProps.state.seedCount,
      garden_bed_id: nextProps.state.currentGardenBed.garden_bed_id,
    });
    console.log(this.state.currentBed);
    this.forceUpdate();
  }

  componentDidUpdate(nextProps, prevState) {
    if (prevState.seedCount !== this.state.seedCount) {
      console.log("yo");
    }
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

  handleGardenBedChanges = (bed, payload) => {
    console.log("submit complete");
    console.log(bed);
    let updatePayload = {
      carrot: this.props.state.seedCount.carrot,
      corn: this.props.state.seedCount.corn,
      bellPepper: this.props.state.seedCount.bellPepper,
      peas: this.props.state.seedCount.peas,
      beans: this.props.state.seedCount.beans,
      lettuce: this.props.state.seedCount.lettuce,
      garden_bed_id: this.state.currentBed[0].garden_bed_id,
    };
    console.log(payload.garden_bed_id);

    console.log(updatePayload);
    this.props.dispatch({ type: "UPDATE_SEEDS", payload: updatePayload });
    this.setState({
      isEditing: !this.state.isEditing,
    });

    // this.forceUpdate();

    // this.props.history.push("/create-garden");
  };

  render() {
    console.log();
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

              {!this.state.isEditing ? (
                <div>
                  <label>Plants Selected</label>
                  <ul>
                    <li>Carrots: {payload.carrot}</li>
                    <li>Lettuce: {payload.lettuce}</li>
                    <li>Tomatoes: {payload.beans}</li>
                    <li>Peas: {payload.peas}</li>
                    <li>Bell Peppers: {payload.bellPepper}</li>
                    <li>Corn: {payload.corn}</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <label>Please Edit Your Garden Bed</label>
                  <div className="gardenBedBox">
                    <div className="gardenBedVeggie">
                      {Array(this.props.state.seedCount.carrot).fill(
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
                  <ul>
                    <li>Carrots: {this.state.seedCount.carrot}</li>
                    <li>Lettuce: {this.state.seedCount.lettuce}</li>
                    <li>Tomatoes: {this.state.seedCount.beans}</li>
                    <li>Peas: {this.state.seedCount.peas}</li>
                    <li>Bell Peppers: {this.state.seedCount.bellPepper}</li>
                    <li>Corn: {this.state.seedCount.corn}</li>
                  </ul>
                </div>
              )}

              <BlueButton onClick={() => this.handleEdit(bed, payload)}>
                {!this.state.isEditing ? "Edit Garden" : "Undo"}
              </BlueButton>
              <BlueButton
                onClick={() => this.props.history.push("/my-gardens")}
              >
                Back to Gardens
              </BlueButton>
              <section className="veggieBlueButtons">
                {this.state.isEditing ? (
                  <div>
                    <VeggieButton />
                    <BlueButton
                      onClick={() => {
                        this.handleGardenBedChanges(bed, payload);
                      }}
                    >
                      Submit Changes
                    </BlueButton>
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
