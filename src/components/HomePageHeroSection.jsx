import React from 'react'
import sliderimage from '../assets/prasadapageheroimg.avif' ;
import "../components/homepageherosection.css";

export default function HomePageHeroSection() {
  return (
    <div className="heroscreendiv w-full md:h-[800px] h-[850px] z-[997] relative flex items-center justify-center ">
    <div className="homescreenrow md:flex justify-content-center w-full">
      <div className="homescreencolumn1">
        <div className="banner_text">
          <h3 className='homescreenh3'>Sacred Krishna Flavours.</h3>
          <h1 className='homescreenh1'>Krishna's mercy-filled prasad delights.</h1>
          {/* <p>Experience Divine Comfort at ISKCON Puri Guesthouse – Where Tranquility Meets Hospitality!</p> */}
          <form>
            <input type="text" placeholder="Search . . ." />
            <button type="submit" className="commonbtn">search</button>
          </form>
        </div>
      </div>

      <div className="homescreencolumn homescreencolumn1">
        <div className="banner_img">
          <div className="homescreenimagediv">
            <img src={sliderimage} alt="fooditem" className="img-fluid w-100" />
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
