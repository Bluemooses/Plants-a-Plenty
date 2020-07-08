import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class VeggieCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.veggie.img}></img>
        <h3>{this.props.veggie.veggie_name}</h3>
        <label for="ul">Details</label>
        <ul>
          <li>{this.props.veggie.description}</li>
          <label className="veggieCardLabel" for="ul">
            Recommended Spacing
          </label>
          <ul>
            <li>Row: {this.props.veggie.row_spacing} in.</li>
            <li>Column: {this.props.veggie.seed_spacing} in.</li>
            <li>Area: {this.props.veggie.sq_in_per_seed} in²</li>
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
