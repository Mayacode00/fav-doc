import React from "react";
import "./Home.css";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container-two">
          <div className="landing-note">
            <h1 className="healthy">Keeping You Healthy is Our Pride.</h1>
            <p className="note">
              Get access to quality healthcare from the comfort of your device.
              Get connected to a medical expert swiftly and comfortably.
            </p>
            <div className="group1">
              <p className="chit-chat speak">speak to a Doctor</p>
              <p className="chit-chat chat">chat now</p>
            </div>
          </div>
          <div className="landing-image">
            <div className="box"></div>
            <div className="contacts">
              <p className="emergency">Emergency lines:</p>
              <p>+2348139011252, +23458963214</p>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    
    </>
  );
};

export default Home;
