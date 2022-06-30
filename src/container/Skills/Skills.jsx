import React from "react";
import Card from "./Card";
import data from "./SkillAPI";

import "./Skills.scss";

const Skills = () => {
  return (
    <div className="Skill__section">
      <div className="Skill__container">
        <div className="Skill__heading">
          <h4>My Skill and Feature</h4>
          <h1 id="skills">What I Do</h1>
          <div className="Skill__content grid">
            {data.map((val, index) => {
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
