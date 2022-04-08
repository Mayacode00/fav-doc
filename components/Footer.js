import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="group-contacts">
        <div className="get-access">
          <h1>Favorite Doctor</h1>
          <p>
            Get access to quality healthcare from the comfort of your device.
            Get connected to a medical expert swiftly and comfortably.
          </p>
        </div>
        <div className="footer-contact">
          <h2>Contacts</h2>
          <p>Contact info@favdoctor.com +234(0) 811 0811 820</p>
          <br></br>
          <h2>Socials</h2>
          <div className="socials">
            <h4>
              <FaFacebook size={25} style={{ color: "#ffffff" }} />
            </h4>
            <h4>
              <FaLinkedin
                size={25}
                style={{ color: "#ffffff", marginLeft: "15px" }}
              />
            </h4>
            <h4>
              <FaTwitter
                size={25}
                style={{ color: "#ffffff", marginLeft: "15px" }}
              />
            </h4>
          </div>
        </div>
        <div className="question-box">
          <p>Do you have any question to ask us?</p>
          <textarea type="text" placeholder="type here" rows="7"></textarea>
          <br></br>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
