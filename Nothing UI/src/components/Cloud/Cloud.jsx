/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Cloud = ({
  className,
  vector = "/img/vector-73-3.png",
  union = "/img/union-3.png",
}) => {
  return (
    <div className={`cloud ${className}`}>
      <div className="overlap-group">
        <img className="vector" alt="Vector" src={vector} />

        <img className="union" alt="Union" src={union} />
      </div>
    </div>
  );
};

Cloud.propTypes = {
  vector: PropTypes.string,
  union: PropTypes.string,
};
