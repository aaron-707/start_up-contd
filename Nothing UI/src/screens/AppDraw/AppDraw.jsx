import React, { useRef } from "react";
import { FiRrBroom } from "../../components/FiRrBroom";
import { NavigationHome } from "../../components/NavigationHome";
import { withSwipeNavigate } from "../../components/withSwipeNavigate/withSwipeNavigate";
import { useNavigate } from "react-router-dom";
import "./style.css";

function AppDrawInner() {
  const navigate = useNavigate();

  // small swipe detector
  const startRef = useRef({ x: 0, y: 0, t: 0 });
  const THRESHOLD = 60; // minimum vertical px to consider a swipe
  const RESTRAINT = 100; // max horizontal movement allowed
  const ALLOWED_TIME = 700; // max time (ms) for the gesture

  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    const t = e.touches[0];
    startRef.current = { x: t.clientX, y: t.clientY, t: Date.now() };
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches && e.changedTouches[0];
    if (!touch) return;
    const distX = touch.clientX - startRef.current.x;
    const distY = touch.clientY - startRef.current.y;
    const elapsed = Date.now() - startRef.current.t;

    if (
      elapsed <= ALLOWED_TIME &&
      Math.abs(distY) >= THRESHOLD &&
      Math.abs(distX) <= RESTRAINT
    ) {
      if (distY > 0) {
        // swipe down detected
        navigate("/home-screens"); // change target if you want a different route
      } else {
        // swipe up (optional)
      }
    }
  };

  // pointer handlers for desktop / trackpad drag
  const handlePointerDown = (e) => {
    startRef.current = { x: e.clientX, y: e.clientY, t: Date.now() };
  };

  const handlePointerUp = (e) => {
    const distX = e.clientX - startRef.current.x;
    const distY = e.clientY - startRef.current.y;
    const elapsed = Date.now() - startRef.current.t;
    if (
      elapsed <= ALLOWED_TIME &&
      Math.abs(distY) >= THRESHOLD &&
      Math.abs(distX) <= RESTRAINT
    ) {
      if (distY > 0) {
        navigate("/home-screens");
      }
    }
  };

  return (
    <div
      className="app-draw"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
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
}

export const AppDraw = withSwipeNavigate(AppDrawInner);
