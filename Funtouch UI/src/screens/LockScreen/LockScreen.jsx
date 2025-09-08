import React from "react";
import "./style.css";

export const LockScreen = () => {
  return (
    <div className="lock-screen">
      <div className="overlap-group-wrapper-2">
        <div className="overlap-group-10">
          <div className="ellipse-wrapper">
            <img
              className="ellipse-16"
              alt="Ellipse"
              src="/img/ellipse-1.svg"
            />
          </div>

          <div className="overlap-50">
            <div className="text-wrapper-110">Wed, Jul 23</div>

            <div className="text-wrapper-111">11:09</div>
          </div>

          <img className="phone-6" alt="Phone" src="/img/phone.png" />

          <img className="unsplash" alt="Unsplash" src="/img/unsplash.png" />

          <img className="lock" alt="Lock" src="/img/lock.png" />
        </div>
      </div>
    </div>
  );
};
