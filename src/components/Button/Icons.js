import React from "react";
const Icons = (props) => {
  let classList = "";
  //   let heartURL =
  //     "/Users/arjunrawal/sei/projects/Project-5-Arjun-s-Component-Library/src/components/Button/SVG.js";
  //   let cartURL =
  //     "/Users/arjunrawal/sei/projects/Project-5-Arjun-s-Component-Library/src/components/Button/cart_3.svg";

  if (props.hearticon) {
    classList += ` heart-icon`;
  }

  if (props.carticon) {
    classList += ` cart-icon`;
  }

  return <img className={classList}></img>;
};

export default Icons;

// style = {},
//   fill = "#000",
//   width = "100%",
//   className = "",
//   viewBox = "0 0 32 32",
// }) => (
//   <svg
//     width={width}
//     style={style}
//     height={width}
//     viewBox={viewBox}
//     xmlns="http://www.w3.org/2000/svg"
//     className={`svg-icon ${className || ""}`}
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//   >
//     <path fill={fill} d="some path here" fill="#000" />
//   </svg>
// );
