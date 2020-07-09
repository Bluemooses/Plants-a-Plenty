import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles, Container } from "@material-ui/core";
import { withTheme } from "emotion-theming";

const StyledButton = withStyles({
  root: {
    background: "green",
    borderRadius: 7,
    color: "white",
    height: ".2%",
    width: ".2%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);

const RemoveButton = withStyles({
  root: {
    background: "red",
    borderRadius: 7,
    color: withTheme,
    height: ".2%",
    width: ".2%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);

class VeggieButton extends Component {
  //   Dispatches payload object created from map.
  countVeggie(payload) {
    this.props.dispatch({
      type: "VEGGIE_CLICKED",
      payload: payload,
    });
    console.log(payload);
  }

  render() {
    return (
      <div>
        {/* Mapping through vegetable images and targeting their id */}
        {this.props.vegImages.map((veggie) => {
          let payload = {
            type: veggie.type,
            img: veggie.img,
          }; //this is what we want to keep track of;

          return (
            <div>
              {/* Appends name to help user define buttons */}
              <label key={veggie.id} className="button-label">
                {veggie.type}
              </label>

              {/* Provides the image clicked which handles adding or removing vegetables by their type. */}
              <img
                key={veggie.id}
                height={50}
                width={50}
                src={veggie.img}
                alt={veggie.type}
              ></img>

              <StyledButton
                key={veggie.id}
                onClick={() => this.countVeggie(payload)}
              >
                Add
              </StyledButton>
              {/* Provides the remove button which will handle removing vegetables by their type */}
              <RemoveButton
                key={veggie.id}
                onClick={() =>
                  this.props.dispatch({
                    type: "VEGGIE_REMOVED",
                    payload: payload,
                  })
                }
              >
                Remove
              </RemoveButton>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  vegImages: state.vegImages,
});

export default connect(mapStateToProps)(VeggieButton);
