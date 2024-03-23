import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/chilika-lake.jpg';
import './cabimageslider.css';

export default function CabImageSlider() {

    const settings = {
        infinite: true,
        speed: 1000,
        loop: true,
        arrows: false,
        autoplay: true,
        delay:5000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ], 
      };

  return (
    <div className='cabimagesliderdiv pt-24'>
        <Slider {...settings} className="cabimageslider">
            <div className="cabimagesliderslide">

                <div className="cabsliderimagediv">
                <img className='cabimagesliderimage' src={image1} alt="" />
                </div>
                

                <div className="contentdiv" id='contentdiv1'>

                    <div className="contentdivinner">
                            {/* <h1 className='contentdivheading1'>Taxi Driver for Hire</h1> */}
                            <h1 className='contentdivheading2'>Trusted & Cheapest</h1>
                            <h1 className='contentdivheading3'>Tours for You</h1>

                            <div className="imagesliderbtndiv flex mt-4 gap-10">
                                  <button className='imagesliderbtn1'>Explore Tours</button>
                                  <button className='imagesliderbtn2'>Find a Taxi</button>
                            </div>
                    </div>
                
                </div> 
            </div>

            <div className="cabimagesliderslide">
                <div className="cabsliderimagediv">
                <img className='cabimagesliderimage' src={image1} alt="" />
                </div>

                 <div className="contentdiv" id='contentdiv2'>

                    <div className="contentdivinner">
                            {/* <h1 className='contentdivheading1'>Taxi Driver for Hire</h1> */}
                            <h1 className='contentdivheading2'>Fastest & Cheapest </h1>
                            <h1 className='contentdivheading3'>Cars for You</h1>

                            <div className="imagesliderbtndiv flex mt-4 gap-10">
                                  <button className='imagesliderbtn1'>Explore Tours</button>
                                  <button className='imagesliderbtn2'>Find a Taxi</button>
                            </div>
                    </div>
                
                </div> 
            </div>

            <div className="cabimagesliderslide">
                <div className="cabsliderimagediv">
                <img className='cabimagesliderimage' src={image1} alt="" />
                </div>

                 <div className="contentdiv" id='contentdiv2'>

                    <div className="contentdivinner">
                            {/* <h1 className='contentdivheading1'>Taxi Driver for Hire</h1> */}
                            <h1 className='contentdivheading2'>Trusted & Cheapest</h1>
                            <h1 className='contentdivheading3'>Tours for You</h1>

                            <div className="imagesliderbtndiv flex mt-4 gap-10">
                                  <button className='imagesliderbtn1'>Explore Tours</button>
                                  <button className='imagesliderbtn2'>Find a Taxi</button>
                            </div>
                    </div>
                
                </div> 
            </div>
        </Slider>
    </div>
  )
}
