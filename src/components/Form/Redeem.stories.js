import React from "react";
import { storiesOf } from "@storybook/react";
import Redeem from "./Redeem";

storiesOf("Text Input with Button", module)
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
  ));
