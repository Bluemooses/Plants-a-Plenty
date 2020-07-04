import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@material-ui/core";
import "./InputForm.css";
import { Redirect, useHistory } from "react-router-dom";
import { push } from "connected-react-router";

function InputForm(props) {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  let cuFt = Number((length * width * height).toFixed(2));
  let sqFt = Number((length * width).toFixed(2));
  let cuInches = Number((cuFt * 1728).toFixed(2));
  let sqInches = Number((sqFt * 144).toFixed(2));
  let cuYards = Number((cuFt / 27).toFixed(2));
  let dataObject = {
    cuFt: cuFt,
    sqFt: sqFt,
    width: Number(width),
    length: Number(length),
    height: Number(height),
    hammer: true,
    screws: true,
    soilCuYd: cuYards,
  };

  // useEffect(() => {
  //   console.log("just updated");
  //   return () => dispatch({ type: "POST_MATERIALS", payload: dataObject });
  // });
  return (
    <div>
      <Input
        className="gardenIn"
        autoFocus={true}
        focusbordercolor="red.300"
        variant="outlined"
        placeholder="Length in Ft."
        width={150}
        onChange={(event) => {
          setLength(event.target.value);
        }}
      />
      <Input
        className="gardenIn"
        variant="outlined"
        placeholder="Width in Ft."
        width={150}
        onChange={(event) => {
          setWidth(event.target.value);
        }}
      />
      <Input
        className="gardenIn"
        variant="outlined"
        width={150}
        placeholder="Height in Ft."
        onChange={(event) => {
          setHeight(event.target.value);
        }}
      />
      <section>
        <p value={0}>Cubic Feet: {cuFt}</p>
        <p>Square Feet: {sqFt}</p>
        <p>Dirt Required: {cuYards} cu. Yards</p>
      </section>
      <button
        onClick={() => {
          dispatch({ type: "POST_MATERIALS", payload: dataObject });
          history.push("/create-garden");
        }}
      >
        Submit Dimensions
      </button>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   garden: state.garden,
// });

export default InputForm;
