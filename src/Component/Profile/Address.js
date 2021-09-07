import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Address = () => {
  return (
    <div className="contact">
      <p className="mb-5">New York, USA</p>
      <span>
        <a href="https://www.facebook.com" className="px-2">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.facebook.com" className="px-2">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com" className="px-2">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.facebook.com" className="px-2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </span>
    </div>
  );
};

export default Address;
