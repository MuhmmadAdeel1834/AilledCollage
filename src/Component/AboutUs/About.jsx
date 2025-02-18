import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>
          Our mission is to provide a high-quality education that empowers
          students to become critical thinkers, effective communicators, and
          responsible global citizens
        </p>
        <p>
          We strive to create an engaging learning experience that nurtures
          curiosity, encourages exploration, and prepares students for the
          challenges of the modern world.
        </p>
        <p>
          We welcome students from diverse backgrounds to join our academic
          community. Our admissions process is designed to be transparent and
          accessible. For more information on how to apply, please visit our
          Admissions page.
        </p>
      </div>
    </div>
  );
};

export default About;
