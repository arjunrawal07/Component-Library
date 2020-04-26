import React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./CheckBox";

storiesOf("Checkboxes", module)
  .add("Empty Black Checkbox", () => (
    <div>
      <Checkbox type="checkbox" />
    </div>
  ))
  .add("Checked Black Checkbox", () => (
    <div>
      <Checkbox type="checkbox" checkedState />
    </div>
  ))

  .add("Empty Blue Checkbox", () => (
    <div>
      <Checkbox type="checkbox" blue />
    </div>
  ))

  .add("Checked Blue Checkbox", () => (
    <div>
      <Checkbox type="checkbox" checkedStateBlue />
    </div>
  ))
  .add("No Popups", () => (
    <div>
      <Checkbox type="checkbox" checkedState popup />
    </div>
  ));
