import React from 'react'

export default function PrasadhBookingForm() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto my-auto mt-10 md:px-4 px-4 max-w-3xl space-y-4 border p-4">

    <div className="space-y-2 text-center">
      <h1 className="text-3xl text-white font-bold">Food Booking Form</h1>
      <p className="text-white">Enter your information to book a meal</p>
    </div>

    <div className="space-y-4 w-full">

      <div className="grid grid-cols-2 gap-4">

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="name">Name</label>
          <input className="bookingforminput" id="name" placeholder="Enter your name" required />
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="mobile">Mobile</label>
          <input className="bookingforminput" id="mobile" placeholder="+1 (555) 123-4567" required type="tel" />
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="address">Address</label>
        <input className="bookingforminput" id="address" placeholder="Enter your address" required />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="email">Email</label>
        <input className="bookingforminput" id="email" placeholder="m@example.com" required type="email" />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="plates">How many Plates</label>
        <input className="bookingforminput" id="plates" placeholder="Enter the number of plates" required type="number" />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel">Home Time Do you want</label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="breakfast">Breakfast</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="lunch">Lunch</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="dinner">Dinner</label>
          </div>
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="booking-date">Date You want to Book</label>
        <input className="bookingforminput" id="booking-date" required type="date" />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel">Price Range</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="range-1">0-1000</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="range-2">1000-2000</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="range-3">2000-3000</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="range-4">3000-5000</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="breakfast" />
            <label className="bookingformlabel" htmlFor="range-5">5000 and above</label>
          </div>
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="current-location">Your Current staying location</label>
        <input className="bookingforminput" id="current-location" placeholder="Enter your current staying location" required />
      </div>

      <button className="w-full bg-orange-500 text-white font-bold py-4 px-4"  type="submit">
        Book Now
      </button>
    </div>
  </div>
  )
}
