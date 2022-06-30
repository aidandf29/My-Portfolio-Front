import React from "react";
import { images } from "../../constants";
import "./About.scss";
import { Icon } from "@iconify/react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about__section">
      <h2 className="about__title">About Me</h2>
      <span className="about__subtitle" id="about">
        My Introduction
      </span>
      <div className="about__container containerr gridd">
        <img src={images.profile} alt="" className="about__img" />

        <div className="about__content">
          <p className="about__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="about___info">
            <Container>
              <Row>
                <Col>
                  <div className="about_info_flex">
                    <span class="about__info-title">10+</span>
                    <span class="about__info--name">
                      Badge <br />
                      Completed
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="about_info_flex">
                    <span class="about__info-title">01+</span>
                    <span class="about__info-name">
                      Years <br />
                      experience
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="about_info_flex">
                    <span class="about__info-title">01+</span>
                    <span class="about__info-name">
                      companies <br />
                      experience
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <a href="/file/CV_aidan.pdf" download>
            <span className="btnn message">Download CV</span>
          </a>

          {/* <div className="about__button-CV">
            <a
              href=./
              className="about__buttonn buttonn-flex"
            >
              Download CV
              <Icon className="button__icon" icon="uil:download-alt" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
