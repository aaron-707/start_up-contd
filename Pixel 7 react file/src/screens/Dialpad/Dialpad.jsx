import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Dialpad = () => {
  return (
    <div className="dialpad">
      <div className="div-5">
        <div className="overlap-39">
          <NavigationHome
            className="design-component-instance-node"
            lineClassName="navigation-home-2"
          />
          <div className="rectangle-5" />

          <img className="line-2" alt="Line" src="/img/line-2.svg" />

          <img className="vector-31" alt="Vector" src="/img/vector-33.svg" />

          <div className="rectangle-6" />

          <div className="rounded-rectangle" />

          <div className="text-wrapper-49">2</div>

          <div className="rectangle-7" />

          <div className="text-wrapper-50">3</div>

          <div className="rectangle-8" />

          <div className="text-wrapper-51">4</div>

          <div className="rectangle-9" />

          <div className="rectangle-10" />

          <div className="rectangle-11" />

          <div className="rectangle-12" />

          <div className="rectangle-13" />

          <div className="rectangle-14" />

          <div className="rectangle-15" />

          <div className="text-wrapper-52">9</div>

          <div className="text-wrapper-53">0</div>

          <div className="rounded-rectangle-2" />

          <div className="rectangle-16" />

          <div className="text-wrapper-54">Call</div>

          <img className="vector-32" alt="Vector" src="/img/vector-34.svg" />

          <div className="text-wrapper-55">1</div>

          <div className="text-wrapper-56">5</div>

          <div className="text-wrapper-57">6</div>

          <div className="text-wrapper-58">7</div>

          <div className="text-wrapper-59">8</div>

          <div className="text-wrapper-60">#</div>

          <div className="text-wrapper-61">*</div>

          <div className="text-wrapper-62">ABC</div>

          <div className="text-wrapper-63">DEF</div>

          <div className="text-wrapper-64">GHI</div>

          <div className="text-wrapper-65">JKL</div>

          <div className="text-wrapper-66">MNO</div>

          <div className="text-wrapper-67">PQRS</div>

          <div className="text-wrapper-68">TUV</div>

          <div className="text-wrapper-69">WXYZ</div>

          <div className="text-wrapper-70">+</div>

          <img className="vector-33" alt="Vector" src="/img/vector-35.svg" />
        </div>

        <Link to="/home-screen">
          <img className="vector-34" alt="Vector" src="/img/vector-32.svg" />
        </Link>

        <Link className="text-wrapper-71" to="/contacts">
          Contacts
        </Link>

        <div className="overlap-40">
          <div className="group-26">
            <div className="ajai-mobile-wrapper">
              <div className="text-wrapper-72">
                Ajai
                <br />
                Mobile+91 45442 81148
              </div>
            </div>

            <img className="vector-35" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="group-27">
            <div className="overlap-group-7">
              <div className="text-wrapper-73">A</div>
            </div>
          </div>
        </div>

        <div className="overlap-41">
          <div className="group-26">
            <div className="group-28">
              <div className="text-wrapper-72">
                Jero
                <br />
                Mobile+91 45362 44048
              </div>
            </div>

            <img className="vector-35" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="group-29" />

          <div className="text-wrapper-74">J</div>
        </div>

        <div className="overlap-42">
          <div className="group-26">
            <div className="group-28">
              <div className="text-wrapper-72">
                Aathi
                <br />
                Mobile+91 45362 89048
              </div>
            </div>

            <img className="vector-35" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <img className="ellipse-5" alt="Ellipse" src="/img/ellipse-1.png" />
        </div>

        <div className="group-30">
          <div className="text-wrapper-75">90%</div>

          <img className="vector-36" alt="Vector" src="/img/vector-24.svg" />

          <img className="vector-37" alt="Vector" src="/img/vector-25.svg" />

          <div className="group-31">
            <div className="overlap-group-8">
              <img
                className="vector-38"
                alt="Vector"
                src="/img/vector-41.svg"
              />

              <img
                className="vector-39"
                alt="Vector"
                src="/img/vector-27.svg"
              />

              <img
                className="vector-40"
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
