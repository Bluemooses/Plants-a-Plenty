import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieCard from "../VeggieCard/VeggieCard";

class VeggieItem extends Component {
  state = {
    toggleDescription: true,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.state);
    console.log(this.props.history);
    console.log(this.props.veggies);
  }

  goToVeggie() {
    this.setState({
      toggleDescription: !this.state.toggleDescription,
    });
  }
  render() {
    return (
      <div>
        {this.state.toggleDescription ? (
          <img
            className="veggieImage"
            onClick={() => this.goToVeggie()}
            src={this.props.veggie.img}
            alt={this.props.veggies.key}
          />
        ) : (
          <div onClick={() => this.goToVeggie()}>
            <VeggieCard veggie={this.props.veggie} />
          </div>
        )}
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  state: state,
  veggies: state.veggies,
});

export default connect(mapStateToProps)(VeggieItem);
