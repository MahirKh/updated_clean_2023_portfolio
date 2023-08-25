import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            {/* Address */}
            <div className="d-flex">
              <p>Hamilton, Ontario, Canada</p>
            </div>
            {/* Number */}
            <div className="d-flex">
              <a href="tel:905-920-2957">(905) 920-2957</a>
            </div>
            {/* email */}
            <div className="d-flex">
              <a href="mailto:khandakm@mcmaster.ca">khandakm@mcmaster.ca</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
                <br />
                <a className="footer-nav">Experience</a>
              </div>
              <div className="col">
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <div className="socialMedia">
                <a href="https://www.linkedin.com/in/mahir-khandaker/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/MahirKh">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:khandakm@mcmaster.ca">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
