import React from "react";
import "./Form.css";

const NumberInput = (props) => {
  let classList = "";
  let imgClass = "";
  let placeText = "";
  let count = "0";
  let types = "number";

  const decrement = ({ count }) => {
    return (count -= 1);
  };

  const increment = ({ count }) => {
    return (count += 1);
  };

  if (types.includes(props.type)) {
    classList += ` form-${props.type}`;
  }

  if (props.counter) {
    classList += ` form-number`;
    return (
      <div className={classList}>
        <div className="decrement">
          <button onClick={decrement}>-</button>
        </div>
        <div className="number">{count}</div>
        <div className="increment">
          <button onClick={increment}>+</button>
        </div>
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

export default NumberInput;
