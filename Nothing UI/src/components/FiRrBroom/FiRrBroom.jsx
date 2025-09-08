/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FiRrBroom = ({
  className,
  fiRrBroom = "/img/fi-rr-broom-2.png",
}) => {
  return (
    <img
      className={`fi-rr-broom ${className}`}
      alt="Fi rr broom"
      src={fiRrBroom}
    />
  );
};

FiRrBroom.propTypes = {
  fiRrBroom: PropTypes.string,
};
