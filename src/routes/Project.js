import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PriceCard from "../components/PriceCard";
import Worker from "../components/Worker";
function Project() {
  return (
    <div>
      <Navbar />
      <Hero heading="PROJECTS" text="Some of My Recent Projects" />
      <Worker />
      <PriceCard />
      <Footer />
    </div>
  );
}

export default Project;
