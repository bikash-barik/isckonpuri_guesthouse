import React, { useState, useEffect } from 'react';
import './home.css'
export default function ImageSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % (slides.length > 0 ? slides.length : 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slides.length]);


  const currentImageUrl = slides.length > 0 ? slides[currentSlide] : '' ;
  return (
    <div className='imageslider'>
      <img className='sliderimage' src={currentImageUrl} alt="" />
    </div>
  );
}
