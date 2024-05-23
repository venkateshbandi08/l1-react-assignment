import React from "react";
import Header from "../header";
import TopSection from "../topSection";
import WhyChooseUs from "../whyChooseUs";
import EligibilityCard from "../eligibility";
import WhatYouLearn from "../whatYouLearn";
import PlacementAssistance from "../assistance";
import KickOff from "../kickOff";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <TopSection />
      <WhyChooseUs />
      <EligibilityCard />
      <WhatYouLearn />
      <PlacementAssistance />
      <KickOff />
    </div>
  );
};

export default Home;
