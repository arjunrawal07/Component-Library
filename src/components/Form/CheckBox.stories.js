import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./CheckBox";

storiesOf("Checkboxes", module)
  .add("Empty Black Checkbox", () => (
    <div>
      <Checkbox color="black" />
    </div>
  ))

  .add("Empty Blue Checkbox", () => (
    <div>
      <Checkbox color="blue" />
    </div>
  ))

  .add("No Popups", () => (
    <div>
      <Checkbox color="black" label="Don't show this popup again"></Checkbox>
    </div>
  ));
