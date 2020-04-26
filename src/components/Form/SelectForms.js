import React from "react";
import "./Form.css";

const SelectForm = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let types = ["default", "select-default"];
  let placeholderValues = "Select";

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }

  if (placeholderValues.includes(props.placeholder)) {
    placeText += ` ${props.placeholder}`;
  }

  if (props.selectMedium) {
    classList += ` form-select-medium`;
  }

  if (props.selectLarge) {
    classList += ` form-select-large`;
  }

  if (props.filled) {
    classList += ` form-select-fill`;
  }

  return (
    <div>
      <input className={classList} type="text" placeholder={placeText} />
      <div className={imgClass}></div>
    </div>
  );
};

export default SelectForm;
