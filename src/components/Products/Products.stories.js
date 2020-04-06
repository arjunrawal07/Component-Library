import React from "react";
import { storiesOf } from "@storybook/react";

import Products from "./Products";

storiesOf("Products", module).add("Vertical Macbook Pro Default", () => (
  <div>
    <Products product="Apple Macbook Pro" price="$499" defaultMac defaultMacImg/>
  </div>
));
