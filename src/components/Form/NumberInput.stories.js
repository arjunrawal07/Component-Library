import React from "react";
import { storiesOf } from "@storybook/react";

import NumberInput from "./NumberInput";

storiesOf("Number", module).add("Number Input", () => (
  <div className="number">
    <NumberInput label="Counter" type="number" counter />
  </div>
));
