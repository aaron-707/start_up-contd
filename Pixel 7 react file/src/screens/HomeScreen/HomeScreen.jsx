import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="div-10">
        <Link className="group-74" to="/home-screens">
          <div className="text-wrapper-122">90%</div>

          <img className="vector-78" alt="Vector" src="/img/vector-30.svg" />

          <img className="vector-79" alt="Vector" src="/img/vector-31.svg" />
        </Link>

        <Link className="group-75" to="/app-draw">
          <div className="flat-color-icons">
            <div className="overlap-group-16">
              <img
                className="vector-80"
                alt="Vector"
                src="/img/vector-94.svg"
              />

              <div className="overlap-61">
                <img
                  className="vector-81"
                  alt="Vector"
                  src="/img/vector-95.svg"
                />

                <img
                  className="vector-82"
                  alt="Vector"
                  src="/img/vector-96.svg"
                />
              </div>
            </div>
          </div>

          <img className="vector-83" alt="Vector" src="/img/vector-92.svg" />

          <div className="ri-camera-fill">
            <img className="vector-84" alt="Vector" src="/img/vector-97.svg" />
          </div>
        </Link>

        <div className="group-76">
          <div className="ellipse-10" />

          <div className="overlap-62">
            <div className="ellipse-11" />

            <Link className="ic-baseline-phone" to="/dialpad">
              <img
                className="vector-85"
                alt="Vector"
                src="/img/vector-101.svg"
              />
            </Link>
          </div>

          <div className="overlap-63">
            <img className="vector-86" alt="Vector" src="/img/vector-100.svg" />
          </div>

          <div className="overlap-64">
            <Link className="ellipse-12" to="/photos" />

            <div className="group-77">
              <div className="overlap-group-17">
                <img
                  className="vector-87"
                  alt="Vector"
                  src="/img/vector-102.svg"
                />

                <img
                  className="vector-88"
                  alt="Vector"
                  src="/img/vector-103.svg"
                />
              </div>
            </div>
          </div>

          <div className="overlap-65">
            <Link className="ellipse-12" to="/settings" />

            <img className="vector-89" alt="Vector" src="/img/vector-99.svg" />
          </div>

          <div className="overlap-66">
            <Link className="ellipse-12" to="/message-application" />

            <img className="vector-90" alt="Vector" src="/img/vector-98.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
