import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const QuickBar = () => {
  const [dragStart, setDragStart] = useState(null);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    setDragStart(e.clientY);
  };

  const handleMouseUp = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.clientY;
      if (dragStart - dragEnd > 50) { // Swipe up
        navigate("/home");
      }
    }
    setDragStart(null);
  };
  return (
    <div
      className="quick-bar"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
    <div className="quick-bar">
      <div className="div-10">
        <div className="group-11">
          <div className="overlap-51">
            <div className="overlap-52">
              <div className="group-12">
                <div className="overlap-group-11">
                  <img
                    className="ellipse-17"
                    alt="Ellipse"
                    src="/img/ellipse-11-1.svg"
                  />

                  <img
                    className="ellipse-17"
                    alt="Ellipse"
                    src="/img/ellipse-10-1.svg"
                  />
                </div>
              </div>

              <div className="text-wrapper-112">88%</div>
            </div>

            <img className="vector-36" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="text-wrapper-113">Jio</div>

          <img className="vector-37" alt="Vector" src="/img/vector-36.svg" />

          <div className="text-wrapper-114">airtel</div>
        </div>

        <div className="text-wrapper-115">11:05</div>

        <div className="text-wrapper-116">Wed, Jul 23</div>

        <div className="group-13">
          <img className="vector-38" alt="Vector" src="/img/vector-38.svg" />

          <img className="vector-39" alt="Vector" src="/img/vector-39.svg" />
        </div>

        <img className="ellipse-18" alt="Ellipse" src="/img/ellipse-12-1.png" />

        <div className="group-14">
          <img className="vector-40" alt="Vector" src="/img/vector-40.svg" />

          <img className="vector-41" alt="Vector" src="/img/vector-41.svg" />

          <img className="vector-42" alt="Vector" src="/img/vector-41.svg" />
        </div>

        <div className="group-15">
          <div className="overlap-53">
            <img className="vector-43" alt="Vector" src="/img/vector-43.svg" />

            <div className="text-wrapper-117">4 apps are active</div>

            <img className="vector-44" alt="Vector" src="/img/vector-44.svg" />
          </div>
        </div>

        <img className="group-16" alt="Group" src="/img/group-12.png" />

        <img className="group-17" alt="Group" src="/img/group-44.png" />

        <div className="group-18">
          <div className="group-19">
            <div className="group-20">
              <div className="overlap-group-12">
                <div className="text-wrapper-118">A</div>
              </div>
            </div>
          </div>
        </div>

        <div className="group-21">
          <div className="overlap-54">
            <img className="vector-45" alt="Vector" src="/img/vector-45.svg" />

            <div className="text-wrapper-119">Wi-fi</div>

            <img className="vector-46" alt="Vector" src="/img/vector-47.svg" />
          </div>

          <div className="overlap-55">
            <img className="vector-47" alt="Vector" src="/img/vector-46.svg" />

            <div className="text-wrapper-120">Mobile data</div>

            <div className="text-wrapper-121">Off</div>

            <img className="vector-46" alt="Vector" src="/img/vector-47.svg" />
          </div>
        </div>

        <div className="group-22">
          <div className="div-11">
            <div className="div-11">
              <div className="ellipse-19" />

              <div className="ellipse-20" />

              <div className="ellipse-21" />

              <div className="ellipse-22" />
            </div>

            <img className="vector-48" alt="Vector" src="/img/vector-49.svg" />

            <img className="vector-49" alt="Vector" src="/img/vector-50.svg" />

            <img className="vector-50" alt="Vector" src="/img/vector-51.svg" />

            <img className="vector-51" alt="Vector" src="/img/vector-52.svg" />
          </div>

          <div className="text-wrapper-122">VoWifi</div>

          <div className="text-wrapper-123">Bluetooth</div>

          <img className="vector-52" alt="Vector" src="/img/vector-44.svg" />

          <div className="text-wrapper-124">Auto-rotate</div>

          <div className="text-wrapper-125">Flashlight</div>
        </div>

        <div className="navbar">
          <img className="group-23" alt="Group" src="/img/group-50.png" />

          <div className="text-wrapper-126">Vibration mode</div>

          <div className="text-wrapper-127">Airplane mode</div>

          <div className="text-wrapper-128">Hotspot</div>

          <div className="device-controls-home">
            Device controls
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Home
          </div>
        </div>

        <div className="group-24">
          <div className="div-11">
            <div className="div-11">
              <div className="ellipse-19" />

              <div className="ellipse-20" />

              <div className="ellipse-21" />

              <div className="ellipse-22" />
            </div>

            <img className="vector-53" alt="Vector" src="/img/vector-54.svg" />

            <img className="vector-54" alt="Vector" src="/img/vector-55.svg" />

            <div className="group-25">
              <div className="overlap-group-13">
                <img
                  className="vector-55"
                  alt="Vector"
                  src="/img/vector-57.svg"
                />

                <img
                  className="vector-56"
                  alt="Vector"
                  src="/img/vector-58.svg"
                />
              </div>
            </div>

            <img className="vector-57" alt="Vector" src="/img/vector-56.svg" />
          </div>

          <div className="text-wrapper-122">Wallet</div>

          <div className="super-screen-shot">
            Super screen-
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; shot
          </div>

          <div className="text-wrapper-129">link to windows</div>

          <div className="text-wrapper-130">Eye protection</div>
        </div>
      </div>
    </div>
    </div>
  );
};
