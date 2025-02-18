import React, { useRef } from "react";
import "./Testimonial.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  const Slideforward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const Slidebackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={Slideforward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={Slidebackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />

                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Our mission is to provide a high-quality education that empowers
                students to become critical thinkers, effective communicators,
                and responsible global citizens. We welcome students from
                diverse backgrounds to join our academic community. Our
                admissions process is designed to be transparent and accessible
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />

                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Our mission is to provide a high-quality education that empowers
                students to become critical thinkers, effective communicators,
                and responsible global citizens. We welcome students from
                diverse backgrounds to join our academic community. Our
                admissions process is designed to be transparent and accessible
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />

                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Our mission is to provide a high-quality education that empowers
                students to become critical thinkers, effective communicators,
                and responsible global citizens. We welcome students from
                diverse backgrounds to join our academic community. Our
                admissions process is designed to be transparent and accessible
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />

                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>
                Our mission is to provide a high-quality education that empowers
                students to become critical thinkers, effective communicators,
                and responsible global citizens. We welcome students from
                diverse backgrounds to join our academic community. Our
                admissions process is designed to be transparent and accessible
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
