import React from "react";
import "./Form.css";

const Checkbox = (props) => {
  let classList = "";

  if (props.color == "black") {
    classList += "black";
  }

  if (props.color == "blue") {
    classList += "blue";
  }

  return (
    <label id="check" className={classList}>
      <input type="checkbox" className="checkaroo"></input>
      <span className="custom"></span>
      <span className="Label">{props.label}</span>
    </label>
  );
};

export default Checkbox;
