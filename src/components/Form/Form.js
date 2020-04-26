import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let types = "default";
  let placeholderValues = "Email";

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }

  if (props.medium) {
    classList += ` form-medium`;
  }

  if (props.large) {
    classList += ` form-large`;
  }
  if (props.dropDown) {
    imgClass += ` form-dropdown`;
  }

  if (placeholderValues.includes(props.placeholder)) {
    placeText += ` ${props.placeholder}`;
  }

  return (
    <div>
      <input className={classList} type="text" placeholder={placeText} />
      <div className={imgClass}></div>
    </div>
  );
};

export default Form;
