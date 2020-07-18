import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { withTheme } from "emotion-theming";

const StyledButton = withStyles({
  root: {
    background: "#486f27",
    borderRadius: 22,
    color: "white",
    height: "50%",
    width: "",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: ".5%",
  },
})(Button);
const RemoveButton = withStyles({
  root: {
    background: "#ff1744",
    borderRadius: 22,
    color: "white",
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: ".5%",
  },
})(Button);
const BlueButton = withStyles({
  root: {
    background: "#482880",
    borderRadius: 22,
    color: "white",
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: ".5%",
  },
})(Button);
const YellowButton = withStyles({
  root: {
    background: "#b2a429",
    borderRadius: 22,
    color: "white",
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: ".5%",
  },
})(Button);

export { StyledButton, RemoveButton, BlueButton, YellowButton };
