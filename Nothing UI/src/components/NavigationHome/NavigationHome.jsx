/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavigationHome = ({ className, lineClassName, to }) => {
  return (
    <Link className={`navigation-home ${className}`} to={to}>
      <div className={`line ${lineClassName}`} />
    </Link>
  );
};

NavigationHome.propTypes = {
  to: PropTypes.string,
};
