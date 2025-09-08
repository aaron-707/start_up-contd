import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="div-8">
        <div className="UI-bars-status-bars-wrapper">
          <img
            className="UI-bars-status-bars"
            alt="Ui bars status bars"
            src="/img/ui-bars-status-bars-black-base-2.png"
          />
        </div>

        <Link to="/home-screens">
          <img className="image-6" alt="Image" src="/img/image-3-1.png" />
        </Link>

        <div className="overlap-22">
          <img className="image-7" alt="Image" src="/img/image-4-1.png" />

          <div className="text-wrapper-45">+</div>
        </div>

        <p className="div-9">
          <span className="span">
            Contacts
            <br />
          </span>

          <span className="text-wrapper-46">333 Contacts</span>
        </p>

        <div className="overlap-23">
          <div className="rectangle-10" />

          <img className="search" alt="Search" src="/img/search-1-1.png" />

          <div className="text-wrapper-47">Search</div>
        </div>

        <div className="overlap-24">
          <div className="text-wrapper-48">A</div>

          <div className="rectangle-11" />

          <img className="ellipse" alt="Ellipse" src="/img/ellipse-4-3.png" />

          <div className="text-wrapper-49">Alan Turing</div>

          <div className="rectangle-12" />

          <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3-2.png" />

          <div className="text-wrapper-50">Allen</div>

          <div className="rectangle-13" />

          <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-4-2.png" />

          <div className="text-wrapper-51">Azkaban</div>
        </div>

        <div className="overlap-25">
          <div className="text-wrapper-52">B</div>

          <div className="rectangle-14" />

          <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-5-1.png" />

          <div className="text-wrapper-53">Benita</div>

          <div className="rectangle-15" />

          <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-8-1.png" />

          <div className="rectangle-16" />

          <img
            className="ellipse-6"
            alt="Ellipse"
            src="/img/ellipse-11-1.png"
          />

          <div className="text-wrapper-54">Cate</div>

          <div className="text-wrapper-55">Calligen</div>

          <div className="rectangle-17" />

          <div className="group-33">
            <div className="overlap-group-8">
              <Link className="ellipse-7" to="/call-aplication" />

              <img
                className="dialpad"
                alt="Dialpad"
                src="/img/dialpad-1-1.png"
              />
            </div>
          </div>

          <div className="frame">
            <NavigationHome
              className="navigation-home-8"
              lineClassName="navigation-home-9"
            />
          </div>
        </div>

        <img className="ellipse-8" alt="Ellipse" src="/img/ellipse-4-3.png" />

        <div className="text-wrapper-56">Cathy</div>
      </div>
    </div>
  );
};
