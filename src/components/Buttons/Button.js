import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { withTheme } from "emotion-theming";

const StyledButton = withStyles({
  root: {
    background: "green",
    borderRadius: 22,
    color: "white",
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);
const RemoveButton = withStyles({
  root: {
    background: "red",
    borderRadius: 22,
    color: withTheme,
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);
const BlueButton = withStyles({
  root: {
    background: "blue",
    borderRadius: 22,
    color: withTheme,
    height: "50%",
    width: "50",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
})(Button);

export { StyledButton, RemoveButton, BlueButton };
