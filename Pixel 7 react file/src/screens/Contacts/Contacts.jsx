import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="div-2">
        <div className="overlap-16">
          <NavigationHome
            className="navigation-home-indicator-instance"
            lineClassName="navigation-home-instance"
          />
          <div className="group-6">
            <div className="overlap-17">
              <div className="group-7" />

              <Link className="fav" to="/favorites">
                <div className="text-wrapper-26">Favorites</div>

                <img className="star" alt="Star" src="/img/star-1.svg" />
              </Link>

              <Link className="resent" to="/recents">
                <img
                  className="vector-17"
                  alt="Vector"
                  src="/img/vector-22.svg"
                />

                <div className="text-wrapper-26">Recents</div>
              </Link>

              <div className="text-wrapper-27">Contacts</div>
            </div>
          </div>

          <div className="rectangle" />
        </div>

        <div className="group-8">
          <div className="overlap-group-3">
            <img className="vector-18" alt="Vector" src="/img/vector-17.svg" />

            <img className="vector-19" alt="Vector" src="/img/vector-18.svg" />

            <img className="vector-20" alt="Vector" src="/img/vector-19.svg" />

            <div className="text-wrapper-28">Search contacts</div>
          </div>
        </div>

        <div className="overlap-18">
          <div className="group-9">
            <div className="overlap-19">
              <img
                className="vector-21"
                alt="Vector"
                src="/img/vector-20.svg"
              />

              <img
                className="vector-22"
                alt="Vector"
                src="/img/vector-21.svg"
              />
            </div>
          </div>

          <div className="text-wrapper-29">Create new contact</div>

          <div className="rectangle-2" />
        </div>

        <div className="overlap-20">
          <div className="group-10">
            <div className="group-11">
              <div className="overlap-group-4">
                <div className="text-wrapper-30">A</div>

                <img
                  className="ellipse"
                  alt="Ellipse"
                  src="/img/ellipse-1.png"
                />

                <div className="text-wrapper-31">Aathi</div>
              </div>
            </div>

            <div className="overlap-21">
              <div className="group-12">
                <div className="overlap-group-4">
                  <div className="text-wrapper-31">Avinash</div>
                </div>
              </div>

              <div className="group-13">
                <div className="overlap-22">
                  <div className="text-wrapper-32">A</div>
                </div>
              </div>
            </div>

            <div className="overlap-23">
              <div className="group-14">
                <div className="overlap-group-4">
                  <div className="text-wrapper-31">Arun</div>
                </div>
              </div>

              <div className="group-12">
                <div className="overlap-group-4">
                  <div className="text-wrapper-31">Anu</div>
                </div>
              </div>

              <div className="group-15">
                <div className="overlap-24">
                  <div className="text-wrapper-33">A</div>
                </div>
              </div>
            </div>

            <div className="overlap-25">
              <div className="div-3">
                <div className="frame-2">
                  <div className="text-wrapper-34">Ajai</div>
                </div>
              </div>

              <div className="group-13">
                <div className="overlap-26">
                  <div className="text-wrapper-35">A</div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-16" />
        </div>

        <div className="overlap-27">
          <div className="group-17">
            <div className="div-3">
              <div className="text-wrapper-36">B</div>

              <img className="ellipse" alt="Ellipse" src="/img/ellipse-1.png" />

              <div className="text-wrapper-31">Bala</div>
            </div>

            <div className="overlap-28">
              <div className="group-12">
                <div className="overlap-group-4">
                  <div className="text-wrapper-31">Balu</div>
                </div>
              </div>

              <div className="group-18" />
            </div>

            <div className="overlap-29">
              <div className="group-12">
                <div className="overlap-group-4">
                  <div className="text-wrapper-37">Bawya</div>
                </div>
              </div>

              <div className="group-19" />
            </div>

            <div className="overlap-25">
              <div className="div-3">
                <div className="frame-3">
                  <div className="text-wrapper-34">Barani</div>
                </div>
              </div>

              <div className="group-20" />
            </div>
          </div>

          <div className="text-wrapper-38">B</div>

          <div className="text-wrapper-39">B</div>

          <div className="text-wrapper-40">B</div>

          <Link className="group-21" to="/dialpad">
            <div className="group-22" />
          </Link>
        </div>

        <div className="group-23">
          <div className="text-wrapper-41">90%</div>

          <img className="vector-23" alt="Vector" src="/img/vector-24.svg" />

          <img className="vector-24" alt="Vector" src="/img/vector-25.svg" />

          <div className="group-24">
            <div className="overlap-group-5">
              <img
                className="vector-25"
                alt="Vector"
                src="/img/vector-26.svg"
              />

              <img
                className="vector-26"
                alt="Vector"
                src="/img/vector-27.svg"
              />

              <img
                className="vector-27"
                alt="Vector"
                src="/img/vector-28.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
