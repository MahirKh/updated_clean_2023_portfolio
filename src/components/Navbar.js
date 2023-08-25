import React from "react";
// import logo from "../FFL_Logo.png";
import { Link } from "react-scroll";
//React FOINTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav id="mainNavbar" className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link
          className="navbar-brand"
          smooth={true}
          to="home"
          href="#"
          duration={200}
        >
          Mahir Khandaker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link
                smooth={true}
                to="home"
                offset={-50}
                className="nav-link"
                href="#"
                duration={250}
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-50}
                className="nav-link"
                href="#"
                duration={250}
              >
                about me
              </Link>
            </li>
            {/* <li className="nav-item">
                            <Link  smooth={true} to="services"offset={-50} className="nav-link" href="#">services</Link>
                        </li> */}
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-50}
                className="nav-link"
                href="#"
                duration={250}
              >
                experiences
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-50}
                className="nav-link"
                href="#"
                duration={250}
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contact"
                offset={-50}
                className="nav-link"
                href="#"
                duration={250}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
