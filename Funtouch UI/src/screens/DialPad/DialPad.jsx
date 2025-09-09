import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const DialPad = () => {
  const [dragStart, setDragStart] = useState(null);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    setDragStart(e.clientY);
  };

  const handleMouseUp = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.clientY;
      if (dragStart - dragEnd > 50) {
        // Threshold for upward drag
        navigate("/home");
      }
    }
    setDragStart(null);
  };

  return (
    <div
      className="dial-pad"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="div-6">
        <div className="overlap-41">
          <div className="frame">
            {/* ------------- Dial Pad Buttons ------------- */}
            <div className="element-wrapper">
              <p className="element">
                <span className="text-wrapper-74">1<br /></span>
                <span className="text-wrapper-75">...</span>
              </p>
            </div>

            <div className="frame-2">
              <div className="text-wrapper-76">#</div>
            </div>

            <div className="frame-3">
              <p className="div-7">
                <span className="text-wrapper-74">0<br /></span>
                <span className="text-wrapper-75">&nbsp;&nbsp;+</span>
              </p>
            </div>

            <div className="frame-4">
              <div className="text-wrapper-77">*</div>
            </div>

            <div className="element-WXYZ-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">9<br /></span>
                <span className="text-wrapper-75">WXYZ</span>
              </p>
            </div>

            <div className="element-TUV-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">8<br /></span>
                <span className="text-wrapper-75">TUV</span>
              </p>
            </div>

            <div className="element-PQRS-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">7<br /></span>
                <span className="text-wrapper-75">PQRS</span>
              </p>
            </div>

            <div className="element-MNO-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">6<br /></span>
                <span className="text-wrapper-75">MNO</span>
              </p>
            </div>

            <div className="element-JKLT-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">5<br /></span>
                <span className="text-wrapper-75">JKLT</span>
              </p>
            </div>

            <div className="element-GHI-wrapper">
              <p className="div-8">
                <span className="text-wrapper-74">4<br /></span>
                <span className="text-wrapper-75">GHI</span>
              </p>
            </div>

            <div className="element-DEF-wrapper">
              <p className="div-7">
                <span className="text-wrapper-74">3<br /></span>
                <span className="text-wrapper-75">DEF</span>
              </p>
            </div>

            <div className="element-ABC-wrapper">
              <p className="div-7">
                <span className="text-wrapper-74">2<br /></span>
                <span className="text-wrapper-75">ABC</span>
              </p>
            </div>

            {/* Delete & Menu */}
            <img className="delete" alt="Delete" src="/img/delete-1.png" />
            <img className="menu" alt="Menu" src="/img/menu-1.png" />

            {/* SIM Buttons */}
            <div className="overlap-42">
              <div className="text-wrapper-78">SIM 1</div>
              <div className="text-wrapper-79">1</div>
            </div>
            <div className="overlap-group-8">
              <div className="text-wrapper-80">SIM 2</div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <Link className="contact-button-2" to="/contacts">
            <img className="image-6" alt="Contacts" src="/img/image-3-2.png" />
            <div className="text-wrapper-81">Contacts</div>
          </Link>

          <Link className="dial-button-2" to="/dial">
            <div className="overlap-43">
              <div className="text-wrapper-82">Dial</div>
              <img className="image-7" alt="Dial" src="/img/image-5.png" />
            </div>
          </Link>

          <Link className="fav-button-2" to="/favorites">
            <img className="star-4" alt="Favorites" src="/img/star-1.png" />
            <div className="text-wrapper-83">Favorites</div>
          </Link>
        </div>

        {/* Status Bar */}
        <div className="UI-bars-status-bars-3">
          <img className="wifi-3" alt="Wifi" src="/img/wifi.svg" />
          <img className="mobile-signal-3" alt="Mobile signal" src="/img/mobile-signal.svg" />
          <div className="overlap-44">
            <img className="charging-circle-3" alt="Charging circle" src="/img/charging-circle-1.png" />
            <div className="text-wrapper-85">87%</div>
          </div>
        </div>

        {/* Header */}
        <div className="text-wrapper-86">Dial</div>
        <img className="check-box-3" alt="Check box" src="/img/check-box-1.png" />
        <img className="image-10" alt="Profile" src="/img/image-4.png" />

        {/* Recent Calls (example layout kept as you had it) */}
        <div className="overlap-45">
          <div className="rectangle-30" />
          <p className="jacob-2">
            <span className="text-wrapper-87">Jacob<br /></span>
            <span className="text-wrapper-88">&nbsp;&nbsp; +9190191827263</span>
          </p>
          <img className="simcard-14" alt="Simcard" src="/img/simcard-2.png" />
          <img className="phone-5" alt="Phone" src="/img/phone-1.png" />
          <div className="text-wrapper-89">11:04 AM</div>
          <img className="information-12" alt="Info" src="/img/information-1.png" />
        </div>
      </div>
    </div>
  );
};
