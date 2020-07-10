import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import { withTheme } from "emotion-theming";

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

export default RemoveButton;
