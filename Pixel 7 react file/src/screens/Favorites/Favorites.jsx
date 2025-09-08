import React from "react";
import { Link } from "react-router-dom";
import { NavigationHome } from "../../components/NavigationHome";
import "./style.css";

export const Favorites = () => {
  return (
    <div className="favorites">
      <div className="div-8">
        <div className="overlap-55">
          <NavigationHome
            className="navigation-home-5"
            lineClassName="navigation-home-6"
          />
          <div className="recents-wrapper">
            <Link className="recents-2" to="/recents">
              <img
                className="vector-61"
                alt="Vector"
                src="/img/vector-22.svg"
              />

              <div className="text-wrapper-104">Recents</div>
            </Link>
          </div>

          <Link className="cantacts" to="/contacts">
            <div className="text-wrapper-105">Contacts</div>

            <div className="can-2">
              <img
                className="vector-62"
                alt="Vector"
                src="/img/vector-54.svg"
              />

              <div className="overlap-group-13">
                <img
                  className="vector-63"
                  alt="Vector"
                  src="/img/vector-55.svg"
                />

                <img
                  className="vector-64"
                  alt="Vector"
                  src="/img/vector-57.svg"
                />
              </div>

              <img
                className="vector-65"
                alt="Vector"
                src="/img/vector-56.svg"
              />
            </div>
          </Link>

          <div className="fav-3">
            <div className="group-54">
              <div className="star-wrapper">
                <img className="star-3" alt="Star" src="/img/star-1-2.svg" />
              </div>

              <div className="text-wrapper-106">Favorites</div>
            </div>
          </div>

          <div className="rectangle-19" />
        </div>

        <div className="group-55">
          <div className="overlap-group-14">
            <img className="vector-66" alt="Vector" src="/img/vector-17.svg" />

            <img className="vector-67" alt="Vector" src="/img/vector-18.svg" />

            <img className="vector-68" alt="Vector" src="/img/vector-72.svg" />

            <div className="text-wrapper-107">Search contacts</div>
          </div>
        </div>

        <div className="overlap-56">
          <div className="group-56">
            <div className="text-wrapper-108">A</div>
          </div>
        </div>

        <div className="group-57">
          <div className="overlap-57">
            <div className="text-wrapper-109">A</div>
          </div>
        </div>

        <div className="group-58" />

        <div className="text-wrapper-110">Favorites</div>

        <div className="text-wrapper-111">Add</div>

        <div className="text-wrapper-112">Avinash</div>

        <div className="text-wrapper-113">Arun</div>

        <div className="text-wrapper-114">Anu</div>

        <div className="overlap-58">
          <div className="img-wrapper">
            <img className="vector-69" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="group-59">
            <div className="text-wrapper-115">
              Aathi
              <br />
              Mobile+91 45362 89048
            </div>
          </div>

          <div className="group-60">
            <div className="group-59">
              <div className="text-wrapper-115">
                Jero
                <br />
                Mobile+91 45362 44048
              </div>
            </div>

            <img className="vector-69" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="group-61">
            <div className="group-62">
              <div className="text-wrapper-115">
                Ajai
                <br />
                Mobile+91 45442 81148
              </div>
            </div>

            <img className="vector-69" alt="Vector" src="/img/vector-36.svg" />
          </div>

          <div className="group-63">
            <div className="overlap-59">
              <div className="rectangle-20" />

              <div className="group-64">
                <img
                  className="ellipse-8"
                  alt="Ellipse"
                  src="/img/ellipse-1.png"
                />

                <img
                  className="ellipse-9"
                  alt="Ellipse"
                  src="/img/ellipse-1.png"
                />

                <div className="bala-mobile-2">
                  Bala
                  <br />
                  Mobile+91 45112 67848
                </div>
              </div>

              <img
                className="vector-70"
                alt="Vector"
                src="/img/vector-36.svg"
              />
            </div>
          </div>

          <div className="group-65">
            <div className="overlap-60">
              <div className="text-wrapper-116">A</div>
            </div>
          </div>

          <div className="group-66" />

          <div className="text-wrapper-117">J</div>

          <Link className="group-67" to="/dialpad">
            <div className="group-68" />
          </Link>
        </div>

        <div className="text-wrapper-118">Frequents</div>

        <div className="group-69">
          <div className="text-wrapper-119">90%</div>

          <img className="vector-71" alt="Vector" src="/img/vector-24.svg" />

          <img className="vector-72" alt="Vector" src="/img/vector-25.svg" />

          <div className="group-70">
            <div className="overlap-group-15">
              <img
                className="vector-73"
                alt="Vector"
                src="/img/vector-85.svg"
              />

              <img
                className="vector-74"
                alt="Vector"
                src="/img/vector-27.svg"
              />

              <img
                className="vector-75"
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
