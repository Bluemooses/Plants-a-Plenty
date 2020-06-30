import React, { Component } from "react";
import { connect } from "react-redux";

class UserGardens extends Component {

    componentDidMount(){
        console.log(this.props);
        console.log(this.props.state);
    }
  render() {
    return (
      <div>
        <h2>Hello SENORA!</h2>
        <p>Why</p>
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

export default connect(mapStateToProps)(UserGardens);
