import React from "react";
import "./Products.css";

const Products = (props) => {
  let productName = "";
  let products = ["Apple Macbook Pro"];
  let classList = "";
  let imgClass = "";
  let pricetag = "";
  let originalPrice = "";
  let oldPrices = ["$599"];
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

  if (oldPrices.includes(props.original)) {
    originalPrice += ` ${props.original}`;
  }

  if (props.lighten) {
    classList += `products-lighten`;
  }
  return (
    <div className={classList}>
      <div className={imgClass}></div>
      <h4>{productName}</h4>
      <div className="rating">
        <p>Rating</p>
      </div>
      <div className="costs">
        <div className="pricetag">{pricetag} </div>
        <div className="oldPrice"> {oldPrices}</div>
      </div>
    </div>
  );
};

export default Products;
