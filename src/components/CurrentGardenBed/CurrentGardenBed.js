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

  handleEdit = (bed) => {
    console.log(bed);
    // this.props.history.push("/edit-garden");
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  render() {
    return (
      <div>
        <label>Garden Details</label>
        {this.state.currentBed.map((bed) => {
          return (
            <div>
              <ul>
                <label>Soil Required</label>
                <ul>
                  <li>{bed.soil} cuYd.</li>
                </ul>

                <label>Wood in Ft</label>
                <ul>
                  <li>Length: {bed.wood_length} </li>
                  <li>Width: {bed.wood_width}</li>
                  <li>Height: {bed.wood_height}</li>
                </ul>
              </ul>
              <label>Plants Selected</label>
              <ul>
                <li>Carrots: {bed.carrot_seeds}</li>
                <li>Lettuce: {bed.lettuce_seeds}</li>
                <li>Grean Beans: {bed.greenbean_seeds}</li>
                <li>Peas: {bed.pea_seeds}</li>
                <li>Bell Peppers: {bed.bell_pepper_seeds}</li>
                <li>Corn: {bed.corn_seeds}</li>
              </ul>
              <button onClick={() => this.handleEdit(bed)}>
                {!this.state.isEditing ? "Edit Garden" : "Undo"}
              </button>
              <button onClick={() => this.props.history.push("/create-garden")}>
                Back to Gardens
              </button>
              <section className="veggieButtons">
                {this.state.isEditing ? <VeggieButton /> : <div></div>}
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
