import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const BootSplash = () => {
  return (
    <div className="boot-splash">
      <Link className="div-3" to="/amalod">
        <div className="text-wrapper-22">NOTHING</div>

        <img
          className="splash-bootanimation"
          alt="Splash bootanimation"
          src="/img/splash-bootanimation-2.gif"
        />

        <img className="group-3" alt="Group" src="/img/group-34156-1.png" />

        <div className="group-wrapper">
          <img className="group-4" alt="Group" src="/img/group-76-1.png" />
        </div>
      </Link>
    </div>
  );
};
