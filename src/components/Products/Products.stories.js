import React from "react";
import { storiesOf } from "@storybook/react";

import Products from "./Products";

storiesOf("Products", module)
  .add("Vertical Macbook Pro Default Options Light", () => (
    <div>
      <Products
        product="Apple Macbook Pro"
        price="$499"
        original="$599"
        defaultMac
        defaultMacImg
        optionsLight
      />
    </div>
  ))

  .add("Vertical Macbook Pro Default Gray", () => (
    <div>
      <Products
        product="Apple Macbook Pro"
        price="$499"
        original="$599"
        defaultMac
        defaultMacImg
        optionsLightBlue
        gray
      />
    </div>
  ))
  .add("Horizontal Macbook Pro Default", () => (
    <div>
      <Products
        product="Apple Macbook Pro"
        price="$499"
        original="$599"
        horizontal
        horizontalMac
        defaultMac
      />
    </div>
  ))
  .add("Beats Default", () => (
    <div>
      <Products
        product="Beats Solo 2 On Ear
        Headphones - Black"
        price="$499"
        original="$599"
        defaultBeats
      />
    </div>
  ))
  .add("Bonus Product", () => (
    <div>
      <Products
        product="Beats Solo2 On Ear Headphones - Black"
        price="$499"
        original="$599"
        inline
        addCart
        hearticon
      />
    </div>
  ));
