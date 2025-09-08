/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const NavigationHome = ({
  className,
  hasLine = true,
  lineClassName,
}) => {
  return (
    <div className={`navigation-home ${className}`}>
      {hasLine && <div className={`line ${lineClassName}`} />}
    </div>
  );
};

NavigationHome.propTypes = {
  hasLine: PropTypes.bool,
};
