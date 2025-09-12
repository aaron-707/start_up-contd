import React from "react";
import { useDrag } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";

export const SwipeableWrapper = ({ swipeUp, swipeDown, children }) => {
  const navigate = useNavigate();

  const bind = useDrag(
    ({ swipe: [swipeX, swipeY], velocity: [vx, vy], direction: [dx, dy] }) => {
      // More precise swipe detection
      if (swipeY !== 0) { // Only consider vertical swipes
        if (swipeY === -1 && dy === -1) { // Swiped up
          if (swipeUp) {
            navigate(swipeUp.to, { state: swipeUp.state });
          }
        }
        if (swipeY === 1 && dy === 1) { // Swiped down
          if (swipeDown) {
            navigate(swipeDown.to, { state: swipeDown.state });
          }
        }
      }
    },
    {
      // Configuration to fine-tune swipe detection
      swipe: {
        duration: 200, // Maximum duration of the swipe
        distance: 50, // Minimum distance of the swipe
        velocity: 0.5, // Minimum velocity of the swipe
      },
    }
  );

  // Apply the `touch-action` style to prevent browser interference
  return (
    <div {...bind()} style={{ touchAction: "none" }}>
      {children}
    </div>
  );
};