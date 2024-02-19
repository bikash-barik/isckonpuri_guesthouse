import React from "react";
import videobg from "../assets/videobg.jpg";
import "./cabvideo.css";

export default function CabVideo() {
  return (
    <section className="cabvideosection">
      <div className="cabvideocolumn1">
        <div className="cabvideocolumninner">
          <h2 className="sec-title mb-35 text-white text-5xl font-bold">
            High
            <span className="fw-light text-theme font-semibold"> comfort</span>
            <br />
            for your <span className="fw-light font-semibold">family</span>
          </h2>

          <div className="footerabovecolumn1 gap-5">
            <div className="info-card_icon justify-start w-12 ">
              <i className="fa fa-phone"></i>
            </div>
            <div className="info-card_content">
              <p className="info-card_text text-xl">Call Us 24/7 Anytime:</p>
              <a
                href="mailto:info@example.com"
                className="info-card_link text-xl"
              >
                +91- 82495 05348
              </a>
            </div>
          </div>
          <button className="cabvideobtn">CONTACT US</button>
        </div>
      </div>

      <div className="cabvideocolumn2">
        <img className="videobgimage" src={videobg} alt="" />
      </div>
    </section>
  );
}
