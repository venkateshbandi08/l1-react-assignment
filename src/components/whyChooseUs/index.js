import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { RiUserLocationFill } from "react-icons/ri";

import "./index.css";

const WhyChooseUs = () => {
  const wcuCards = [
    {
      emoji: <FaChalkboardTeacher />,
      name: "Expert Faculty",
      description:
        "Our qualified Faculty with significant practical experience guide students every step of the way.",
    },
    {
      emoji: <HiUserGroup />,
      name: "Complete Success Package",
      description:
        "Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.",
    },
    {
      emoji: <RiUserLocationFill />,
      name: "Placements",
      description:
        "Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.",
    },
  ];
  return (
    <div className="why-choose-us-section-container">
      <h2 className="wcu-heading"> Why Choose Us ? </h2>
      <ul className="wcu-cards-container">
        {wcuCards.map((eachCard) => (
          <li className="wcu-each-card-container">
            <div className="wcu-image">{eachCard.emoji}</div>
            <h3 className="wcu-name">{eachCard.name}</h3>
            <p className="wcu-description">{eachCard.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
