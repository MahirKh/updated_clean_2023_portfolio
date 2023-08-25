import React, { useState, useEffect } from "react";
import Modal from "./Modal"; // Update the path to your Modal component
import bike from "../images/Bike.PNG";
import ffl from "../images/FFL_website.png";
import ecomm from "../images/ecomm.png";
import android from "../images/androidApp.png";
import netflix from "../images/netflix_chrome_extension.png";
import pullup from "../images/pullup_mapview.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  const [popup, setPop] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: bike,
      title: "Final Year Project – Voice Activated Bike Turn Signal",
      description:
        "As a vital member of a dynamic 4-person team, I actively collaborated in the conception, design, and development of a cutting-edge voice-activated bike turn signal device, revolutionizing how cyclists communicate their turns with ease. Leveraging Edge Impulse and harnessing audio samples sourced from Google Speech Commands, we successfully crafted a sophisticated machine learning model (MLM) that exhibited remarkable accuracy in detecting voice commands for both left and right turns. Demonstrating our technical prowess, we seamlessly integrated this MLM onto an Arduino Nano 33 BLE board and executed real-time voice command processing using C++. This seamless functionality triggered LED lights, ingeniously providing cyclists with clear, intuitive visual cues while ensuring the safety of both the user and surrounding individuals. Our achievement not only elevated the biking experience but also exemplified the power of innovation and teamwork in pushing the boundaries of modern cycling technology.",
      skills: "Arduino IDE, Edge Impulse, Tensor Flow, C++, GitHub, Git",
      youtube: "https://youtu.be/K29WEbHtcw4",
      github: "",
    },
    {
      src: pullup,
      title: "iOS and Android Parking App",
      description:
        "Led a 4-member team developing an innovative Android and iOS app for streamlined parking space rental. Utilized the MERN stack and Google Cloud for scalability. As front-end lead, integrated Google Maps API, enhancing user engagement by visualizing available parking spaces within the app.",
      skills:
        "Google Cloud, MERN Stack (MongoDB, Express.js, React, Node.js), JavaScript, Expo Framework",
      youtube: "",
      github: "https://github.com/mahimulh/pullup",
    },
    {
      src: android,
      title: "Rotator Cuff Rehabilitation Android App",
      description:
        "The Android-Based Rehabilitation Progress Tracker for Rotator Cuff Injury is an innovative mobile application designed to assist patients in monitoring and improving their rotator cuff rehabilitation journey. By connecting to an ESP32 microcontroller equipped with a force sensor and gyroscope, the application provides real-time feedback, data visualization, and personalized insights to enhance the recovery process. This cutting-edge technology empowers patients and healthcare professionals to collaboratively track progress and optimize rehabilitation strategies.",
      skills: "Java, C++, Android Studio, Arduino IDE",
      youtube:
        "https://www.youtube.com/watch?v=tAUD_VLyRac&ab_channel=MahirKhandaker",
      github: "",
    },
    {
      src: ffl,
      title: "Fit For Life Restaurant Website",
      description:
        "Elevated restaurant profitability by creating a dynamic website showcasing menus, daily deals, and an integrated online ordering system. Utilizing Node.js, I engineered the server infrastructure and achieved seamless deployment on Heroku using Git. This strategic move amplified online sales by 20% monthly and enhanced the restaurant's digital presence.",
      skills: ": HTML, CSS, JavaScript, Node.js, Heroku CLI, GitHub, Git",
      youtube: "",
      github: "https://github.com/MahirKh/FitForLife_Website",
    },
    // Add more image data here...
  ];

  const handleClickOpen = (imageIndex) => {
    setSelectedImage(images[imageIndex]);
    setPop(true);
  };

  const closePopup = () => {
    setPop(false);
  };

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }, [popup]);

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-2">portfolio</h1>
        <div className="center">
          {images.map((image, index) => (
            <div
              className="portfolio-image-box"
              key={index}
              onClick={() => handleClickOpen(index)}
            >
              <img
                className="portfolio-image"
                src={image.src}
                alt={image.title}
              />
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          ))}
        </div>
      </div>

      {popup && selectedImage && (
        <Modal
          imageSrc={selectedImage.src}
          title={selectedImage.title}
          description={selectedImage.description}
          skills={selectedImage.skills}
          youtube={selectedImage.youtube}
          github={selectedImage.github}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default Portfolio;
