import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = props => {
  let classList = "";

  let types = ["primary", "danger", "success", "warning"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  if (props.darken) {
    classList += ` .button-darken:hover`;
  }

  if (props.outline) {
    classList += ` .button-outline`;
  }

  return <button className={classList}>{props.label}</button>;
};
export default Button;
