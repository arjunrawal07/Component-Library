import React from "react";
import "./Products.css";

const Products = (props) => {
  let productName = "";
  let products = [
    "Apple Macbook Pro",
    "Beats Solo 2 On Ear Headphones - Black",
  ];
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
  if (props.gray) {
    classList += ` products-gray`;
  }
  if (props.optionsLight) {
    classList += ` products-optionsLight`;
    return (
      <div className={classList}>
        <div className={imgClass}>
          <div className="options">
            <div className="heart"></div>
            <div className="cart"></div>
          </div>
        </div>
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
  }

  if (props.horizontal) {
    classList += ` products-horizontal`;
    return (
      <div className={classList}>
        <div className={imgClass}></div>
        <div className="horizontalText">
          <h4>{productName}</h4>
          <div className="rating">
            <p>Rating</p>
          </div>
          <div className="costs">
            <div className="pricetag">{pricetag} </div>
            <div className="oldPrice"> {oldPrices}</div>
          </div>
        </div>
      </div>
    );
  }

  if (props.horizontalHover) {
    classList += ` products-horizontalHover`;
  }

  if (props.defaultBeats) {
    classList += ` products-defaultBeats`;
  }

  if (props.defaultBeatsImg) {
    imgClass += ` products-defaultBeatsImg`;
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
