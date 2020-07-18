import React, { Component } from "react";
import { connect } from "react-redux";
import VeggieItem from "../VeggieItem/VeggieItem";
import GridList from "@material-ui/core/Grid";

function VeggieDescriptions(props) {
  return (
    <div>
      <h2>Click Image For More Information</h2>
      {props.veggies.map((veggie, id) => {
        return (
          <GridList cellHeight={160} cols={3}>
            <VeggieItem key={id} veggie={veggie} />{" "}
          </GridList>
        );
      })}
    </div>
  );
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = (state) => ({
  state: state,
  veggies: state.veggies,
});

export default connect(mapStateToProps)(VeggieDescriptions);
