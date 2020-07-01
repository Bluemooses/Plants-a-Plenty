import React, { Component } from "react";
import { connect } from "react-redux";

class VeggieButton extends Component {
  //   Dispatches payload object created from map.
  countVeggie(payload) {
    this.props.dispatch({
      type: "VEGGIE_CLICKED",
      payload: payload,
    });
  }

  render() {
    return (
      <div>
        {/* Mapping through vegetable images and targeting their id */}
        {this.props.vegImages.map((veggie) => {
          let payload = {
            type: veggie.type,
          }; //this is what we want to keep track of;

          return (
            <div>
              {/* Appends name to help user define buttons */}
              <label className="button-label">{veggie.type}</label>

              {/* Provides the image clicked which handles adding or removing vegetables by their type. */}
              <img
                onClick={() => {
                  this.countVeggie(payload);
                }}
                key={veggie.id}
                height={50}
                width={50}
                src={veggie.img}
                alt="oopsies"
              ></img>

              {/* Provides the remove button which will handle removing vegetables by their type */}
              <button
                key={veggie.id}
                onClick={() =>
                  this.props.dispatch({
                    type: "VEGGIE_REMOVED",
                    payload: payload,
                  })
                }
              >
                Remove
              </button>
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
