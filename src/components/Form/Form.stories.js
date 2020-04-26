import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

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

 