import React from 'react'
import HotelCarausal from "./tour-page-components/HotelCarausal";
import BookingForm from "./tour-page-components/BookingForm";

export default function HotelPageHeroSection() {
  return (
    <div className="bg-hotelBackground-Image w-full md:h-[600px] h-[400px] relative pb-10">
    <div className="w-full h-full  bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="md:text-7xl text-2xl ">GuestHouse/Hotel Booking</h1>
      </div>
    </div>
    <div className="w-full h-[400px]  absolute  md:-bottom-64 -bottom-80 flex md:flex-row flex-col items-center gap-5 md:px-10 px-3">
      <div className="md:w-[60%] w-full h-full">
        <HotelCarausal />
      </div>
      <div className="md:w-[40%] w-full h-full">
        <BookingForm />
      </div>
    </div>
  </div>
  )
}
