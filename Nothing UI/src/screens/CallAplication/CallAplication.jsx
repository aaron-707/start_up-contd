import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import { SwipeableWrapper } from "../../components/SwipeableWrapper";
import "./style.css";

export const CallAplication = () => {
  return (
    <SwipeableWrapper swipeDown={{ to: "/quick-setting" }}
    swipeUp={{ to: "/home-screens" }}>
      <div className="call-aplication">
        <div className="div-10">
          <Link to="/home-screens">
            <img className="image-8" alt="Image" src="/img/image-3-1.png" />
          </Link>
          <img className="image-9" alt="Image" src="/img/image-4-1.png" />
          <Link className="text-wrapper-57" to="/contacts">
            CONTACTS
          </Link>
          <div className="overlap-26">
            <div className="rectangle-18" />
            <div className="rectangle-19" />
            <img className="ellipse-9" alt="Ellipse" src="/img/ellipse-4-3.png" />
            <img
              className="ellipse-10"
              alt="Ellipse"
              src="/img/ellipse-4-3.png"
            />
            <div className="alan-turing">
              Alan Turing
              <br />
              +91 9089898989
            </div>
            <div className="alan-turing-2">
              Alan Turing
              <br />
              +91 9089898989
            </div>
            <img className="image-10" alt="Image" src="/img/image-7-1.png" />
            <img className="image-11" alt="Image" src="/img/image-7-1.png" />
            <div className="frame-2">
              <div className="element-wrapper">
                <p className="element">
                  <span className="text-wrapper-58">
                    1<br />
                  </span>
                  <span className="text-wrapper-59">...</span>
                </p>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-60">#</div>
              </div>
              <div className="frame-4">
                <div className="text-wrapper-61">0</div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-62">*</div>
              </div>
              <div className="element-wxyz-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    9<br />
                  </span>
                  <span className="text-wrapper-59">wxyz</span>
                </p>
              </div>
              <div className="element-tuv-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    8<br />
                  </span>
                  <span className="text-wrapper-59">tuv</span>
                </p>
              </div>
              <div className="element-pqrs-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    7<br />
                  </span>
                  <span className="text-wrapper-59">pqrs</span>
                </p>
              </div>
              <div className="element-mno-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    6<br />
                  </span>
                  <span className="text-wrapper-59">mno</span>
                </p>
              </div>
              <div className="element-jkl-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    5<br />
                  </span>
                  <span className="text-wrapper-59">jkl</span>
                </p>
              </div>
              <div className="element-ghi-wrapper">
                <p className="div-11">
                  <span className="text-wrapper-58">
                    4<br />
                  </span>
                  <span className="text-wrapper-59">ghi</span>
                </p>
              </div>
              <div className="element-def-wrapper">
                <p className="div-12">
                  <span className="text-wrapper-58">
                    3<br />
                  </span>
                  <span className="text-wrapper-59">def</span>
                </p>
              </div>
              <div className="element-abc-wrapper">
                <p className="div-12">
                  <span className="text-wrapper-58">
                    2<br />
                  </span>
                  <span className="text-wrapper-59">abc</span>
                </p>
              </div>
              <div className="img-wrapper">
                <img className="image-12" alt="Image" src="/img/image-6-5.png" />
              </div>
              <img className="delete" alt="Delete" src="/img/delete-1-1.png" />
            </div>
          </div>
          <div className="group-34">
            <img
              className="ellipse-11"
              alt="Ellipse"
              src="/img/ellipse-4-3.png"
            />
            <div className="alan-turing-3">
              Alan Turing
              <br />
              +91 9089898989
            </div>
            <img className="image-13" alt="Image" src="/img/image-7-1.png" />
          </div>
          <div className="group-35">
            <img
              className="ellipse-11"
              alt="Ellipse"
              src="/img/ellipse-3-3.png"
            />
            <div className="michael-townley">
              Michael Townley
              <br />
              +91 9089898989
            </div>
            <img className="image-13" alt="Image" src="/img/image-7-1.png" />
          </div>
          <img
            className="UI-bars-status-bars-2"
            alt="Ui bars status bars"
            src="/img/ui-bars-status-bars-black-base-3.png"
          />
          <div className="navigation-home-wrapper">
            <NavigationHome
              className="navigation-home-10"
              lineClassName="navigation-home-11"
              to="/home-screens" 
            />
          </div>
        </div>
      </div>
    </SwipeableWrapper>
  );
};