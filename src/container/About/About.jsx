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
            My full name is Muhammad Aidan Daffa Junaidi. I am currently 23
            years old. I am in my final semester at the University of Indonesia,
            majoring in Data Engineering & Business Intelligence. I assert
            myself as an individual with a fervent appetite for knowledge and a
            resolute commitment to translating information into actionable
            insights. I possess the capability to manage multiple tasks daily,
            demonstrating both energy and eagerness to acquire new skills.
            Additionally, I am a dependable individual known for my exceptional
            time management skills.
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
                    <span class="about__info-title">02+</span>
                    <span class="about__info-name">
                      Years <br />
                      experience
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="about_info_flex">
                    <span class="about__info-title">03+</span>
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
