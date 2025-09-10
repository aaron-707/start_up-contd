import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDrag } from '@use-gesture/react';
import { animated } from '@react-spring/web';
import { Cloud } from "../../components/Cloud";
import { FiRrBroom } from "../../components/FiRrBroom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const HomeScreens = () => {
  const navigate = useNavigate();

  const bind = useDrag(({ down, swipe: [, swipeY] }) => {
    if (!down && swipeY !== 0) { // swipeY is -1 for up, 1 for down
      if (swipeY < 0) {
        navigate('/app-draw');
      } else {
        navigate('/quick-setting');
      }
    }
  });

  return (
    <div className="home-screens">
      <animated.div {...bind()} className="div-7">
        <img className="group-10" alt="Group" src="/img/group-34154-5.png" />
        <div className="overlap-wrapper">
          <div className="overlap-16">
            <div className="text-wrapper-31">CLOUDY DAY</div>
            <div className="group-11">
              <Cloud
                className="cloud-instance"
                union="/img/union-4.png"
                vector="/img/vector-73-4.png"
              />
              <div className="group-12">
                <div className="text-wrapper-32">12</div>
                <div className="c-2">C</div>
                <div className="o-2">O</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-13">
          <div className="overlap-16">
            <div className="navbar">
              <p className="text-wrapper-33">M T W T F S S</p>
              <div className="text-wrapper-34">_</div>
              <div className="text-wrapper-35">_</div>
              <div className="text-wrapper-36">_</div>
              <div className="text-wrapper-37">_</div>
            </div>
            <div className="group-14">
              <div className="group-15">
                <div className="text-wrapper-38">11:45</div>
                <div className="text-wrapper-39">AM</div>
                <div className="alarm">ALARM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-16">
          <div className="overlap-17">
            <div className="mon-may-3">MON,2 MAY,2022</div>
            <div className="ray-3">RAY</div>
            <div className="group-17">
              <div className="overlap-group-6">
                <div className="text-wrapper-40">22</div>
                <div className="text-wrapper-41">:</div>
                <div className="text-wrapper-42">56</div>
              </div>
            </div>
          </div>
        </div>
        <img className="group-18" alt="Group" src="/img/group-34159-1.png" />
        <Link className="group-19" to="/call-aplication" />
        <img
          className="mask-group-3"
          alt="Mask group"
          src="/img/mask-group-10.png"
        />
        <Link className="group-20" to="/photos">
          <div className="overlap-18">
            <img
              className="mask-group-4"
              alt="Mask group"
              src="/img/mask-group-12.png"
            />
            <div className="group-21">
              <div className="group-22" />
            </div>
          </div>
        </Link>
        <img className="group-23" alt="Group" src="/img/group-34165-1.png" />
        <p className="meet-up-with-ray-2">
          MEET UP WITH RAY
          <br />
          23:10 - 23:40
        </p>
        <div className="group-24">
          <div className="overlap-19">
            <div className="group-25">
              <div className="group-26">
                <p className="text-wrapper-43">82 GB / 256 GB</p>
                <div className="text-wrapper-44">STORAGE</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-1-2.png" />
            <img className="line-3" alt="Line" src="/img/line-2-7.png" />
          </div>
        </div>
        <div className="group-27">
          <div className="overlap-19">
            <div className="group-28">
              <div className="group-29">
                <p className="text-wrapper-43">7.2 GB / 8 GB</p>
                <div className="text-wrapper-44">MEMORY</div>
              </div>
            </div>
            <img className="line-2" alt="Line" src="/img/line-1-2.png" />
            <img className="line-4" alt="Line" src="/img/line-2-8.png" />
          </div>
        </div>
        <div className="group-30">
          <div className="group-31">
            <div className="group-32">
              <div className="overlap-group-7">
                <img
                  className="vector-7"
                  alt="Vector"
                  src="/img/vector-74-1.png"
                />
                <FiRrBroom
                  className="fi-rr-broom-instance"
                  fiRrBroom="/img/fi-rr-broom-3.png"
                />
              </div>
            </div>
            <div className="overlap-20">
              <div className="clean">CLEAN</div>
              <div className="clean-2">CLEAN</div>
              <div className="clean-3">CLEAN</div>
            </div>
          </div>
        </div>
        <NavigationHome
          className="navigation-home-6"
          lineClassName="navigation-home-7"
        />
        <Link className="setting" to="/settings">
          <div className="overlap-21">
            <img className="vector-8" alt="Vector" src="/img/vector-52.png" />
            <img className="vector-9" alt="Vector" src="/img/vector-53.png" />
          </div>
        </Link>
      </animated.div>
    </div>
  );
};