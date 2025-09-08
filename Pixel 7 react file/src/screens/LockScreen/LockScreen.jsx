import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LockScreen = () => {
  return (
    <div className="lock-screen">
      <Link className="div-9" to="/home-screen">
        <div className="text-wrapper-120">01 39</div>

        <div className="text-wrapper-121">WED JUN 7</div>

        <div className="group-71">
          <img className="vector-76" alt="Vector" src="/img/vector-88.svg" />
        </div>

        <div className="group-72">
          <img className="vector-77" alt="Vector" src="/img/vector-89.svg" />
        </div>

        <img className="group-73" alt="Group" src="/img/group-8.png" />
      </Link>
    </div>
  );
};
