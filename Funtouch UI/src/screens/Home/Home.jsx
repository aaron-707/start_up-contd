import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export const Home = () => {
  const [dragStart, setDragStart] = useState(null);
  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    setDragStart(e.clientY);
  };

  const handleMouseUp = (e) => {
    if (dragStart !== null) {
      const dragEnd = e.clientY;
      if (dragStart - dragEnd > 50) {
        // Swipe up
        navigate("/app-drawer");
      } else if (dragEnd - dragStart > 50) {
        // Swipe down
        navigate("/quick-bar");
      }
    }
    setDragStart(null);
  };

  return (
    <div className="home" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <div className="overlap-wrapper-2">
        <div className="overlap-71">
          <div className="overlap-72">
            <div className="overlap-73">
              <div className="ellipse-24" />
              <div className="text-wrapper-160">8</div>
              <div className="text-wrapper-161">12</div>
              <div className="text-wrapper-162">6</div>
              <div className="text-wrapper-163">3</div>
              <div className="text-wrapper-164">9</div>
              <div className="text-wrapper-165">1</div>
              <div className="text-wrapper-166">2</div>
              <div className="text-wrapper-167">4</div>
              <div className="text-wrapper-168">5</div>
              <div className="text-wrapper-169">7</div>
              <div className="text-wrapper-170">10</div>
              <div className="text-wrapper-171">11</div>
              <div className="rectangle-54" />
              <img
                className="ellipse-25"
                alt="Ellipse"
                src="/img/ellipse-4.svg"
              />
              <div className="rectangle-55" />
            </div>
            <div className="overlap-74">
              <div className="ellipse-24" />
              <div className="ellipse-26" />
              <div className="text-wrapper-172">8</div>
              <div className="text-wrapper-173">12</div>
              <div className="text-wrapper-174">6</div>
              <div className="text-wrapper-175">3</div>
              <div className="text-wrapper-176">9</div>
              <div className="text-wrapper-177">1</div>
              <div className="text-wrapper-178">2</div>
              <div className="text-wrapper-179">4</div>
              <div className="text-wrapper-180">5</div>
              <div className="text-wrapper-181">7</div>
              <div className="text-wrapper-182">10</div>
              <div className="text-wrapper-183">11</div>
              <div className="rectangle-56" />
              <img
                className="ellipse-25"
                alt="Ellipse"
                src="/img/ellipse-11-3.svg"
              />
              <div className="rectangle-57" />
            </div>
            <div className="text-wrapper-184">London</div>
            <div className="overlap-75">
              <div className="text-wrapper-160">8</div>
              <div className="text-wrapper-161">12</div>
              <div className="text-wrapper-162">6</div>
              <div className="text-wrapper-163">3</div>
              <div className="text-wrapper-164">9</div>
              <div className="text-wrapper-165">1</div>
              <div className="text-wrapper-166">2</div>
              <div className="text-wrapper-167">4</div>
              <div className="text-wrapper-168">5</div>
              <div className="text-wrapper-169">7</div>
              <div className="text-wrapper-170">10</div>
              <div className="text-wrapper-171">11</div>
              <div className="overlap-group-15">
                <div className="rectangle-58" />
                <img
                  className="ellipse-27"
                  alt="Ellipse"
                  src="/img/ellipse-4.svg"
                />
              </div>
              <div className="rectangle-59" />
            </div>
            <div className="text-wrapper-185">24 Jul, -4.5 hr</div>
            <div className="text-wrapper-186">Paris</div>
            <div className="text-wrapper-187">24 Jul, -3.5 hr</div>
            <div className="text-wrapper-188">Sydney</div>
            <div className="text-wrapper-189">24 Jul, +4.5 hr</div>
          </div>
          <div className="overlap-76">
            <img className="google" alt="Google" src="/img/google.png" />
            <img className="image-14" alt="Image" src="/img/image-1.png" />
            <img className="image-15" alt="Image" src="/img/image-2.png" />
          </div>
          <Link to="/dialpad">
            <img className="image-16" alt="Image" src="/img/image-3-4.png" />
          </Link>
          <div className="overlap-77">
            <div className="nothing-but">
              Nothing
              <br />
              but
              <br />
              Creativity
            </div>
            <div className="text-wrapper-190">‘’</div>
          </div>
          <div className="overlap-78">
            <div className="text-wrapper-191">Thursday, Jul 24</div>
            <div className="text-wrapper-192">3:06</div>
          </div>
          <div className="group-52">
            <div className="overlap-group-16">
              <div className="ellipse-28" />
              <div className="ellipse-29" />
              <div className="ellipse-30" />
              <div className="ellipse-31" />
            </div>
          </div>
          <div className="ellipse-32" />
          <div className="ellipse-33" />
          <div className="ellipse-34" />
          <div className="ellipse-35" />
          <div className="ellipse-36" />
          <Link className="group-53" to="/settings" />
          <img className="download" alt="Download" src="/img/download-1.png" />
          <Link to="/albums">
            <img className="ftui-g" alt="Ftui g" src="/img/ftui-g-1.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};