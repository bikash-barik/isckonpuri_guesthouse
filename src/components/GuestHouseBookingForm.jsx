import React from "react";
import './guesthousebookingform.css';

export default function GuestHouseBookingForm() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto py-10 md:px-0 px-4 max-w-2xl space-y-4">

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Make a Reservation</h1>
        <p className="text-white">Enter your information to book a room</p>
      </div>

      <div className="space-y-4 w-full">

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="first-name">First name</label>
            <input className="bookingforminput" id="first-name" placeholder="Enter your first name" required />
          </div>
          <div  className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="last-name">Last name</label>
            <input className="bookingforminput" id="last-name" placeholder="Enter your last name" required />
          </div>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="email">Email</label>
          <input className="bookingforminput" id="email" placeholder="m@example.com" required type="email" />
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="phone">Phone</label>
          <input className="bookingforminput" id="phone" placeholder="+91 (555) 123-4567" required type="tel" />
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="address">Address</label>
          <input className="bookingforminput" id="address" placeholder="Enter your address" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="check-in">Check-in</label>
            <input className="bookingforminput" id="check-in" required type="date" />
          </div>
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="check-out">Check-out</label>
            <input className="bookingforminput" id="check-out" required type="date" />
          </div>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="guests">Guests</label>
          <select className="bookingforminput" defaultValue="1" id="guests" placeholder="Select an option...">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
          </select>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="location">Which Location Do You want For Stay</label>
          <input className="bookingforminput" id="location" placeholder="Enter the location" required />
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="members">How many Members (Like Child, Adult)</label>
          <input className="bookingforminput" id="members" placeholder="Enter the number of members" required />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="date">Booking Date</label>
            <input className="bookingforminput" id="date" required type="date" />
          </div>
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="price-range">Price Range</label>
            <select className="bookingforminput" defaultValue="0-1000" id="price-range" placeholder="select an option" >
                <option value="0-1000">0-1000</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-3000">2000-3000</option>
                <option value="3000-5000">3000-5000</option>
                <option value="5000-above">5000 and above</option>
            </select>
          </div>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="room-type">Room Type</label>
          <select className="bookingforminput" defaultValue="AC" id="room-type"  placeholder="select an option">
            <option value="AC">AC</option>
              <option value="NON AC">NON AC</option>
          </select>
        </div>

        <button className="w-full bg-orange-500 text-white font-bold py-4 px-4"  type="submit">
          Book Now
        </button>
      </div>
    </div>
  )
}

