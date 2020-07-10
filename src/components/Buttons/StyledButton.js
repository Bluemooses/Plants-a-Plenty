import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, Container } from "@material-ui/core";
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

export default StyledButton;
