import React from "react";
import { images } from "../../constants";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div>
        <p>Socials</p>
      </div>
      <div classname="boxContent">
        <div className="social-1">
          <a href="https://wa.me/6285778248437">
            <img src={images.whatsapp} alt="whatsapp" />
          </a>
          <a href="https://www.facebook.com/groups/1050042085478994">
            <img src={images.facebook} alt="facebook" />
          </a>
        </div>
        <div className="social-2">
          <a href="https://github.com/aidandf29">
            <img src={images.github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-aidan-daffa/">
            <img src={images.linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="social-3">
          <a href="https://www.instagram.com/aidan_daffa/">
            <img src={images.instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com/BukanMaksudq " id="contact">
            <img src={images.twitter} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
