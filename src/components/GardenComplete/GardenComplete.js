import React, { Component } from "react";
import { connect } from "react-redux";
import "./GardenComplete.css";
import carrotImg from "../../images/carrot.png";
import bellPepperImg from "../../images/bell-pepper.png";
import lettuceImg from "../../images/lettuce.png";
import beansImg from "../../images/beans.png";
import peasImg from "../../images/peas.png";
import cornImg from "../../images/corn.png";
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

        {/* LIST OF MATERIALS NEEDED */}
        <section className="gardenList">
          <label for="li" className="gardenLabel">
            Materials
          </label>
          <li>Square Footage: {this.material.sqFt} sqFt.</li>
          <li>Soil required: {this.material.soilCuYd} cuYd.</li>
          <li>
            Wood height: {Number(this.material.height / 12).toFixed(2)} in.
          </li>
          <li>Side Board Length: {this.material.length}</li>
          <li>End Board Length: {this.material.width}</li>
        </section>

        {/* VEGETABLES CHOSEN AND THEIR AMOUNTS */}
        <section className="gardenList">
          <label className="gardenLabel">Vegetables chosen</label>
          <ul>
            <li>Carrot plants: {this.carrot}</li>
            <li>Bell Pepper plants: {this.bellPepper}</li>
            <li>Lettuce plants: {this.lettuce}</li>
            <li>Bean plants: {this.beans}</li>
            <li>Pea plants: {this.pea}</li>
            <li>Corn plants: {this.corn}</li>
          </ul>
        </section>

        {/* PROVIDE INFO FROM REDUCER ABOUT VEGETABLE SPACING */}
        <section className="gardenList">
          <label className="gardenLabel">Vegetable Spacing</label>

          {this.props.state.veggies.map((veggie) => {
            return (
              <ul>
                <label for="li" className="gardenLabel">
                  {" "}
                  {veggie.veggie_name}
                </label>
                <li>Column spacing: {veggie.seed_spacing} in.</li>
                <li>Row spacing: {veggie.row_spacing} in.</li>
                <li>Sq. footage: {(veggie.sq_in_per_seed / 144).toFixed(2)}</li>
                <li>Sq inches: {veggie.sq_in_per_seed}</li>
              </ul>
            );
          })}
        </section>

        <button onClick={() => this.props.history.push("/create-garden")}>
          See Garden List
        </button>

        <section className="gardenImages">
          <img src={cornImg}></img>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(GardenComplete);
