import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const withSwipeToHome = (WrappedComponent) => {
  return (props) => {
    const [dragStart, setDragStart] = useState(null);
    const navigate = useNavigate();

    const handleMouseDown = (e) => {
      setDragStart(e.clientY);
    };

    const handleMouseUp = (e) => {
      if (dragStart !== null) {
        const dragEnd = e.clientY;
        if (dragStart - dragEnd > 50) {
          // Swipe up
          if (props.swipeUp === "appdrawer") {
            navigate("/app-drawer");
          } else {
            navigate("/home");
          }
        } else if (dragEnd - dragStart > 50) {
          // Swipe down
          if (props.swipeDown === "quickbar") {
            navigate("/quick-bar");
          } else {
            navigate("/home");
          }
        }
      }
      setDragStart(null);
    };

    return (
      <div 
        onMouseDown={handleMouseDown} 
        onMouseUp={handleMouseUp}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withSwipeToHome;