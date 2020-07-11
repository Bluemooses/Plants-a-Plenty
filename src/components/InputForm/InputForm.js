import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Input } from "@material-ui/core";
import "./InputForm.css";
import { BlueButton } from "../Buttons/Button";

function InputForm(props) {
  // DEFINE CONSTS
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const dispatch = useDispatch();

  // DEFINE LOGIC FOR PAYLOAD OBJECT
  let cuFt = Number((length * width * height).toFixed(2));
  let sqFt = Number((length * width).toFixed(2));
  let cuInches = Number((cuFt * 1728).toFixed(2));
  let sqInches = Number((sqFt * 144).toFixed(2));
  let cuYards = Number((cuFt / 27).toFixed(2));

  // KEEP TRACK OF THIS OBJECT, && DISPATCH TO REDUCER.
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

  return (
    <div>
      <h2>One Veggie = One Foot Row</h2>
      {/* INPUT COLLECTOR */}
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
      {/* INPUT COLLECTOR */}
      <Input
        className="gardenIn"
        variant="outlined"
        placeholder="Width in Ft."
        width={150}
        onChange={(event) => {
          setWidth(event.target.value);
        }}
      />
      {/* INPUT COLLECTOR */}
      <Input
        className="gardenIn"
        variant="outlined"
        width={150}
        placeholder="Height in Ft."
        onChange={(event) => {
          setHeight(event.target.value);
        }}
      />{" "}
      {/* DISPATCH USER DIMENSIONS */}
      <BlueButton
        onClick={() => {
          dispatch({ type: "SET_MATERIALS", payload: dataObject });
        }}
      >
        Submit Dimensions
      </BlueButton>
      {/* SHOW DATA ON DOM */}
      <section className="gardeniestOfLists">
        <p value={0}>Cubic Feet: {cuFt}</p>
        <p>Square Feet: {sqFt}</p>
        <p>Dirt Required: {cuYards} cu. Yards</p>
      </section>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   garden: state.garden,
// });

export default InputForm;
