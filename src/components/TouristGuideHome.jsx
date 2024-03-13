import React from 'react';
import './touristguidehome.css';
// import tghomeimg from '../assets/slider-decor.png';

export default function TouristGuideHome() {
  return (
    <section className='tghomesection pt-20'>
        <div className="tghomerow">
            <div className="tghomecolumn1 flex justify-center">
                <img src="{tghomeimg}" alt="" />
            </div>

            <div className="tgcolumn2 text-center">
                <h3 className='tgcolumn2heading'>Discover the</h3>
            </div>

            <div className="tgcolumn3">
                <h3 className='tgcolumn3heading md:text-7xl font-bold text-center'>Spiritual Journey of Divine Adventure.</h3>
            </div>

            <div className="tgcolumn4 text-center mt-4">
                <h3 className='tgcolumn4heading text-white text-2xl'>Discover divine adventures in nature.</h3>
            </div>

            <div className="tgcolumn5 text-center mt-4">
                <button className='tghomebtn bg-white text-black px-8 py-4 font-bold'>Embark on Divine Journeys.</button>
            </div>

        </div>
    </section>
  )
}
