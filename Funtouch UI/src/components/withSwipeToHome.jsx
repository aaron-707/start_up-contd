
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSwipe } from "@use-gesture/react";
import { animated } from "@react-spring/web";

const withSwipeToHome = (WrappedComponent) => {
  const ComponentWithSwipe = (props) => {
    const navigate = useNavigate();
    const bind = useSwipe(({ down, movement: [, my], velocity: [, vy] }) => {
      if (!down && my < -50 && vy > 0.5) {
        navigate("/home");
      }
    });

    return (
      <animated.div {...bind()} style={{ touchAction: "pan-y", height: "100%" }}>
        <WrappedComponent {...props} />
      </animated.div>
    );
  };
  return ComponentWithSwipe;
};

export default withSwipeToHome;
