import React, { useState } from "react";
import "./index.css";
import { FaUserFriends } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button
import SubmitForm from "../submitForm";

const TopSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestCallbackClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const topSectionParts = [
    {
      name: "Registered Users",
      count: "3,20,422",
      emoji: <FaUserFriends />,
    },
    {
      name: "Courses Enrolled",
      count: "99,237",
      emoji: <IoBookSharp />,
    },
    {
      name: "Minutes Watched",
      count: "4,69,07,911",
      emoji: <MdOutlineOndemandVideo />,
    },
    {
      name: "Faculty",
      count: "8 Experts",
      emoji: <FaPersonCircleCheck />,
    },
  ];

  return (
    <div className="top-section-container">
      <div className="top-section-left-container">
        <h2 className="top-section-heading"> Become ACCA in 18 months </h2>
        <p className="top-section-description">
          Acquire globally recognized accountancy qualification, ACCA (also
          called as Global CA), and get placed in top MNCs & Big4s. Acquire
          globally recognized accountancy qualification, ACCA (also called as
          Global CA), and get placed in top MNCs & Big4s.
        </p>
        <ul className="top-section-parts-container">
          {topSectionParts.map((eachPart) => (
            <li className="top-section-each-part-container" key={eachPart.name}>
              <div className="top-section-each-part-emoji">
                {eachPart.emoji}
              </div>
              <div className="top-section-each-part-details-container">
                <p className="top-section-each-part-name"> {eachPart.name} </p>
                <p className="top-section-each-part-count">{eachPart.count}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="top-section-buttons-container">
          <button className="btn btn-primary button-style btn-style-color">
            DOWNLOAD BROCHURE
          </button>
          <button
            className="btn btn-danger btn-style"
            onClick={handleRequestCallbackClick}
          >
            Request call back
          </button>
        </div>
      </div>
      <div className="top-section-right-container">
        <SubmitForm />
      </div>
      <Modal show={isModalOpen} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Call</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your call request has been successful.</p>
          <form>
            <Button onClick={handleModalClose}>Close</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TopSection;
