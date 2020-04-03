import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Form", module)
  .add("Default Email", () => <Form label="Email" type="default" />)

  .add("Default Email Medium", () => (
    <Form label="Email" type="default" medium />
  ))

  .add("Default Email Large", () => (
    <Form label="Email" type="default" large />
  ));
