import React from "react";
import "./Form.css";

const Checkbox = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let types = "checkbox";

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }
  if (props.blue) {
    classList += ` form-blue`;
  }
  if (props.popup) {
    classList += ` form-popup`;
    return (
      <div>
        <div className="blackCheck"></div>
        <div className="text">
          <p>Don't show this popup again</p>
        </div>
      </div>
    );
  }
  if (props.checkedState) {
    return <div className="blackCheck"></div>;
  }

  if (props.checkedStateBlue) {
    return <div className="blueCheck"></div>;
  }
  return (
    <div>
      <input className={classList} type="text" placeholder={placeText} />
      <div className={imgClass}></div>
    </div>
  );
};

export default Checkbox;
