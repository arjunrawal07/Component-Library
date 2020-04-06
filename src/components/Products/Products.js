import React from "react";
import "./Products.css";

const Products = (props) => {
  let productName = "";
  let products = ["Apple Macbook Pro"];
  let classList = "";
  let imgClass = "";
  let pricetag = "";
  let prices = ["$499"];

  if (props.defaultMac) {
    classList += ` products-defaultMac`;
  }

  if (products.includes(props.product)) {
    productName += ` ${props.product}`;
  }

  if (prices.includes(props.price)) {
    pricetag += ` ${props.price}`;
  }

  if (props.defaultMacImg) {
    imgClass += ` products-defaultMacImg`;
  }
  return (
    <div className={classList}>
      <div className={imgClass}></div>
      <h4>{productName}</h4>
      <div className="rating">
        <p>Rating</p>
      </div>
      <h5>{pricetag}</h5>
    </div>
  );
};

export default Products;
