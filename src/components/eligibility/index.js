import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { TfiWrite } from "react-icons/tfi";
import { MdOutlineSmsFailed } from "react-icons/md";

import "./index.css";

const EligibilityCard = () => {
  const eligibilies = [
    {
      name: "Levels",
      description: "Three(13 papers))",
      emoji: <SlBookOpen />,
    },
    {
      name: "Duration",
      description: "6-30 months",
      emoji: <SlCalender />,
    },
    {
      name: "Exams",
      description: "Quarterly (Online)",
      emoji: <TfiWrite />,
    },
    {
      name: "Exemptions",
      description: "Upto 9 papers",
      emoji: <MdOutlineSmsFailed />,
    },
  ];
  return (
    <ul className="eligibility-cards-container">
      {eligibilies.map((eachItem) => (
        <li className="each-eligibility-card-container">
          <div className="eligibility-top-container">
            <div className="eligibility-emoji">{eachItem.emoji}</div>
            <h3 className="eligibility-heading"> {eachItem.name} </h3>
          </div>
          <div className="eligibility-bottom-container">
            <p className="eligibility-description"> {eachItem.description} </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EligibilityCard;
