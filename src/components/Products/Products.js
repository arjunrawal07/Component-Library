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
          <div className="options"></div>
        </div>
        <h4>{productName}</h4>
        <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div className="costs">
          <div className="pricetag">{pricetag} </div>
          <div className="oldPrice"> {oldPrices}</div>
        </div>
      </div>
    );
  }
  if (props.optionsLightBlue) {
    classList += ` products-optionsLightBlue`;
    return (
      <div className={classList}>
        <div className={imgClass}>
          <div className="options"></div>
        </div>
        <h4>{productName}</h4>
        <div className="rating">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
        <div className="costs">
          <div className="pricetag">{pricetag} </div>
          <div className="oldPrice"> {oldPrices}</div>
        </div>
      </div>
    );
  }
  if (props.horizontalMac) {
    imgClass += "products-horizontalMac";
  }
  if (props.horizontal) {
    classList += ` products-horizontal`;
    return (
      <div className={classList}>
        <div className={imgClass}></div>
        <div className="horizontalText">
          <div className="horizontalProductName">{productName}</div>
          <div className="ratingHorizontal">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <div className="costsHorizontal">
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
    return (
      <div className={classList}>
        <div className="beats">{productName}</div>
        <div className="ratingBeats">
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>{" "}
        <div className="costsBeats">
          <div className="pricetag">{pricetag} </div>
          <div className="oldPrice"> {oldPrices}</div>
        </div>
      </div>
    );
  }
  if (props.addCart) {
    classList += ` add-cart`;
  }
  if (props.hearticon) {
    imgClass += ` heart-icon`;
  }
  if (props.inline) {
    classList += "products-inline";
    return (
      <div className="beatsPic">
        <div className="name"> Beats Solo2 On Ear Headphones - Black</div>
        <div className="hot">HOT</div>
        <div className="beats">{productName}</div>
        <div className="stats">
          <div className="ratingBonus">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>{" "}
          <div className="reviews">0 reviews</div>
          <div className="submitReview">
            <span className="link">
              {" "}
              <a href="">Sumbit a Review</a>
            </span>
          </div>
        </div>
        <div className="costsBonusBeats">
          <div className="pricetagBonus">{pricetag} </div>
          <div className="oldPriceBonus"> {oldPrices}</div>
        </div>
        <div className="description">
          <p>
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et
            mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc
            leifend laorevtr istique et congue. Vivamus adipiscin vulputate g
            nisl ut dolor ...
          </p>
        </div>
        <div className="icons">
          <button className="add-cart"> Add to Cart</button>
          <button className="heart-icon"></button>
        </div>
      </div>
    );
  }

  return (
    <div className={classList}>
      <h4>{productName}</h4>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>{" "}
      <div className="costs">
        <div className="pricetag">{pricetag} </div>
        <div className="oldPrice"> {oldPrices}</div>
      </div>
    </div>
  );
};

export default Products;
