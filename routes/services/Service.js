import React from "react";
import "./service.css";
import Footer from "../../components/Footer";
import one from "../../images/Vector.png";
import two from "../../images/Vector2.png";
import three from "../../images/Vector3.png";
import consult from "../../images/consult.png";
import booking from "../../images/booking.png";
import notes from "../../images/notes.png";
import logo from "../../images/logo.png";
import google from "../../images/google.png";
import apple from "../../images/apple.png";
import media from "../../images/mediamodifier.png";
import hand from "../../images/hand.png";

const Services = () => {
  return (
    <>
      <div className="service-page">
        <img src={logo} className="background-logo" />
        <div className="service">
          <h1>Why You Should Choose Us</h1>
          <div className="overview">
            <div className="professional">
              <img src={one} className="numbers"/>
              <h4>Premium Healthcare</h4>
              <br></br>
              <p>
                We provide our costumers with personalized health behavioral
                nudging and healthcare cost bonuses
              </p>
            </div>
            <div className="professional">
              <img src={two} className="numbers"/>
              <h4>Professional Doctors</h4>
              <br></br>
              <p>
                We have a list of licensed Doctors and experts to attend to you.
                Our experts are qualified personels in their field of study
              </p>
            </div>
            <div className="professional">
              <img src={three} className="numbers"/>
              <h4>Health Community</h4>
              <br></br>
              <p>
                We have a fast-growing community of health-conscious health
                experts where we share verified medical content and fun-loving
                stories.
              </p>
            </div>
          </div>
          <h1>With Favorite Doctor, You Can: </h1>
          <div className="overview-two">
            <div className="consultation">
              <div className="booking">
                <img src={consult} className="consults"/>
              </div>
              <h4>Make Medical Consultation</h4>
              <br></br>
              <p>
                Here, you can chat, call and video-call your favorite Doctor.
              </p>
            </div>
            <div className="consultation">
              <div className="booking">
                <img src={booking} className="consults"/>
              </div>
              <h4>Make Medical Consultation</h4>
              <br></br>
              <p>
                Book a hospital, diagnostic service, an expert clinic in our
                areas of operation.
              </p>
            </div>
            <div className="consultation">
              <div className="booking">
                <img src={notes} className="consults"/>
              </div>
              <h4>Make Medical Consultation</h4>
              <br></br>
              <p>
                View and Share your medical records to any medical practitioner
                you trust.
              </p>
            </div>
          </div>
          <button>Speak to a Doctor</button>
          <h1 className="diff-h1">
            Talk To A Doctor From The Comfort Of Your Home With Our Mobile App
          </h1>
          <div className="download">
            <div className="store">
              <img src={media} className="media" />
              <h1>Download Our App For Better Experience</h1>
              <div className="phone-store">
                <img src={apple} className="app-store"/>
                <img src={google} className="app-store"/>
              </div>
            </div>
            <img src={hand} className="hand" />
            <div className="appointment">
              <div className="one">
                <div className="bullet"></div>
                <p>Book appointments online</p>
              </div>
              <div className="one">
                <div className="bullet"></div>
                <p>Chat with your Doctor and health team</p>
              </div>
              <div className="one">
                <div className="bullet"></div>
                <p>Get treatment at your finger tip</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
