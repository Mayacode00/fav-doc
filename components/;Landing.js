import React from "react";
import Navbar from "./Navbar";
import video from "../images/video.mp4";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <video autoPlay loop muted id="video">
          <source src={video} type="video/mp4" />
        </video>
        <div className="contents">
          <div className="links">
            <p>Talk to a Doctor from your home...</p>
            <div className="link-sign">
              <Link to="/signUp" className="link">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
