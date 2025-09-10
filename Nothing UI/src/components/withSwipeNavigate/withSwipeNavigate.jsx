import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const withSwipeNavigate = (WrappedComponent, options = {}) => {
  return (props) => {
    const navigate = useNavigate();
    const [touchStart, setTouchStart] = useState(0);
    const { onSwipeUp, onSwipeDown } = options;

    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = (e) => {
      const touchEnd = e.changedTouches[0].clientY;
      const distance = touchStart - touchEnd;

      // Swipe Up: if the touch end position is significantly higher than the start
      if (distance > 100 && onSwipeUp) {
        navigate(onSwipeUp);
      }
      // Swipe Down: if the touch end position is significantly lower than the start
      else if (distance < -100 && onSwipeDown) {
        navigate(onSwipeDown);
      }
    };

    return (
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};