import React from "react";
import { HomeHomeAltFill } from "../../components/HomeHomeAltFill";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const LockScreen = () => {
  return (
    <div className="lock-screen">
      <div className="div-5">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-4">
            <div className="text-wrapper-23">22</div>

            <div className="text-wrapper-24">:</div>

            <div className="text-wrapper-25">56</div>
          </div>
        </div>

        <div className="mon-may">MON,2 MAY,2022</div>

        <div className="ray">RAY</div>

        <div className="group-6">
          <div className="text-wrapper-26">25%</div>

          <img
            className="mask-group"
            alt="Mask group"
            src="/img/mask-group-8.png"
          />
        </div>

        <img
          className="mask-group-2"
          alt="Mask group"
          src="/img/mask-group-7.png"
        />

        <p className="meet-up-with-ray">
          MEET UP WITH RAY
          <br />
          23:10 - 23:40
        </p>

        <div className="group-7">
          <img className="cloud-2" alt="Cloud" src="/img/cloud.png" />

          <div className="group-8">
            <div className="text-wrapper-27">12</div>

            <div className="c">C</div>

            <div className="o">O</div>
          </div>
        </div>

        <img className="group-9" alt="Group" src="/img/group-34166-1.png" />

        <div className="home-home-alt-fill-wrapper">
          <HomeHomeAltFill />
        </div>

        <NavigationHome
          className="navigation-home-2"
          lineClassName="navigation-home-3"
        />
      </div>
    </div>
  );
};
