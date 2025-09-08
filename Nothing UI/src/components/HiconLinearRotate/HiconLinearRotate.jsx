/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const HiconLinearRotate = ({
  className,
  hiconLinearRotate = "/img/hicon-linear-rotate-right-2.png",
}) => {
  return (
    <img
      className={`hicon-linear-rotate ${className}`}
      alt="Hicon linear rotate"
      src={hiconLinearRotate}
    />
  );
};

HiconLinearRotate.propTypes = {
  hiconLinearRotate: PropTypes.string,
};
