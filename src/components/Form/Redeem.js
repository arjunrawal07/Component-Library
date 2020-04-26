import React from "react";
import "./Form.css";

const Redeem = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let redeemClass = "";
  let buttonLabel = "";
  let types = "default";
  let placeholderValues = "Voucher code";
  let buttonTexts = "Redeem";
  let test = "";

  const callBack = (event) => {
    event.preventDefault();
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

  if (placeholderValues.includes(props.placeholder)) {
    placeText += ` ${props.placeholder}`;
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
        </form>
      </div>
    );
  }
  if (props.blue) {
    classList += ` form-blue`;
  }

  return (
    <div>
      <input className={classList} type="text" placeholder={placeText} />
      <div className={imgClass}></div>
    </div>
  );
};

export default Redeem;
