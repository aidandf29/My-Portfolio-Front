import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import "./Footer.scss";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
      >
        &copy; {new Date().getFullYear()} Copyright: MADJ{" "}
      </div>
    </MDBFooter>
  );
};

export default Footer;

//https://www.youtube.com/watch?v=3HNyXCPDQ7Q
