import React, { Component } from "react";
import { connect } from "react-redux";

class VeggieButton extends Component {
  componentDidMount() {
    console.log(this.props.vegImages);
  }

  render() {
    return (
      <div>
        {/* Mapping through vegetable images and targeting their id */}
        {this.props.vegImages.map((veggie, i) => {
          return (
            <div>
              <img
                onClick={(id) =>
                  this.props.dispatch({
                    type: "VEGGIE_CLICKED",
                    payload: veggie.id,
                  })
                }
                height={50}
                width={50}
                src={veggie.img}
                alt="oopsies"
              ></img>
              <button
                onClick={(id) =>
                  this.props.dispatch({
                    type: "VEGGIE_REMOVED",
                    payload: veggie.id,
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
