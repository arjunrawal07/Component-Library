import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";

  let types = ["default"];

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }

  if (props.medium) {
    classList += ` form-medium`;
  }

  if (props.large) {
    classList += ` form-large`;
  }
  return (
    <div>
      <p>Email</p>
      <input className={classList} type="text" placeholder="  Email" />
    </div>
  );
};

export default Form;
