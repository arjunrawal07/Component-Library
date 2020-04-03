import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = "";
  let imgClass = "";

  let types = ["default", "primary", "danger", "success", "warning"];

  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }

  if (props.darken) {
    classList += ` button-darken`;
  }
  if (props.defaultOutline) {
    classList += ` default-outline`;
  }
  if (props.primaryOutline) {
    classList += ` primary-outline`;
  }
  if (props.successOutline) {
    classList += ` success-outline`;
  }
  if (props.dangerOutline) {
    classList += ` danger-outline`;
  }
  if (props.warningOutline) {
    classList += ` warning-outline`;
  }
  if (props.defaultFloating) {
    classList += `default-floating`;
  }
  if (props.primaryFloating) {
    classList += ` primary-floating`;
  }
  if (props.successFloating) {
    classList += ` success-floating`;
  }
  if (props.dangerFloating) {
    classList += ` danger-floating`;
  }
  if (props.warningFloating) {
    classList += ` warning-floating`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.hearticon) {
    imgClass += ` heart-icon`;
  }
  if (props.carticon) {
    imgClass += ` cart-icon`;
  }
  if (props.addFavorites) {
    classList += ` add-favorites`;
  }
  if (props.addCart) {
    classList += ` add-cart`;
  }

  return (
    <div>
      <button className={classList}>
        <div className={imgClass}></div>
        {props.label}
      </button>
    </div>
  );
};
export default Button;
