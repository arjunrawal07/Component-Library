import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Warning", () => <Button label="Warning" type="warning" large darken />)
  .add("Primary Dark", () => (
    <Button label="Do Something" type="primary" darken />
  ))
  .add("Primary Outline", () => (
    <Button label="Do Something" type="primary" outline />
  ));
