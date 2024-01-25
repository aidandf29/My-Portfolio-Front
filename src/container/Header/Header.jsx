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
            <h3>Youkoso!</h3>
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
                    " UX Designer",
                    " Network Engineer",
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
              I am a graduate student with a Bachelor's degree, currently
              pursuing my Master's degree in Data Engineering & Business
              Intelligence at the University of Indonesia. Untill now still
              excited about learn new thing.
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
