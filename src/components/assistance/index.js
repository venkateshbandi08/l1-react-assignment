import React from "react";
import "./index.css";

const PlacementAssistance = () => {
  return (
    <div className="pa-container">
      <h2 className="pa-heading"> 100% Placement Assistance </h2>
      <div className="pa-details-container">
        <div className="pa-each-detail">
          <h4 className="pa-detail-heading"> Resume Building </h4>
          <p className="pa-detail-description">
            We provide career counselling to conducting mock interviews and
            aptitude tests - we will assist you at every step, all the way, we
            make you job ready
          </p>
          <h4 className="pa-detail-heading"> Career Counselling </h4>
          <p className="pa-detail-description">
            1FIN provides professional guidance to help you create an effective
            resume to help you create a lasting impression.
          </p>
          <h4 className="pa-detail-heading"> Jobs </h4>
          <p className="pa-detail-description">
            We will give you an edge over others with our direct corporate
            affiliations which will ensure that you are placed right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementAssistance;
