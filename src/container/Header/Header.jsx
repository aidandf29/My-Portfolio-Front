import React from "react";
import { images } from "../../constants";
import "./Header.scss";

import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="app__header app__flex" id="home">
      <div className="header">
        <div className="container f_flex top">
          <div className="left top profile">
            {/* <h3>Welcome</h3> */}
            <h1>
              Halo, I’m <span>Aidan Daffa</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " QA Engineer.",
                    " Fullstack Developer.",
                    " AI Engineer.",
                    " Data Engineer",
                    " Data Analyst",
                    " Data Scientist",
                    " Business Intelligence",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              I hold a Master's degree majoring in Data Engineering & Business
              Intelligence from the University of Indonesia. Passionate about
              learning new things and continuously expanding my knowledge.
            </p>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={images.aidan} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
