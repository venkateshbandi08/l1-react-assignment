import React, { useState } from "react";
import "./index.css";
import SubmitForm from "../submitForm";
import { Modal, Button } from "react-bootstrap";

const KickOff = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRequestCallbackClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="top-section-container">
      <div className="top-section-left-container-kickOff">
        <h2 className="top-section-heading">
          Kick off your ACCA Prep Journey with IndigoLearn
        </h2>
        <p className="top-section-description">
          Register to find all the Free courses that are available. And click on
          Request Callback to resolve your doubts.
        </p>
        <div className="top-section-buttons-container-large">
          <button
            className="btn btn-danger btn-style"
            onClick={handleRequestCallbackClick}
          >
            Request Call Back
          </button>
        </div>
      </div>
      <div className="top-section-right-container">
        <SubmitForm />
      </div>
      <div className="top-section-buttons-container-small">
        <button
          className="btn btn-danger btn-style"
          onClick={handleRequestCallbackClick}
        >
          Request Call Back
        </button>
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

export default KickOff;
