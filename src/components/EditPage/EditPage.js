import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieButton from '../VeggieButton/VeggieButton';

class EditPage extends Component {
  render() {
    return (
      <div>
        <VeggieButton />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps)(EditPage);
