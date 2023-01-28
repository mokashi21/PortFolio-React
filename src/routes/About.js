import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
function About() {
  return (
    <div>
      <Navbar />
      <Hero heading="ABOUT" text="I am a Front-End Developer" />
      <Footer />
    </div>
  );
}
export default About;
