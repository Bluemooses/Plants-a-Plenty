import React, { Component } from "react";
import { connect } from "react-redux";
import "./GardenComplete.css";
// import carrotImg from "../../images/carrot.png";
// import bellPepperImg from "../../images/bell-pepper.png";
// import lettuceImg from "../../images/lettuce.png";
// import beansImg from "../../images/beans.png";
// import peasImg from "../../images/peas.png";
import cornImg from "../../images/corn.png";
import { BlueButton } from "../Buttons/Button";
class GardenComplete extends Component {
  // DEFINES MOST CURRENT GARDEN SEED COUNTS
  carrot = this.props.state.seedCount.carrot;
  lettuce = this.props.state.seedCount.lettuce;
  bellPepper = this.props.state.seedCount.bellPepper;
  beans = this.props.state.seedCount.beans;
  pea = this.props.state.seedCount.peas;
  corn = this.props.state.seedCount.corn;
  material = this.props.state.materials;

  render() {
    return (
      <div>
        {/* HEADERS */}
        <h2>Garden Created!</h2>

        {/* VEGETABLES CHOSEN AND THEIR AMOUNTS */}
        <section className="gardenList">
          <label className="gardenLabel">Vegetables chosen</label>
          <ul>
            <li>Carrot plants: {this.carrot}</li>
            <li>Bell Pepper plants: {this.bellPepper}</li>
            <li>Lettuce plants: {this.lettuce}</li>
            <li>Tomato plants: {this.beans}</li>
            <li>Pea plants: {this.pea}</li>
            <li>Corn plants: {this.corn}</li>
          </ul>
        </section>

        {/* LIST OF MATERIALS NEEDED */}
        <section className="gardenList">
          <label for="li" className="gardenLabel">
            Materials
          </label>
          <li>Square Footage: {this.material.sqFt} sqFt.</li>
          <li>Soil required: {this.material.soilCuYd} cuYd.</li>
          <li>
            Wood Height: {Number(this.material.height * 12).toFixed(2)} in.
          </li>
          <li>Side Board Length: {this.material.length} ft.</li>
          <li>End Board Length: {this.material.width} ft.</li>
        </section>

        <BlueButton onClick={() => this.props.history.push("/my-gardens")}>
          See Garden List
        </BlueButton>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(GardenComplete);
