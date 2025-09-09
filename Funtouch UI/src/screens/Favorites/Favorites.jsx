import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const Favorites = () => {
  const [dragStart, setDragStart] = useState(null);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    setDragStart(e.clientY);
  };

  const handleMouseUp = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.clientY;
      if (dragStart - dragEnd > 50) { // Threshold for upward drag
        navigate("/home");
      }
    }
    setDragStart(null);
  };

  // 🔹 Added for touch gesture
  const handleTouchStart = (e) => {
    setDragStart(e.touches[0].clientY);
  };

  // 🔹 Added for touch gesture
  const handleTouchEnd = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.changedTouches[0].clientY;
      if (dragStart - dragEnd > 50) { // Threshold for upward drag
        navigate("/home");
      }
    }
    setDragStart(null);
  };

  return (
    <div
      className="favorites"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="div-4">
        <div className="overlap-8">
          <img
            className="rectangle-17"
            alt="Rectangle"
            src="/img/rectangle-31.svg"
          />

          <Link className="contact-button" to="/contacts">
            <img className="image-4" alt="Image" src="/img/image-3-1.png" />
            <div className="text-wrapper-49">Contacts</div>
          </Link>

          <Link className="dial-button" to="/dial">
            <div className="overlap-group-4">
              <div className="text-wrapper-50">Dial</div>
              <img className="image-5" alt="Image" src="/img/image-5-1.png" />
            </div>
          </Link>

          <img className="star-2" alt="Star" src="/img/star-1-1.png" />
          <div className="text-wrapper-51">Favorites</div>
        </div>

        <div className="UI-bars-status-bars-2">
          <img className="wifi-2" alt="Wifi" src="/img/wifi.svg" />
          <img
            className="mobile-signal-2"
            alt="Mobile signal"
            src="/img/mobile-signal.svg"
          />
          <div className="overlap-9">
            <img
              className="charging-circle-2"
              alt="Charging circle"
              src="/img/charging-circle-1.png"
            />
            <div className="text-wrapper-52">87%</div>
          </div>
        </div>

        <div className="text-wrapper-53">Favorites</div>

        <img
          className="check-box-2"
          alt="Check box"
          src="/img/check-box-1.png"
        />

        <div className="text-wrapper-54">A</div>

        <div className="overlap-10">
          <div className="text-wrapper-55">C</div>
          <div className="rectangle-18" />
          <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-14.png" />
          <div className="text-wrapper-56">Charlie Jim</div>
          <img className="simcard-12" alt="Simcard" src="/img/simcard-2.png" />
        </div>

        <div className="overlap-11">
          <div className="text-wrapper-57">J</div>
          <div className="rectangle-19" />
          <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-15.png" />
          <div className="text-wrapper-58">Chad</div>
          <img className="simcard-13" alt="Simcard" src="/img/simcard-2.png" />
        </div>

        <div className="overlap-12">
          <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-13.png" />
          <div className="text-wrapper-58">AAkash</div>
          <img className="simcard-13" alt="Simcard" src="/img/simcard-2.png" />
        </div>

        <div className="overlap-13">
          <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-16.png" />
          <div className="text-wrapper-58">Jacob</div>
          <img className="simcard-13" alt="Simcard" src="/img/simcard-2.png" />
        </div>

        <div className="star-wrapper">
          <img className="star-3" alt="Star" src="/img/star-2.png" />
        </div>
      </div>
    </div>
  );
};
