import React from "react";
import Card from "./Card";
import { platform, skill } from "./SkillAPI";
import "./Skills.scss";

const Skills = () => {
  return (
    <div className="Skill__section">
      <div className="Skill__container">
        <div className="Skill__heading">
          <h4>What I Do</h4>
          <h1 id="skills">Platforms and Tools</h1>
          <div className="Skill__content grid">
            {platform.map((val, index) => {
              return (
                <Card
                  key={index}
                  // image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
          <h1 id="skills2">Professional Skills</h1>
          <div className="Skill__content grid">
            {skill.map((val, index) => {
              return (
                <Card
                  key={index}
                  // image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}

            {/* <Card />
            <Card /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// https://www.youtube.com/watch?v=_tUNvxA9UV4
