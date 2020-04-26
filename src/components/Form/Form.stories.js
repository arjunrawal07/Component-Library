import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";
import SelectForm from "./SelectForms";
import NumberInput from "./NumberInput";
import Redeem from "./Redeem";

storiesOf("Form", module)
  //Text input with label

  .add("Default Email", () => (
    <div className="header">
      Email
      <Form label="Email" placeholder="Email" type="default" />
    </div>
  ))

  .add("Default Email Medium", () => (
    <div className="header">
      Email
      <Form label="Email" type="default" placeholder="Email" medium />
    </div>
  ))

  .add("Default Email Large", () => (
    <div className="header">
      Email
      <Form label="Email" type="default" placeholder="Email" large />
    </div>
  ))
  //Select inputs
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
  ))

  //Number input
  .add("Number Input", () => (
    <div className="number">
      <NumberInput label="Counter" type="number" counter />
    </div>
  ))

  //Text Input w Button
  .add("Voucher Button Medium", () => (
    <div className="header">
      <Redeem
        type="default"
        placeholder="Voucher code"
        buttontext="Redeem"
        medium
        redeemMedium
      />
    </div>
  ))
  .add("Voucher Button Large", () => (
    <div className="header">
      <Redeem
        type="default"
        placeholder="Voucher code"
        buttontext="Redeem"
        large
        redeemLarge
      />
    </div>
  ))

  .add("Empty Black Checkbox", () => (
    <div>
      <Form type="checkbox" />
    </div>
  ))
  .add("Checked Black Checkbox", () => (
    <div>
      <Form type="checkbox" checkedState />
    </div>
  ))

  .add("Empty Blue Checkbox", () => (
    <div>
      <Form type="checkbox" blue />
    </div>
  ))

  .add("Checked Blue Checkbox", () => (
    <div>
      <Form type="checkbox" checkedState />
    </div>
  ))
  .add("No Popups", () => (
    <div>
      <Form type="checkbox" popup />
    </div>
  ));
