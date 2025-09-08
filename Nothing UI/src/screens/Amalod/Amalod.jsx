import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Amalod = () => {
  return (
    <div className="amalod">
      <Link className="div-6" to="/lock-screen">
        <div className="div-wrapper">
          <div className="overlap-group-5">
            <div className="text-wrapper-28">22</div>

            <div className="text-wrapper-29">:</div>

            <div className="text-wrapper-30">56</div>
          </div>
        </div>

        <div className="mon-may-2">MON,2 MAY,2022</div>

        <div className="ray-2">RAY</div>

        <p className="p">
          MEET UP WITH RAY
          <br />
          23:10 - 23:40
        </p>

        <NavigationHome
          className="navigation-home-4"
          lineClassName="navigation-home-5"
        />
      </Link>
    </div>
  );
};
