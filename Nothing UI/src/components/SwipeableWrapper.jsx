import React from "react";
import { useDrag } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";

export const SwipeableWrapper = ({ swipeUp, swipeDown, children }) => {
  const navigate = useNavigate();

  const bind = useDrag(({ swipe: [swipeX, swipeY] }) => {
    if (swipeY === -1) { // Swiped up
      if (swipeUp) {
        navigate(swipeUp.to, { state: swipeUp.state });
      }
    }
    if (swipeY === 1) { // Swiped down
      if (swipeDown) {
        navigate(swipeDown.to, { state: swipeDown.state });
      }
    }
  });

  return <div {...bind()}>{children}</div>;
};