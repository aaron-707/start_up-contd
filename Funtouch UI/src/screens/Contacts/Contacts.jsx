import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const Contacts = () => {
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

  const handleTouchStart = (e) => {
    setDragStart(e.touches[0].clientY);
  };

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
      className="contacts"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="div-9">
        <div className="UI-bars-status-bars-4">
          <img className="wifi-4" alt="Wifi" src="/img/wifi.svg" />

          <img
            className="mobile-signal-4"
            alt="Mobile signal"
            src="/img/mobile-signal.svg"
          />

          <div className="overlap-group-9">
            <img
              className="charging-circle-4"
              alt="Charging circle"
              src="/img/charging-circle-1.png"
            />

            <div className="text-wrapper-94">87%</div>
          </div>
        </div>

        <div className="overlap-48">
          <div className="rectangle-33" />

          <img className="image-11" alt="Image" src="/img/image-3-3.png" />

          <img
            className="rectangle-34"
            alt="Rectangle"
            src="/img/rectangle-31.svg"
          />

          <div className="text-wrapper-95">Contacts</div>

          <Link className="dial-button-3" to="/dial">
            <div className="overlap-49">
              <div className="text-wrapper-96">Dial</div>

              <img className="image-12" alt="Image" src="/img/image-5-2.png" />
            </div>
          </Link>

          <Link className="fav-button-3" to="/favorites">
            <img className="star-5" alt="Star" src="/img/star-1.png" />

            <div className="text-wrapper-97">Favorites</div>
          </Link>

          <div className="text-wrapper-98">C</div>

          <div className="text-wrapper-99">J</div>

          <div className="rectangle-35" />

          <img className="ellipse-8" alt="Ellipse" src="/img/ellipse-13.png" />

          <div className="text-wrapper-100">AAkash</div>

          <img className="simcard-18" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-36" />

          <img className="ellipse-9" alt="Ellipse" />

          <div className="text-wrapper-101">Charlie Jim</div>

          <img className="simcard-19" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-37" />

          <img className="ellipse-10" alt="Ellipse" src="/img/ellipse-15.png" />

          <div className="text-wrapper-102">Chad</div>

          <img className="simcard-20" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-38" />

          <img className="ellipse-11" alt="Ellipse" src="/img/ellipse-16.png" />

          <div className="text-wrapper-103">Jacob</div>

          <img className="simcard-21" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-39" />

          <img className="ellipse-12" alt="Ellipse" src="/img/ellipse-17.png" />

          <div className="text-wrapper-104">Jessy</div>

          <img className="simcard-22" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-40" />

          <img className="ellipse-13" alt="Ellipse" src="/img/ellipse-18.png" />

          <div className="text-wrapper-105">Jack</div>

          <img className="simcard-23" alt="Simcard" src="/img/simcard-2.png" />

          <div className="rectangle-41" />

          <img className="ellipse-14" alt="Ellipse" src="/img/ellipse-19.png" />

          <div className="text-wrapper-106">Jerom</div>

          <img className="simcard-24" alt="Simcard" src="/img/simcard-2.png" />

          <div className="a-b-c-d-e-f-g-h-i-j">
            A<br />B<br />C<br />D<br />E<br />F<br />G<br />H<br /> I<br />J
            <br />K<br /> L<br />M<br />N<br />O<br />P<br />Q<br />R<br />S
            <br />T<br />U<br />V<br />W<br />X<br />Y<br />Z<br />#
          </div>

          <div className="rectangle-42" />

          <img className="dots" alt="Dots" src="/img/dots-3.png" />

          <img className="image-13" alt="Image" src="/img/image-6-1.png" />

          <div className="ellipse-15" />

          <div className="text-wrapper-107">+</div>
        </div>

        <img
          className="check-box-4"
          alt="Check box"
          src="/img/check-box-1.png"
        />

        <div className="text-wrapper-108">A</div>

        <div className="text-wrapper-109">Contacts</div>

        <img
          className="magnifying-glass"
          alt="Magnifying glass"
          src="/img/magnifying-glass-1.png"
        />

        <img className="dots-2" alt="Dots" src="/img/dots-1.png" />
      </div>
    </div>
  );
};
