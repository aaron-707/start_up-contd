import React from "react";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const AppDraw = () => {
  return (
    <div className="app-draw">
      <div className="div-4">
        <div className="google">
          <img className="google-2" alt="Google" src="/img/google-1.png" />

          <img className="image-3" alt="Image" src="/img/image-1-1.png" />

          <img className="image-4" alt="Image" src="/img/image-2-1.png" />
        </div>

        <div className="phone-wrapper">
          <img className="phone" alt="Phone" src="/img/phone-1.png" />
        </div>

        <div className="speech-bubble-wrapper">
          <img
            className="speech-bubble"
            alt="Speech bubble"
            src="/img/speech-bubble-1.png"
          />
        </div>

        <div className="chrome-wrapper">
          <img className="chrome" alt="Chrome" src="/img/chrome-1.png" />
        </div>

        <div className="compact-camera-wrapper">
          <img
            className="compact-camera"
            alt="Compact camera"
            src="/img/compact-camera-1.png"
          />
        </div>

        <div className="information-wrapper">
          <img
            className="information"
            alt="Information"
            src="/img/information-1.png"
          />
        </div>

        <div className="image-wrapper">
          <img className="image-5" alt="Image" src="/img/image-6-4.png" />
        </div>

        <div className="wikipedia-wrapper">
          <img
            className="wikipedia"
            alt="Wikipedia"
            src="/img/wikipedia-1.png"
          />
        </div>

        <div className="women-s-watch-wrapper">
          <img
            className="women-s-watch"
            alt="Women s watch"
            src="/img/women-s-watch-1.png"
          />
        </div>

        <img className="group-5" alt="Group" src="/img/group-34154-5.png" />

        <NavigationHome
          className="navigation-home-indicator-instance"
          lineClassName="design-component-instance-node"
          to="/home-screens"
        />
      </div>
    </div>
  );
};
