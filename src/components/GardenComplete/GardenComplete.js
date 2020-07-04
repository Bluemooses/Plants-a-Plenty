import React, { Component } from "react";
import { connect } from "react-redux";
import "./GardenComplete.css";

class GardenComplete extends Component {
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
          <li>Square Footage: {this.material.sqFt}</li>
          <li>Soil required: {this.material.soilCuYd}</li>
          <li>Wood height: {this.material.height}</li>
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
                <li>column spacing: {veggie.seed_spacing} in.</li>
                <li>row spacing: {veggie.row_spacing} in.</li>
                <li>sq. footage: {(veggie.sq_in_per_seed / 144).toFixed(2)}</li>
                <li>sq inches: {veggie.sq_in_per_seed}</li>
              </ul>
            );
          })}
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(GardenComplete);

//wipe all at same id.
//re insert into it

// {
//   /* LIST OF VEGETABLE YIELDS
// <section className="yieldList">
//   <label className="gardenLabel">Vegetable Yields</label>
//   {this.props.state.veggies.map((veggie) => {
//     return (
//       <ul>
//         <li>
//           Yields per plant {veggie.veggie_name}: {veggie.yield}{" "}
//         </li>
//       </ul>
//     );
//   })} */
// }
