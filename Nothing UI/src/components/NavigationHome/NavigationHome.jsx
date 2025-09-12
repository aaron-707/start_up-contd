import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const NavigationHome = ({ className, lineClassName, to = "/home-screens" }) => {
  return (
    <Link className={`navigation-home ${className}`} to={to}>
      <div className={`line ${lineClassName}`} />
    </Link>
  );
};

NavigationHome.propTypes = {
  className: PropTypes.string,
  lineClassName: PropTypes.string,
  to: PropTypes.string,
};