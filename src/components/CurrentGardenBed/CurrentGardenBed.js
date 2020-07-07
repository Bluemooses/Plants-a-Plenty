import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import VeggieButton from "../VeggieButton/VeggieButton";
import "./CurrentGardenBed.css";

class CurrentGardenBed extends Component {
  state = {
    currentBed: [],
    isEditing: false,
  };

  // componentDidMount() {
  //   this.forceUpdate();
  //   this.setState({
  //     currentBed: this.props.state.currentGardenBed,
  //   });
  // }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.state.currentGardenBed);
    this.setState({
      currentBed: nextProps.state.currentGardenBed,
    });
    console.log(this.state.currentBed);
  }

  handleEdit = (bed, payload) => {
    console.log(bed);
    console.log(payload);
    // this.props.history.push("/edit-garden");
    this.setState({
      isEditing: !this.state.isEditing,
    });

    console.log(this.props.state.currentGardenBed.carrot_seeds);

    console.log(payload);
    this.props.dispatch({ type: "SET_CURRENT_SEEDS", payload: payload });
    console.log(this.props.state);
  };

  handleGardenBedChanges = () => {
    console.log("submit complete");
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
                  <li>Carrots: {bed.carrot_seeds}</li>
                  <li>Lettuce: {bed.lettuce_seeds}</li>
                  <li>Green Beans: {bed.greenbean_seeds}</li>
                  <li>Peas: {bed.pea_seeds}</li>
                  <li>Bell Peppers: {bed.bell_pepper_seeds}</li>
                  <li>Corn: {bed.corn_seeds}</li>
                </ul>
              ) : (
                <ul>
                  <li>Carrots: {this.props.state.seedCount.carrot}</li>
                  <li>Lettuce: {this.props.state.seedCount.lettuce}</li>
                  <li>Green Beans: {this.props.state.seedCount.beans}</li>
                  <li>Peas: {this.props.state.seedCount.peas}</li>
                  <li>
                    Bell Peppers: {this.props.state.seedCount.bellPepper}
                  </li>{" "}
                  <li>Corn: {this.props.state.seedCount.corn}</li>
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
                        this.handleGardenBedChanges();
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
