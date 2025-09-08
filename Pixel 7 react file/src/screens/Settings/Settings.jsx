import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Settings = () => {
  return (
    <div className="settings">
      <div className="div">
        <div className="group">
          <img className="vector" alt="Vector" src="/img/vector.svg" />

          <img className="img" alt="Vector" src="/img/vector-1.svg" />

          <div className="text-wrapper">90%</div>
        </div>

        <div className="text-wrapper-2">Settings</div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <img className="vector-2" alt="Vector" src="/img/vector-2.svg" />

            <div className="text-wrapper-3">Search settings</div>
          </div>
        </div>

        <div className="group-2">
          <div className="group-wrapper">
            <div className="group-3">
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-16.svg"
                  />

                  <div className="overlap">
                    <div className="text-wrapper-4">Network and Internet</div>

                    <div className="text-wrapper-5">Mobile, Wifi, hotspot</div>
                  </div>
                </div>
              </div>

              <div className="overlap-2">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-6">Connected devices</div>

                    <div className="text-wrapper-7">Bluetooth, pairing</div>
                  </div>
                </div>

                <img
                  className="vector-4"
                  alt="Vector"
                  src="/img/vector-8.svg"
                />
              </div>

              <div className="overlap-3">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">Apps</div>

                    <p className="p">Assistant, recent apps, default apps</p>
                  </div>
                </div>

                <img
                  className="vector-5"
                  alt="Vector"
                  src="/img/vector-6.svg"
                />
              </div>

              <div className="overlap-4">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">Notifications</div>

                    <div className="text-wrapper-9">
                      Notification history, conversations
                    </div>
                  </div>
                </div>

                <img
                  className="vector-6"
                  alt="Vector"
                  src="/img/vector-4.svg"
                />
              </div>

              <div className="overlap-5">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">Battery</div>

                    <div className="text-wrapper-11">45%-Until 18:00</div>
                  </div>
                </div>

                <img
                  className="vector-7"
                  alt="Vector"
                  src="/img/vector-5.svg"
                />
              </div>

              <div className="overlap-6">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-12">System</div>

                    <div className="text-wrapper-13">
                      Languages, gestures, time, backup
                    </div>
                  </div>
                </div>

                <img
                  className="vector-8"
                  alt="Vector"
                  src="/img/vector-15.svg"
                />
              </div>

              <div className="overlap-7">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">Storage</div>

                    <div className="text-wrapper-13">
                      75% used-32.23 GB free
                    </div>
                  </div>
                </div>

                <img
                  className="vector-9"
                  alt="Vector"
                  src="/img/vector-3.svg"
                />
              </div>

              <div className="overlap-8">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-14">Location</div>

                    <p className="text-wrapper-15">
                      On-46 apps have access to location
                    </p>
                  </div>
                </div>

                <img
                  className="vector-10"
                  alt="Vector"
                  src="/img/vector-9.svg"
                />
              </div>

              <div className="overlap-9">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">Google</div>

                    <div className="text-wrapper-16">
                      Services and preferences
                    </div>
                  </div>
                </div>

                <img
                  className="vector-11"
                  alt="Vector"
                  src="/img/vector-13.svg"
                />
              </div>

              <div className="overlap-10">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-17">
                      Passwords and accounts
                    </div>

                    <p className="text-wrapper-18">
                      Saved passwords, autofill, synced accounts
                    </p>
                  </div>
                </div>

                <div className="overlap-wrapper">
                  <div className="overlap-11">
                    <div className="group-4" />

                    <div className="text-wrapper-19">
                      Digital Wellbeing and parental
                    </div>

                    <p className="text-wrapper-20">
                      Screen time, app timers, bedtime schedules
                    </p>
                  </div>
                </div>

                <img
                  className="vector-12"
                  alt="Vector"
                  src="/img/vector-11.svg"
                />

                <div className="text-wrapper-21">controls</div>

                <img
                  className="vector-13"
                  alt="Vector"
                  src="/img/vector-12.svg"
                />
              </div>

              <div className="overlap-12">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">Safety and emergency</div>

                    <p className="text-wrapper-11">
                      Emergency SOS, medical info, alerts
                    </p>
                  </div>
                </div>

                <img
                  className="vector-14"
                  alt="Vector"
                  src="/img/vector-10.svg"
                />
              </div>

              <div className="overlap-13">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-10">Security and privacy</div>

                    <p className="text-wrapper-22">
                      App security, device lock, permissions
                    </p>
                  </div>
                </div>

                <img
                  className="vector-15"
                  alt="Vector"
                  src="/img/vector-7.svg"
                />
              </div>

              <div className="overlap-14">
                <div className="div-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-23">About phone</div>

                    <div className="text-wrapper-24">Pixel 5</div>
                  </div>
                </div>

                <img
                  className="vector-16"
                  alt="Vector"
                  src="/img/vector-14.svg"
                />
              </div>
            </div>
          </div>

          <NavigationHome
            className="navigation-home-indicator"
            hasLine={false}
          />
        </div>

        <div className="group-5">
          <div className="overlap-15">
            <div className="text-wrapper-25">S</div>
          </div>
        </div>

        <Link className="arrow" to="/home-screen">
          <div className="frame">
            <img className="arrow-2" alt="Arrow" src="/img/arrow-1.svg" />
          </div>
        </Link>
      </div>
    </div>
  );
};
