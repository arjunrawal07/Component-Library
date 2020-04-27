import React from "react";
import { storiesOf } from "@storybook/react";

import NumberInput from "./NumberInput";

storiesOf("Number", module).add("Number Input", () => (
  <div className="form-number">
    <NumberInput
      label="Counter"
      type="number"
      counter
      min={0}
      max={50}
      step={1}
      value={0}
    />
  </div>
));
