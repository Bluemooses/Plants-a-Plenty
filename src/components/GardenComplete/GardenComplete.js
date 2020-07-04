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

  componentDidMount() {
    console.log(this.props.state);
    console.log(this.beans);
    console.log(this.props.state.seedCount.beans);
    console.log(this.beans);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(nextProps.state.seedCount);
  }

  render() {
    return (
      <div>
        {/* HEADERS */}
        <h2>Garden Created!</h2>
        <h3>Dimensions</h3>

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
        <label className="gardenLabel">Vegetable Spacing</label>

        <section className="gardenList">
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

        {/* LIST OF MATERIALS */}
        <section className="materialList">
          <label className="gardenLabel">Materials required</label>
          {/* Materials needed: {this.props.state.} */}
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
