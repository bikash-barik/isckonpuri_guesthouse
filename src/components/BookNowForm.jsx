import React from 'react';
import './booknowform.css';
// import { IoMdClose } from "react-icons/io";

export default function BookNowForm() {
  return (
    <section className="booknowection">    
      <div className="booknowrow1">
      <h1 className='booknowheading'>Book Now Form</h1>
      </div>
      <div className="booknowrow">
    
         <div className="booknowcolumninnerdiv">
                <input type="text" className='booknowinput' placeholder='Name'/>
                <input type="text" className='booknowinput' placeholder='Contact Number'/>
                <input type="email" className='booknowinput' placeholder='Email'/>
                <input type="text" className='booknowinput' placeholder='Address'/>
         </div>
                
          <div className="booknowcolumninnerdiv flex flex-col">
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" /> Hotel Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" /> Cab Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" /> Prsadam Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" /> Tour </label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" /> Tourist Guide </label>
          </div>

          <div className="booknowcolumninnerdiv mt-4">
               <input type="submit" className='booknowinputbtn' placeholder='SEND MESSAGE'/>
          </div>
      </div>
    </section>
  )
}
