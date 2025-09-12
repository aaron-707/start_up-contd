import React from "react";
import { SwipeableWrapper } from "../../components/SwipeableWrapper.jsx";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Photos = () => {
  return (
    <SwipeableWrapper swipeDown={{ to: "/quick-setting" }} swipeUp={{ to: "/home-screens" }}>

      <div className="photos">
        <div className="div-2">
          <div className="overlap-8">
            <div className="text-wrapper-16">ALBUMS</div>

            <img className="group-2" alt="Group" src="/img/group-34154-5.png" />
          </div>

          <div className="overlap-9">
            <div className="text-wrapper-17">FAVORITES</div>

            <img className="image" alt="Image" src="/img/image-10-1.png" />
          </div>

          <div className="overlap-10">
            <div className="overlap-11">
              <div className="polygon-wrapper">
                <img
                  className="polygon"
                  alt="Polygon"
                  src="/img/polygon-1-1.png"
                />
              </div>

              <div className="overlap-12">
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src="/img/rectangle-29-1.png"
                />

                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="/img/rectangle-30-1.png"
                />
              </div>
            </div>

            <div className="text-wrapper-18">VIDEOS</div>
          </div>

          <img
            className="rectangle-5"
            alt="Rectangle"
            src="/img/rectangle-19-1.png"
          />

          <img
            className="rectangle-6"
            alt="Rectangle"
            src="/img/rectangle-20-1.png"
          />

          <div className="overlap-group-3">
            <img
              className="rectangle-7"
              alt="Rectangle"
              src="/img/rectangle-21-1.png"
            />

            <div className="text-wrapper-19">DOWNLOAD (7)</div>
          </div>

          <div className="overlap-13">
            <img
              className="rectangle-7"
              alt="Rectangle"
              src="/img/rectangle-22-1.png"
            />

            <div className="text-wrapper-19">NATURE (3)</div>
          </div>

          <div className="overlap-14">
            <img
              className="rectangle-8"
              alt="Rectangle"
              src="/img/rectangle-23-1.png"
            />

            <div className="text-wrapper-19">NOTHING (2)</div>
          </div>

          <div className="overlap-15">
            <img
              className="rectangle-9"
              alt="Rectangle"
              src="/img/rectangle-24-1.png"
            />

            <div className="text-wrapper-19">SCREENSHOTS (117)</div>
          </div>

          <div className="text-wrapper-20">TIMELINE</div>

          <img className="image-2" alt="Image" src="/img/image-9-1.png" />

          <div className="text-wrapper-21">ALBUMS</div>

          <NavigationHome
            className="navigation-home-indicator"
            lineClassName="navigation-home-instance"
            to="/home-screens"
          />
        </div>
      </div>
    </SwipeableWrapper>
  );
};
