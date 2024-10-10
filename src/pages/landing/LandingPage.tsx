import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Welcome from "./welcome/Welcome";
import About from "./about-us/About-us";
import Values from "./our-values/Values";
import Testimonials from "./testimonials/Testimonials";
import Enroll from "./enroll/Enroll";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Welcome/>
      <About/>
      <Values/>
      <Testimonials/>
      <Enroll/>
    </div>
  );
};

export default LandingPage;
