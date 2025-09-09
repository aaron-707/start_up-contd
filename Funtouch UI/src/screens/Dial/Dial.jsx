import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const Dial = () => {
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

  return (
    <div className="dial" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <div className="div-3">
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="rectangle-4" />
            <div className="text-wrapper-29">Dial</div>
            <div className="UI-bars-status-bars">
              <img className="wifi" alt="Wifi" src="/img/wifi.svg" />
              <img className="mobile-signal" alt="Mobile signal" src="/img/mobile-signal.svg" />
              <div className="overlap-group-3">
                <img className="charging-circle" alt="Charging circle" src="/img/charging-circle-1.png" />
                <div className="text-wrapper-30">87%</div>
              </div>
            </div>
          </div>
          <img className="image" alt="Image" src="/img/image-4.png" />
          <img className="check-box" alt="Check box" src="/img/check-box-1.png" />
        </div>
        <div className="text-wrapper-31">Cathy</div>
        <div className="overlap-4">
          <div className="rectangle-5" />
          <p className="jacob">
            <span className="span">
              Jacob
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp; +9190191827263</span>
          </p>
          <img className="simcard" alt="Simcard" src="/img/simcard-2.png" />
          <img className="phone" alt="Phone" src="/img/phone-1.png" />
          <div className="text-wrapper-33">11:04 AM</div>
          <img className="information" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-6" />
          <p className="cholan">
            <span className="span">
              Cholan
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-34">1:04 AM</div>
          <img className="information-2" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-7" />
          <p className="pooja">
            <span className="text-wrapper-35">
              Pooja
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-36">10:04 AM</div>
          <img className="information-3" alt="Information" src="/img/information-1.png" />
          <img className="simcard-2" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-3" alt="Simcard" src="/img/simcard-2.png" />
        </div>
        <div className="overlap-5">
          <div className="rectangle-8" />
          <p className="tanisha">
            <span className="text-wrapper-37">
              Tanisha
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-38">02:04 AM</div>
          <img className="information-4" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-9" />
          <p className="frank">
            <span className="span">
              Frank
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-39">01:15 AM</div>
          <img className="information-5" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-10" />
          <p className="fred">
            <span className="span">
              Fred
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <img className="simcard-4" alt="Simcard" src="/img/simcard-2.png" />
          <img className="phone-2" alt="Phone" src="/img/phone-1.png" />
          <div className="text-wrapper-40">10:15 AM</div>
          <img className="information-6" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-11" />
          <div className="rectangle-11" />
          <p className="michael">
            <span className="span">
              Michael
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <img className="phone-3" alt="Phone" src="/img/phone-1.png" />
          <div className="text-wrapper-41">12:15 AM</div>
          <img className="information-7" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-12" />
          <p className="guna">
            <span className="span">
              Guna
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-42">Jul 22</div>
          <img className="information-8" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-13" />
          <div className="rectangle-13" />
          <p className="mike">
            <span className="span">
              Mike
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-43">Jul 22</div>
          <img className="information-9" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-14" />
          <p className="teddy">
            <span className="span">
              Teddy
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <div className="text-wrapper-44">11:15 AM</div>
          <img className="information-10" alt="Information" src="/img/information-1.png" />
          <div className="rectangle-15" />
          <div className="rectangle-15" />
          <p className="george">
            <span className="span">
              George
              <br />
            </span>
            <span className="text-wrapper-32">&nbsp;&nbsp;&nbsp;&nbsp;+9190191827263</span>
          </p>
          <img className="phone-4" alt="Phone" src="/img/phone-1.png" />
          <div className="text-wrapper-45">Jul 22</div>
          <img className="information-11" alt="Information" src="/img/information-1.png" />
          <img className="simcard-5" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-6" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-7" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-8" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-9" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-10" alt="Simcard" src="/img/simcard-2.png" />
          <img className="simcard-11" alt="Simcard" src="/img/simcard-2.png" />
          <Link className="num-pad-button" to="/dialpad">
            <img className="dialpad" alt="Dialpad" src="/img/dialpad-1-1.png" />
          </Link>
        </div>
        <div className="overlap-6">
          <img className="rectangle-16" alt="Rectangle" src="/img/rectangle-31.svg" />
          <Link className="contact" to="/contacts">
            <img className="image-2" alt="Image" src="/img/image-3.png" />
            <div className="text-wrapper-46">Contacts</div>
          </Link>
          <div className="overlap-7">
            <div className="text-wrapper-47">Dial</div>
            <img className="image-3" alt="Image" src="/img/image-5.png" />
          </div>
          <Link className="fav-button" to="/favorites">
            <img className="star" alt="Star" src="/img/star-1.png" />
            <div className="text-wrapper-48">Favorites</div>
          </Link>
        </div>
      </div>
    </div>
  );
};