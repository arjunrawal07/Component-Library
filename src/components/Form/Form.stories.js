import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Form", module)
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

  .add("Select Input Default", () => (
    <div className="header">
      Select
      <Form label="Select" type="select-default" placeholder="Select" />
    </div>
  ))

  .add("Select Input Medium", () => (
    <div className="header">
      Select
      <Form
        label="Select"
        type="select-default"
        placeholder="Select"
        selectMedium
      />
    </div>
  ))

  .add("Select Input Large", () => (
    <div className="header">
      Select
      <Form
        label="Select"
        type="select-default"
        placeholder="Select"
        selectLarge
      />
    </div>
  ))

  .add("Select Input Default Filled", () => (
    <div className="header">
      Select
      <Form label="Select" type="select-default" placeholder="Select" filled />
    </div>
  ))

  .add("Select Input Medium Filled", () => (
    <div className="header">
      Select
      <Form
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
      Select
      <Form
        label="Select"
        type="select-default"
        placeholder="Select"
        selectLarge
        filled
      />
    </div>
  ))

  .add("Number Input", () => (
    <div>
      <Form label="Counter" type="number" number />
    </div>
  ))

  .add("Voucher Button Medium", () => (
    <div className="header">
      <Form
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
      <Form
        type="default"
        placeholder="Voucher code"
        buttontext="Redeem"
        large
        redeemLarge
      />
    </div>
  ));
