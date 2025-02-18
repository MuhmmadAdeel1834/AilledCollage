import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Program/Program";
import Tittle from "./Component/Tittle/Tittle";
import About from "./Component/AboutUs/About";
import Campus from "./Component/Campus/Campus";
import Testimonial from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Tittle subtittle="Our Program" tittle="What We Offer" />
        <Program />;
        <About />
        <Tittle subtittle="Gallery" tittle="Campus Photos" />
        <Campus />
        <Tittle subtittle="TESTIMONIAL" tittle="What Student Says" />
        <Testimonial />
        <Tittle subtittle="Contact Us" tittle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
