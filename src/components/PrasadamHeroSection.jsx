import React from 'react'
import sliderimage from '../assets/prasadapageheroimg.avif' ;
import "../components/prasadampage.css";

export default function PrasadamHeroSection() {
  return (
    <div className="prasadamscreendiv w-full md:h-[900px] h-[860px] z-[997] relative flex items-center justify-center ">
    <div className="prasadamscreenrow md:flex justify-content-center">
      <div className="prasadamscreencolumn">
        <div className="banner_text wow fadeInLeft" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}>
          <h3>Sacred Krishna Flavours.</h3>
          <h1>Krishna's mercy-filled prasad delights.</h1>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio.</p> */}
          <form>
            <input type="text" placeholder="Search . . ." />
            <button type="submit" className="commonbtn">search</button>
          </form>
        </div>
      </div>
      <div className="prasadamscreencolumn">
        <div className="banner_img wow fadeInRight" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
          <div className="prasadamscreenimagediv">
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
