import React from 'react'
import sliderimage from '../assets/Lord.jpg' ;
import "../components/homepageherosection.css";

export default function HomePageHeroSection() {
  return (
    <div className="heroscreendiv w-full md:h-[900px] h-[860px] z-[997] relative flex items-center justify-center ">
    <div className="homescreenrow md:flex justify-content-center">
      <div className="homescreencolumn">
        <div className="banner_text wow fadeInLeft" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}>
          <h3>Sacred Serenity</h3>
          <h1>Welcome to ISKCON PURI Guest House</h1>
          <p>Experience Divine Comfort at ISKCON Puri Guesthouse – Where Tranquility Meets Hospitality!</p>
          <form>
            <input type="text" placeholder="Search . . ." />
            <button type="submit" className="commonbtn">search</button>
          </form>
        </div>
      </div>
      <div className="homescreencolumn">
        <div className="banner_img wow fadeInRight" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
          <div className="homescreenimagediv">
            <img src={sliderimage} alt="fooditem" className="img-fluid w-100" />
            {/* <span>
              35% off
            </span> */}
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
