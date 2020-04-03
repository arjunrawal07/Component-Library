import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
  .add("Default", () => <Button label="Do Something" type="default" />)
  .add("Primary", () => <Button label="Do Something" type="primary" />)
  .add("Success", () => <Button label="Do Something" type="success" />)
  .add("Danger", () => <Button label="Do Something" type="danger" />)
  .add("Warning", () => <Button label="Do Something" type="warning" />)

  .add("Default Dark", () => (
    <Button label="Do Something" type="default" darken />
  ))
  .add("Primary Dark", () => (
    <Button label="Do Something" type="primary" darken />
  ))
  .add("Success Dark", () => (
    <Button label="Do Something" type="success" darken />
  ))
  .add("Danger Dark", () => (
    <Button label="Do Something" type="danger" darken />
  ))
  .add("Warning Dark", () => (
    <Button label="Do Something" type="warning" darken />
  ))

  .add("Default Outline", () => (
    <Button label="Do Something" type="default" defaultOutline />
  ))
  .add("Primary Outline", () => (
    <Button label="Do Something" type="primary" primaryOutline />
  ))
  .add("Success Outline", () => (
    <Button label="Do Something" type="success" successOutline />
  ))
  .add("Danger Outline", () => (
    <Button label="Do Something" type="danger" dangerOutline />
  ))
  .add("Warning Outline", () => (
    <Button label="Do Something" type="warning" warningOutline />
  ))

  .add("Default Floating", () => (
    <Button label="Do Something" type="default" defaultFloating />
  ))
  .add("Primary Floating", () => (
    <Button label="Do Something" type="primary" primaryFloating />
  ))
  .add("Success Floating", () => (
    <Button label="Do Something" type="success" successFloating />
  ))
  .add("Danger Floating", () => (
    <Button label="Do Something" type="danger" dangerFloating />
  ))

  .add("Warning Floating", () => (
    <Button label="Do Something" type="warning" warningFloating />
  ))

  .add("Default Large", () => (
    <Button label="Do Something" type="default" large />
  ))
  .add("Primary Large", () => (
    <Button label="Do Something" type="primary" large />
  ))

  .add("Success Large", () => (
    <Button label="Do Something" type="success" large />
  ))

  .add("Danger Large", () => (
    <Button label="Do Something" type="danger" large />
  ))

  .add("Warning Large", () => (
    <Button label="Do Something" type="warning" large />
  ))

  .add("Default Outline Large", () => (
    <Button label="Do Something" type="primary" defaultOutline large />
  ))
  .add("Primary Outline Large", () => (
    <Button label="Do Something" type="primary" primaryOutline large />
  ))
  .add("Success Outline Large", () => (
    <Button label="Do Something" type="success" successOutline large />
  ))
  .add("Danger Outline Large", () => (
    <Button label="Do Something" type="danger" dangerOutline large />
  ))
  .add("Warning Outline Large", () => (
    <Button label="Do Something" type="warning" warningOutline large />
  ))
  .add("Default Floating Large", () => (
    <Button label="Do Something" type="primary" defaultFloating large />
  ))
  .add("Primary Floating Large", () => (
    <Button label="Do Something" type="primary" primaryFloating large />
  ))
  .add("Success Floating Large", () => (
    <Button label="Do Something" type="success" successFloating large />
  ))
  .add("Danger Floating Large", () => (
    <Button label="Do Something" type="danger" dangerFloating large />
  ))

  .add("Warning Floating Large", () => (
    <Button label="Do Something" type="warning" warningFloating large />
  ))

  .add("Heart Icon", () => <Button primaryFloating hearticon />)
  .add("Cart Icon", () => <Button primaryFloating carticon />);
