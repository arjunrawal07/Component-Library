import React from "react";
import { storiesOf } from "@storybook/react";
import SelectForm from "./SelectForms";

storiesOf("Select Inputs", module)
  .add("Select Input Default", () => (
    <div className="header">
      <SelectForm label="Select" type="select-default" placeholder="Select" />
    </div>
  ))

  .add("Select Input Medium", () => (
    <div className="header">
      <SelectForm
        label="Select"
        type="select-default"
        placeholder="Select"
        selectMedium
      />
    </div>
  ))

  .add("Select Input Large", () => (
    <div className="header">
      <SelectForm
        label="Select"
        type="select-default"
        placeholder="Select"
        selectLarge
      />
    </div>
  ))

  .add("Select Input Default Filled", () => (
    <div className="header">
      <SelectForm
        label="Select"
        type="select-default"
        placeholder="Select"
        filled
      />
    </div>
  ))

  .add("Select Input Medium Filled", () => (
    <div className="header">
      <SelectForm
        label="Select"
        type="select-default"
        placeholder="Select"
        selectMedium
        filled
      />
    </div>
  ))

  .add("Select Input Large Filled", () => (
    <div className="header">
      <SelectForm
        label="Select"
        type="select-default"
        placeholder="Select"
        selectLarge
        filled
      />
    </div>
  ));
