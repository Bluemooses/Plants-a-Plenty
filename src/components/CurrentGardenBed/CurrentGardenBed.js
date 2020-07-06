import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class CurrentGardenBed extends Component {
  currentBed = this.props.state.currentGardenBed;

  componentDidMount() {
    console.log(this.props.state);
    console.log(this.currentBed);
  }

  render() {
    return (
      <div>
        <label>Materials Required</label>
        {this.currentBed.map((bed) => {
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
