import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let redeemClass = "";
  let buttonLabel = "";
  let count = "0";
  let types = ["default", "select-default", "number"];
  let placeholderValues = ["Select", "Email", "Voucher code"];
  let buttonTexts = ["Redeem"];
  let test = "";
  const callBack = (event) => {
    test += event.target.value;
    if (event.target.value !== test) {
      console.log("Submitted!");
    }
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

  if (props.number) {
    classList += ` form-number`;
    return (
      <div>
        <button onClick={count - 1}>-</button>
        <div>{count}</div>
        <button onClick={count + 1}>+</button>
      </div>
    );
  }
  if (buttonTexts.includes(props.buttontext)) {
    buttonLabel += ` ${props.buttontext}`;
  }
  if (props.redeemMedium) {
    redeemClass += ` form-redeemMedium`;
    return (
      <div>
        <form onSubmit={callBack}>
          <input className={classList} type="text" placeholder={placeText} />
          <input type="submit" className={redeemClass} value={buttonLabel} />
          {/* <button className={redeemClass}>{buttonLabel}</button> */}
        </form>
      </div>
    );
  }
  if (props.redeemLarge) {
    redeemClass += ` form-redeemLarge`;
    return (
      <div>
        <form onSubmit={callBack}>
          <input className={classList} type="text" placeholder={placeText} />
          <input type="submit" className={redeemClass} value={buttonLabel} />
          {/* /* <button className={redeemClass}>{buttonLabel}</button> */}
        </form>
      </div>
    );
  }

  return (
    <div>
      <input className={classList} type="text" placeholder={placeText} />
      <div className={imgClass}></div>
    </div>
  );
};

export default Form;
