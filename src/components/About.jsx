import React from "react";
import {
  HerosectionHeadingAbout,
  HerosectionSubHeadingAbout,
} from "../Textfiles/webiste-Content";
import "./about.css";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="max-w-7xl md:px-0 px-4">
        <p className="headingg">{HerosectionSubHeadingAbout}</p>
        <h1 className="subheadingg">{HerosectionHeadingAbout}</h1>
      </div>
      <div className="aboutus">
        <div className="about-text">
          <div className="child1">
            <h2>Everything.</h2>
            <p>Right where you need it.</p>
          </div>
          <div className="child2">
            <p>
              A wonderful serenity has taken possession of my entire soul charm,
              like these so sweet mornings of spring which I enjoy with mines
              whole heart. I feel charm of existence in this spot, of souls like
              mine. I am so happy, dear.
            </p>
          </div>
          <div className="child2">
            <p>
              When, while the lovely valley teems with vapour around me, the
              upper surface of the impenetrable foliage of my trees, and but a
              few stray gleams steal into the inner sanctuar.
            </p>
          </div>
        </div>
        <div className="about-feature">
          <div className="feature1">
            <img
              src="https://gracious-panini-f06fc2.netlify.app/static/media/AboutUs1.975989ab.png"
              alt=""
            />
            <div>
              <h3>Coffee in Malmö</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
          <div className="feature2">
            <div>
              <h3>Relax Zone</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <img
              src="https://gracious-panini-f06fc2.netlify.app/static/media/AboutUs2.72eb27c5.png"
              alt=""
            />
          </div>
          <div className="feature3">
            <img
              src="https://gracious-panini-f06fc2.netlify.app/static/media/AboutUs3.7568cde2.png"
              alt=""
            />
            <div className="textt">
              <h3>Luxury Bath</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
