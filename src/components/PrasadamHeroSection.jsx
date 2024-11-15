import React from 'react'
import sliderimage from '../assets/prasadapageheroimg.avif' ;
import "../components/prasadampage.css";

export default function PrasadamHeroSection() {
  return (
    <div className="prasadamscreendiv w-full md:h-[800px] h-[850px] z-[997] relative flex items-center justify-center ">
    <div className="prasadamscreenrow md:flex justify-content-center w-full">
      <div className="prasadamscreencolumn1">
        <div className="banner_text" >
          <h3 className='prasadamscreenh3'>Sacred Krishna Flavours.</h3>
          <h1 className='prasadamscreenh1'>Krishna's mercy-filled prasad delights.</h1>
          {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio.</p> */}
          <form>
            <input type="text" placeholder="Search . . ." />
            <button type="submit" className="commonbtn">search</button>
          </form>
        </div>
      </div>
      <div className="prasadamscreencolumn1">
        <div className="banner_img ">
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
