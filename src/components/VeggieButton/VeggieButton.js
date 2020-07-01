import React, { Component } from "react";
import { connect } from "react-redux";

class VeggieButton extends Component {
  componentDidMount() {
    console.log(this.props.vegImages);
  }

  doAThing(payload, count) {
    count += 1;
    this.props.dispatch({
      type: "VEGGIE_CLICKED",
      payload: payload,
    });
  }

  render() {
    return (
      <div>
        {/* Mapping through vegetable images and targeting their id */}
        {this.props.vegImages.map((veggie, i) => {
          let count = 1;

          let payload = { type: veggie.type, id: veggie.id, count: count }; //this is what we want to keep track of;
          return (
            <div>
              {/* Appends name to help user define buttons */}
              <label className="button-label">{veggie.type}</label>

              {/* Provides the image clicked which handles adding or removing vegetables by their type. */}
              <img
                onClick={() => {
                  count = 1;
                  this.doAThing(payload, count);
                }}
                height={50}
                width={50}
                src={veggie.img}
                alt="oopsies"
              ></img>

              {/* Provides the remove button which will handle removing vegetables by their type */}
              <button
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
