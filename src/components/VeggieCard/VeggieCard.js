import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class VeggieCard extends Component {
  render() {
    return (
      <div>
        <img
          className="veggieImage"
          width={"25%"}
          src={this.props.veggie.img}
          alt={this.props.veggie.veggie_name}
        ></img>
        <h3>{this.props.veggie.veggie_name}</h3>
        <label htmlFor="ul">Details</label>
        <ul>
          <li>{this.props.veggie.description}</li>
          <p></p>
          <label className="veggieCardLabel" htmlFor="ul">
            Recommended Spacing
          </label>
          <ul>
            <li>Row: {this.props.veggie.row_spacing} in.</li>
            <li>Column: {this.props.veggie.seed_spacing} in.</li>
            <li>Area: {this.props.veggie.sq_in_per_seed} in²</li>
          </ul>
          <label>How to Plant</label>
          <ul>
            <li>When to Plant: {this.props.veggie.timing}</li>
            <li>Method: Seed in Ground</li>
          </ul>
          <label>Theoretical Yield (annum)</label>
          <ul>
            <li>One foot row: {this.props.veggie.yield} lbs.</li>
          </ul>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(withRouter(VeggieCard));
