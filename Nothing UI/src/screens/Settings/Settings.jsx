import React from "react";
import { Link } from "react-router-dom";
import { HiconLinear } from "../../components/HiconLinear";
import { HiconLinearRotate } from "../../components/HiconLinearRotate";
import { HiconLinearStar } from "../../components/HiconLinearStar";
import { Laptop } from "../../components/Laptop";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Settings = () => {
  return (
    
    <div className="settings">
      <div className="div-13">
        <img className="group-47" alt="Group" src="/img/group-34154-9.png" />
        <div className="ellipse-wrapper">
          
            <img
              className="ellipse-12"
              alt="Ellipse"
              src="/img/ellipse-1-1.png"
            />
        </div>

        <div className="group-36">
          <div className="group-37">
            <div className="overlap-group-9">
              <div className="rectangle-20" />

              <div className="s-EARCH">SEARCH</div>
            </div>
          </div>
        </div>

        <div className="setting-2">
          <img className="line-5" alt="Line" src="/img/line-3-4.png" />

          <div className="connected-devices-wrapper">
            <div className="connected-devices">
              <img
                className="vector-10"
                alt="Vector"
                src="/img/vector-54.png"
              />

              <div className="text-wrapper-63">Connected Devices</div>

              <div className="text-wrapper-64">Bluetooth, Cast</div>
            </div>
          </div>

          <div className="wifi-2">
            <div className="text-wrapper-65">
              Wireless &amp; Network settings
            </div>

            <p className="text-wrapper-66">
              Wi-fi, Dual SIM Settings &amp; Mobile Network.
            </p>

            <div className="vector-11">
              <div className="overlap-group-10">
                <div className="overlap-27">
                  <img
                    className="vector-12"
                    alt="Vector"
                    src="/img/vector-56.png"
                  />

                  <div className="overlap-28">
                    <img
                      className="vector-13"
                      alt="Vector"
                      src="/img/vector-57.png"
                    />

                    <img
                      className="vector-14"
                      alt="Vector"
                      src="/img/vector-58.png"
                    />

                    <img
                      className="vector-15"
                      alt="Vector"
                      src="/img/vector-59.png"
                    />
                  </div>
                </div>

                <img
                  className="vector-16"
                  alt="Vector"
                  src="/img/vector-60.png"
                />

                <img
                  className="vector-17"
                  alt="Vector"
                  src="/img/vector-61.png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="group-38">
          <div className="overlap-29">
            <div className="setting-3">
              <div className="div-14">
                <div className="apps-and">
                  <div className="text-wrapper-67">
                    Apps &amp; notifications
                  </div>

                  <div className="text-wrapper-68">
                    Permissions, Default apps
                  </div>

                  <img
                    className="vector-18"
                    alt="Vector"
                    src="/img/vector-67.png"
                  />
                </div>
              </div>

              <div className="overlap-30">
                <div className="app-update">
                  <HiconLinearRotate
                    className="design-component-instance-node-2"
                    hiconLinearRotate="/img/hicon-linear-rotate-right-3.png"
                  />
                  <div className="text-wrapper-63">App Update</div>

                  <p className="text-wrapper-64">Best place to discover apps</p>
                </div>
              </div>

              <div className="overlap-31">
                <div className="battery-lab">
                  <div className="text-wrapper-65">Battery lab</div>

                  <div className="text-wrapper-66">25% - Charging</div>

                  <div className="group-39">
                    <div className="vector-wrapper">
                      <img
                        className="vector-19"
                        alt="Vector"
                        src="/img/vector-64.png"
                      />
                    </div>

                    <img
                      className="vector-20"
                      alt="Vector"
                      src="/img/vector-63.png"
                    />
                  </div>
                </div>
              </div>

              <div className="overlap-32">
                <div className="system-nav">
                  <div className="text-wrapper-63">System Navigation</div>

                  <div className="text-wrapper-64">
                    Key navigation, gesture navigation
                  </div>

                  <div className="group-40">
                    <div className="overlap-group-11">
                      <img
                        className="vector-21"
                        alt="Vector"
                        src="/img/vector-65.png"
                      />

                      <img
                        className="vector-11"
                        alt="Vector"
                        src="/img/vector-66.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img className="line-5" alt="Line" src="/img/line-3-4.png" />

            <img className="line-6" alt="Line" src="/img/line-3-4.png" />

            <img className="line-7" alt="Line" src="/img/line-3-4.png" />
          </div>
        </div>

        <div className="group-41">
          <div className="overlap-29">
            <div className="setting-3">
              <div className="div-14">
                <div className="accessibilty">
                  <div className="text-wrapper-69">Accessibility</div>

                  <p className="text-wrapper-70">
                    Screen reader, Diplay, Interaction controls
                  </p>

                  <img
                    className="vector-22"
                    alt="Vector"
                    src="/img/vector-72.png"
                  />
                </div>
              </div>

              <div className="overlap-30">
                <div className="accounts">
                  <div className="text-wrapper-71">Accounts</div>

                  <div className="text-wrapper-72">
                    SoundCloud, WhatApp, Google
                  </div>

                  <div className="group-40">
                    <div className="overlap-group-11">
                      <img
                        className="vector-23"
                        alt="Vector"
                        src="/img/vector-68.png"
                      />

                      <img
                        className="vector-11"
                        alt="Vector"
                        src="/img/vector-69.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="overlap-31">
                <div className="lab">
                  <div className="text-wrapper-73">XOS Lab</div>

                  <div className="text-wrapper-74">Try new features</div>

                  <Laptop className="design-component-instance-node-2" />
                </div>
              </div>

              <div className="overlap-32">
                <div className="system">
                  <div className="text-wrapper-75">System</div>

                  <div className="text-wrapper-76">
                    Languages, Time, Backups, Updates
                  </div>

                  <div className="setting-4">
                    <div className="overlap-group-12">
                      <img
                        className="vector-24"
                        alt="Vector"
                        src="/img/vector-70.png"
                      />

                      <img
                        className="div-15"
                        alt="Vector"
                        src="/img/vector-71.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img className="line-5" alt="Line" src="/img/line-3-4.png" />

            <img className="line-6" alt="Line" src="/img/line-3-4.png" />

            <img className="line-7" alt="Line" src="/img/line-3-4.png" />
          </div>
        </div>

        <div className="group-42">
          <div className="overlap-33">
            <div className="setting-5">
              <div className="storage-wrapper">
                <div className="storage">
                  <div className="text-wrapper-67">Storage</div>

                  <p className="text-wrapper-68">25.46% used - 95.44 GB free</p>

                  <img
                    className="vector-25"
                    alt="Vector"
                    src="/img/vector-82.png"
                  />
                </div>
              </div>

              <div className="security-wrapper">
                <div className="security">
                  <img
                    className="vector-26"
                    alt="Vector"
                    src="/img/vector-76.png"
                  />

                  <div className="text-wrapper-67">Security &amp; location</div>

                  <p className="text-wrapper-68">
                    Screen lock, Fingerprint, Face unlock
                  </p>
                </div>
              </div>

              <div className="smart-panel-wrapper">
                <div className="smart-panel">
                  <div className="text-wrapper-77">Smart Panel</div>

                  <p className="text-wrapper-78">
                    Direct access to common functions
                  </p>

                  <div className="group-43">
                    <div className="overlap-group-13">
                      <img
                        className="vector-27"
                        alt="Vector"
                        src="/img/vector-61.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="gesture-wrapper">
                <div className="gesture">
                  <div className="text-wrapper-67">Actions &amp; Gesture</div>

                  <div className="text-wrapper-68">Gesture</div>

                  <img
                    className="vector-28"
                    alt="Vector"
                    src="/img/vector-75-1.png"
                  />
                </div>
              </div>

              <div className="voice-broadcast-wrapper">
                <div className="voice-broadcast">
                  <div className="text-wrapper-65">
                    Intelligent Voice Broadcast
                  </div>

                  <p className="text-wrapper-66">
                    Incoming call, Messaging &amp; Social events
                  </p>

                  <div className="voice-broadcast-2">
                    <div className="overlap-group-14">
                      <img
                        className="vector-29"
                        alt="Vector"
                        src="/img/vector-79.png"
                      />

                      <img
                        className="vector-30"
                        alt="Vector"
                        src="/img/vector-80.png"
                      />

                      <img
                        className="vector-31"
                        alt="Vector"
                        src="/img/vector-81.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="social-turbo-wrapper">
                <div className="social-turbo">
                  <div className="text-wrapper-65">Social Turbo</div>

                  <div className="text-wrapper-66">
                    Powerful whatsApp Assistant
                  </div>

                  <HiconLinearStar className="design-component-instance-node-3" />
                </div>
              </div>

              <div className="gamemode-wrapper">
                <div className="gamemode">
                  <div className="text-wrapper-65">Game Mode</div>

                  <HiconLinear className="design-component-instance-node-3" />
                  <div className="text-wrapper-66">Improve Game experience</div>
                </div>
              </div>
            </div>

            <img className="line-5" alt="Line" src="/img/line-3-4.png" />

            <img className="line-6" alt="Line" src="/img/line-3-4.png" />

            <img className="line-8" alt="Line" src="/img/line-3-4.png" />

            <img className="line-7" alt="Line" src="/img/line-3-4.png" />

            <img className="line-9" alt="Line" src="/img/line-3-4.png" />

            <img className="line-10" alt="Line" src="/img/line-3-4.png" />
          </div>
        </div>

        <div className="overlap-34">
          <div className="setting-wrapper">
            <div className="setting-6">
              <div className="overlap-35">
                <div className="div-14" />

                <div className="rectangle-21" />

                <img className="line-5" alt="Line" src="/img/line-3-4.png" />

                <div className="rectangle-22" />

                <div className="group-44">
                  <div className="themes-lock-screen">
                    Themes &amp;&nbsp;&nbsp;Lock screen
                  </div>

                  <div className="text-wrapper-79">
                    Amazing theme/lockscreen, Beautiful phone
                  </div>

                  <img
                    className="vector-32"
                    alt="Vector"
                    src="/img/vector-83.png"
                  />
                </div>

                <div className="vloume">
                  <div className="text-wrapper-80">Sound</div>

                  <p className="text-wrapper-81">
                    Volume, Vibration, Do not disturb
                  </p>

                  <div className="div-15">
                    <img
                      className="vector-33"
                      alt="Vector"
                      src="/img/vector-84.png"
                    />

                    <img
                      className="vector-34"
                      alt="Vector"
                      src="/img/vector-85.png"
                    />
                  </div>
                </div>

                <div className="display">
                  <div className="text-wrapper-80">Display</div>

                  <p className="text-wrapper-81">
                    Wallpaper, Sleep, Display of special-shaped s...
                  </p>

                  <div className="div-15">
                    <div className="overlap-group-15">
                      <img
                        className="vector-35"
                        alt="Vector"
                        src="/img/vector-86.png"
                      />

                      <img
                        className="vector-36"
                        alt="Vector"
                        src="/img/vector-88.png"
                      />

                      <img
                        className="vector-37"
                        alt="Vector"
                        src="/img/vector-91.png"
                      />
                    </div>

                    <div className="overlap-36">
                      <img
                        className="vector-38"
                        alt="Vector"
                        src="/img/vector-87.png"
                      />

                      <img
                        className="vector-39"
                        alt="Vector"
                        src="/img/vector-93.png"
                      />
                    </div>

                    <img
                      className="vector-40"
                      alt="Vector"
                      src="/img/vector-89.png"
                    />

                    <img
                      className="vector-41"
                      alt="Vector"
                      src="/img/vector-89.png"
                    />

                    <img
                      className="vector-42"
                      alt="Vector"
                      src="/img/vector-92.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img className="line-6" alt="Line" src="/img/line-3-4.png" />
        </div>

        <div className="rachelmcdermott">rachelmcdermott@email.com</div>

        <div className="text-wrapper-82">Rachel McDermott</div>

        <Link className="group-45" to="/home-screens">
          <div className="group-46">
            <img className="vector-43" alt="Vector" src="/img/vector-94.png" />
          </div>
        </Link>

        {/* THIS IS THE MODIFIED LINE */}
        <NavigationHome
          className="navigation-home-12"
          lineClassName="navigation-home-13"
          to="/home-screens"
        />
        
      </div>
    </div>
  );
};