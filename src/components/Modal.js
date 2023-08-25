import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Modal = ({
  imageSrc,
  title,
  description,
  skills,
  youtube,
  github,
  onClose,
}) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="overlay">
      <div className="popup" ref={modalRef}>
        <div className="popup-header">
          <h1>{title}</h1>
          <h1 id="closeButton" onClick={onClose}>
            X
          </h1>
        </div>
        <div className="modalContent">
          <div className="imageContainer">
            <img src={imageSrc} className="bgImage" />
          </div>
          <div>
            <p>{description}</p>
            <p>Skills: {skills}</p>
            {youtube && (
              <p>
                YouTube Link: <a href={youtube}>{youtube}</a>
              </p>
            )}
            {github && (
              <p>
                GitHub Link: <a href={github}>{github}</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
