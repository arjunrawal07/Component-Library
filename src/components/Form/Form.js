import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let redeemClass = "";
  let buttonLabel = "";
  let count = "0";
  let types = ["default", "select-default", "number", "checkbox"];
  let placeholderValues = ["Select", "Email", "Voucher code"];
  let buttonTexts = ["Redeem"];
  let test = "";

  const callBack = (event) => {
    event.preventDefault();
    test += event.target.value;
    if (event.target.value !== test) {
      console.log("Submitted!");
    }
  };
  const decrement = ({ count }) => {
    return (count -= 1);
  };

  const increment = ({ count }) => {
    return (count += 1);
  };

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

export default Form;
