import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieItem from "../VeggieItem/VeggieItem";

class VeggieDescriptions extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.state);
    console.log(this.props.history);
    console.log(this.props.veggies);
  }
  render() {
    return (
      <div>
        <h2>Click on Image to See Description</h2>
        {this.props.veggies.map((veggie, id) => {
          return <VeggieItem key={id} veggie={veggie} />;
        })}
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

export default connect(mapStateToProps)(VeggieDescriptions);
