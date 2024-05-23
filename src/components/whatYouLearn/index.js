import React from "react";
import "./index.css";

const WhatYouLearn = () => {
  const wylInfo = [
    {
      papers: "3 papers",
      level: "Knowledge Level",
      learnings: [
        "Business and Technology (BT)",
        "Management Accounting (MA)",
        "Financial Accounting (FA)",
      ],
    },
    {},
  ];
  return (
    <div className="wyl-container">
      <h2 className="wyl-heading"> What will you Learn in ACCA? </h2>
      <div className="wyl-cards-container">
        <div className="wyl-each-card-container">
          <div className="wyl-each-card-top">
            <h3>Knowledge Level</h3>
          </div>
          <ol className="wyl-each-card-middle">
            <li>Business and Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ol>
          <div className="wyl-each-card-bottom">
            <p>3 papers</p>
          </div>
        </div>
        <div className="wyl-each-card-container">
          <div className="wyl-each-card-top">
            <h3>Skill Level</h3>
          </div>
          <ol className="wyl-each-card-middle">
            <li>Corporate and Business Law (LW)</li>
            <li>Performance Management (PM)</li>
            <li>Taxation (TX)</li>
            <li>Financial Reporting (FR)</li>
            <li>Audit and Assurance (AA)</li>
            <li>Financial Management (FM)</li>
          </ol>
          <div className="wyl-each-card-bottom">
            <p>6 papers</p>
          </div>
        </div>
        <div className="wyl-each-card-container">
          <div className="wyl-each-card-top">
            <h3>Professional Level</h3>
          </div>
          <ol className="wyl-each-card-middle">
            <p className="list-sub-heading"> Compulsory </p>
            <li>SBL - Strategic Business Leader</li>
            <li>SBR - Strategic Business Reporting</li>
            <p className="list-sub-heading">Two out of the following</p>
            <li>Advanced Financial Management (AFM)</li>
            <li>Advanced Performance Management (APM)</li>
            <li>Advanced Taxation (ATX)</li>
            <li>Advanced Audit and Assurance (AAA)</li>
          </ol>
          <div className="wyl-each-card-bottom">
            <p>4 papers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouLearn;
