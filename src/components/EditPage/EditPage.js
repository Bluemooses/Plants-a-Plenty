import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieButton from "../VeggieButton/VeggieButton";

class EditPage extends Component {
  state = {
    seedCount: {},
  };

  // componentDidMount() {
  //   // console.log(this.props.state);
  //   // console.log(this.state);
  //   console.log(this.props.state.currentGardenBed.greenbean_seeds);
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps.state.currentGardenBed);
  //   this.setState({
  //     seedCount: { beans: nextProps.state.currentGardenBed.greenbean_seeds },
  //   });
  // }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            console.log(this.state.seedCount);
          }}
        ></button>
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
