import React,{useState} from "react";
import "./booktaxionline.css";
import cabimage from '../assets/booking_car_1-1.png';
import BookNowForm from "./BookNowForm";

export default function BookTaxiOnline() {
       
  const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }

  return (
    <>
    <div className={model?"model open":"model"}>
    <BookNowForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>

    <section className="booktaxionlinesection py-10">
      <div className="booktaxirow">
        <div className="booktaxicolumn1">
          <div className="booktaxicolumnheadingdiv">
            <h3 className="booktaxih3 text-2xl">TAXI BOOKING FORM</h3>
            <h1 className="booktaxih1 text-5xl">Book Your Taxi Online</h1>
          </div>

          <div className="booktaxiinput">
            <div className="booktaxiinputdiv1">
              <span className="wpcf7-form-control wpcf7-radio">
                <span className="wpcf7-list-item first">
                  <input type="radio" name="radio-170" value="STANDARD"/>
                  <span className="wpcf7-list-item-label">STANDARD</span>
                </span>
                <span className="wpcf7-list-item">
                  <input type="radio" name="radio-170" value="BUSINESS" />
                  <span className="wpcf7-list-item-label">BUSINESS</span>
                </span>
                <span className="wpcf7-list-item">
                  <input type="radio" name="radio-170" value="ECONOMY" />
                  <span className="wpcf7-list-item-label">ECONOMY</span>
                </span>
                <span className="wpcf7-list-item">
                  <input type="radio" name="radio-170" value="VIP" />
                  <span className="wpcf7-list-item-label">VIP</span>
                </span>
                <span className="wpcf7-list-item">
                  <input type="radio" name="radio-170" value="MINIVAN" />
                  <span className="wpcf7-list-item-label">MINIVAN</span>
                </span>
                <span className="wpcf7-list-item last">
                  <input type="radio" name="radio-170" value="COMFORT" />
                  <span className="wpcf7-list-item-label">COMFORT</span>
                </span>
              </span>
            </div>

            <div className="booktaxiinputdiv2 pb-6">
              <div className="cabinputdiv">
                <input className="cabinput mx-4" type="text" placeholder="Your Name"/>
                <input className="cabinput mr-4" type="text" name="" id="" placeholder="Phone Number"/>
              </div>

              <div className="cabinputdiv">
              <input className="cabinput mx-4" type="number" placeholder="Number of Passenger"/>
                <input className="cabinput mr-4" type="text" name="" id="" placeholder="Start Destination"/>
              </div>

              <div className="cabinputdiv">
              <input className="cabinput mx-4" type="text" placeholder="End Destination"/>
                <input className="cabinput mr-4" type="date" name="" id="" placeholder="Select Date"/>
              </div>

              <div className="cabinputdiv">
              <input className="cabinput mx-4" type="time" name="" id="" placeholder="Select Time"/>
                <button className="cabbutton w-1/2 mr-4">
                  BOOK TAXI NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="booktaxicolumn2">
          <img
            decoding="async"
            className="carimage"
            src={cabimage}
            alt="booking_car_1 1"
          />
        </div>
      </div>
    </section>
    </>
    
  );
}
