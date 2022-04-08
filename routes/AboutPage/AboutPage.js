import React from "react";
import "./about.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <div className="about">
        <div className="about-cont">
          <div className="about-image">
            <div className="image-cont"></div>
          </div>
          <div className="about-note">
            <h1>About Us </h1>
            <p>
              Favorite Doctor is a health tech start-up bridging the divide in
              the health care sector.<br></br>
              <br></br> We are determined to be the heroes of health care in
              Nigeria by changing this dysfunctional health care system in
              Nigeria, by allowing people access to medical care and attention
              at their fingertips.<br></br>
              <br></br> We believe that by supporting healthcare providers in
              making better diagnoses and empowering Patients to seek
              personalized and pertinent health advice, we have and will
              continue to provide enhanced robust medical care that meets
              patients' daily health care needs.
            </p>
            <br></br>
            <div className="numbers">
              <div className="one">
                <h1>21</h1>
                <p>Facilities empowered</p>
              </div>
              <div className="one">
                <h1>423</h1>
                <p>Community members</p>
              </div>
              <div className="one">
                <h1>554</h1>
                <p>Patients treated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
