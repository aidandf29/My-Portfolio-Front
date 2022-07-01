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
            My full name is Muhammad Aidan Daffa Junaidi. This year I am turning
            21. I am a 7th-semester student at the University of Indonesia
            Computer Engineering major. I declare myself as a person that hunger
            for knowledge and determination to turn information into action. I
            am able to handle multiple tasks on a daily basis, energetic, eager
            learn new skills, and a dependable person who is great at time
            management.
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
