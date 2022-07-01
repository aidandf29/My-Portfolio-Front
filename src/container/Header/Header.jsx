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
            <h3>Ahlan wa Sahlan</h3>
            <h1>
              Halo, I’m <span>Aidan Daffa</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " QA Tester.",
                    " Web Developer.",
                    " Mobile Developer.",
                    " UX Designer",
                    " Network Engineer",
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
              I’m Undergraduate Student of Computer Engineering at Universitas
              Indonesia. Untill now still excited about learn new thing.
            </p>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={images.profile} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
