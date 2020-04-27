import React from "react";
import "./Form.css";

let classList = "";
let imgClass = "";
let placeText = "";
let types = "number";

class NumberInput extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: props.value,
      min: props.min,
      max: props.max,
      step: props.step,
    };
  }
  decrement = () => {
    if (this.state.min < this.state.count) {
      this.setState({ count: this.state.count - this.state.step });
    }
  };

  increment = () => {
    if (this.state.max > this.state.count) {
      this.setState({ count: this.state.count + this.state.step });
    }
  };
  // if (types.includes(props.type)) {
  //   classList += ` form-${props.type}`;
  // }

  // if (props.counter) {
  //   classList += ` form-number`;

  render() {
    return (
      <div className={classList}>
        <div className="decrement">
          <button onClick={this.decrement}>-</button>
        </div>
        <div className="number">{this.state.count}</div>
        <div className="increment">
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
export default NumberInput;
