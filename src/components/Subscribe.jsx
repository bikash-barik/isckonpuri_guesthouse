import React from 'react';
import './subscribe.css';
import clientlogo from '../assets/client-logo-1.png';

export default function Subscribe() {
  return (
    <section className='subsection'>
      <div className="submainrow">
        <div className="subrow1">
            <img src={clientlogo} alt="" />
            <img src={clientlogo} alt="" />
            <img src={clientlogo} alt="" />
            <img src={clientlogo} alt="" />
        </div>

        <div className="subrow2">
                <h3 className='subrow2h3 text-4xl'>Subscribe Now</h3>
                <h1 className='text-4xl font-bold md:text-black text-white'>Get the Latest Updates</h1>

                <input type="text" name="" id="" placeholder='Enter Email'/>

        </div>
      </div>
    </section>
  )
}
