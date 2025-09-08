import React from "react";
import "./style.css";

export const Albums = () => {
  return (
    <div className="albums">
      <div className="div">
        <div className="overlap">
          <div className="album-gride">
            <div className="others">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-10-1.png"
              />

              <div className="text-wrapper">Others</div>

              <div className="text-wrapper-2">45</div>
            </div>

            <div className="documents">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-9.png"
              />

              <div className="text-wrapper-3">Documents</div>

              <div className="text-wrapper-4">16</div>
            </div>

            <div className="downloads">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-8.png"
              />

              <div className="text-wrapper-5">Downloads</div>

              <div className="text-wrapper-6">36</div>
            </div>

            <div className="snapchat">
              <img
                className="img"
                alt="Rectangle"
                src="/img/rectangle-10.png"
              />

              <div className="text-wrapper-7">Snapchat</div>

              <div className="text-wrapper-8">34</div>
            </div>

            <div className="favorities">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-9-1.png"
              />

              <div className="text-wrapper-9">Favorities</div>

              <div className="text-wrapper-10">48</div>
            </div>

            <div className="instagram">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-8-1.png"
              />

              <div className="text-wrapper-11">Instagram</div>

              <div className="text-wrapper-12">7</div>
            </div>

            <div className="whats-app">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-7.png"
              />

              <div className="text-wrapper-13">WhatsApp</div>

              <div className="text-wrapper-14">298</div>
            </div>

            <div className="screen-recordings">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-6.png"
              />

              <div className="screen-recordings-2">
                Screen <br />
                recordings
              </div>

              <div className="text-wrapper-15">7</div>
            </div>

            <div className="screenshots">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-5.png"
              />

              <div className="text-wrapper-16">Screenshots</div>

              <div className="text-wrapper-17">1068</div>
            </div>

            <div className="videos">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-4.png"
              />

              <div className="text-wrapper-18">Videos</div>

              <div className="text-wrapper-19">316</div>
            </div>

            <div className="camera">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-3.png"
              />

              <div className="text-wrapper-20">Camera</div>

              <div className="text-wrapper-21">1,870</div>
            </div>

            <div className="all-photos">
              <img
                className="rectangle"
                alt="Rectangle"
                src="/img/rectangle-2.png"
              />

              <div className="text-wrapper-22">All photos</div>

              <div className="text-wrapper-23">6,630</div>
            </div>
          </div>

          <div className="bottom-navbar">
            <div className="rectangle-2" />

            <div className="search">
              <img className="search-2" alt="Search" src="/img/search.png" />

              <input className="input" placeholder="Search" type="text" />
            </div>

            <div className="recommended">
              <div className="overlap-group">
                <div className="rectangle-3" />
              </div>

              <div className="text-wrapper-24">Recommended</div>
            </div>

            <div className="div-2">
              <img className="img-2" alt="Albums" src="/img/albums.png" />

              <div className="text-wrapper-25">Albums</div>
            </div>

            <div className="photos">
              <div className="text-wrapper-26">Photos</div>

              <img className="picture" alt="Picture" src="/img/picture.png" />
            </div>
          </div>
        </div>

        <div className="top-bar">
          <div className="text-wrapper-27">100%</div>

          <img className="signal" alt="Signal" src="/img/signal-1.png" />

          <img className="signal-2" alt="Signal" src="/img/signal-1.png" />

          <div className="group">
            <div className="ellipse" />
          </div>
        </div>

        <div className="checkbox-settings">
          <img className="vector" alt="Vector" src="/img/vector.svg" />

          <div className="plus-icon">
            <div className="overlap-group-2">
              <img className="vector-2" alt="Vector" src="/img/vector-1.svg" />

              <img className="vector-3" alt="Vector" src="/img/vector-2.svg" />
            </div>
          </div>
        </div>

        <div className="text-wrapper-28">Albums</div>

        <img className="vector-4" alt="Vector" src="/img/vector-3.svg" />
      </div>
    </div>
  );
};
