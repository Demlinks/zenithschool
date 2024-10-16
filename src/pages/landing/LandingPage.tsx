import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Welcome from "./welcome/Welcome";
import About from "./about-us/About-us";
import Values from "./our-values/Values";
import Testimonials from "./testimonials/Testimonials";
import Enroll from "./enroll/Enroll";
import Footer from "../../components/footer/Footer";
import Reviews from "./reviews/reviews";

const LandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Welcome/>
      <Reviews/>
      <About/>
      <Values/>
      <Testimonials/>
      <Enroll/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
