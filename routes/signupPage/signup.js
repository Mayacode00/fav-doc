import React from "react";
import "./signup.css";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signup-page">
        <div className="signup">
          <h1>Sign Up As:</h1>
          <div className="signing">
            <Link to="/Favuser" className="button">
              Favorite User
            </Link>
            <Link to="/Favdoc" className="button">
              Doctor
            </Link>
          </div>
          <p>
            We are determined to be the heroes of health care in Nigeria by
            changing this dysfunctional health care system in Nigeria, by
            allowing people access to medical care and attention at their
            fingertips.<br></br> <br></br>We believe that by supporting
            healthcare providers in making better diagnoses and empowering
            Patients to seek personalized and pertinent health advice, we have
            and will continue to provide enhanced robust medical care that meets
            patients' daily health care needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
