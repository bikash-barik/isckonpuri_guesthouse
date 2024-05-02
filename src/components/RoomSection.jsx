import React, { useState } from "react";
import Room from "../assets/Room.png";
// import { FaWifi } from "react-icons/fa";
import { RoomfeaturesSection } from "./RoomfeaturesSection";
import BookNowForm from "./BookNowForm";
import '../components/roomsection.css';
import { IoMdClose } from "react-icons/io";
export default function RoomSection() {

  const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }
  return (
  <>
    <div className={model?"model open":"model"}>
      <BookNowForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}><IoMdClose/></button>
    </div>

    <div className="w-full md:px-10 md:mt-12 h-auto md:mb-8  relative">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
        Rooms & Suits
      </h1>

      {/* main section */}
      <div className="w-full md:w-auto flex md:flex-row flex-col md:space-x-28 md:space-y-0  mt-12 relative">
        <div className=" bg-green-700 md:w-auto w-[100%] overflow-hidden ">
          <img src={Room} alt="" className="md:w-auto  rounded-lg" />
          <div
            className="absolute md:w-[550px] w-[360px]  md:-bottom-14 -bottom-32 md:left-40 ml-0 h-[270px] md:h-[290px] bg-white shadow-2xl
          rounded-tl-[40px] rounded-br-[40px] px-10 md:py-10 py-3
          "
          >
            {/* <h1 className="font-semibold text-2xl capitalize">
              <span className="text-orange-500  font-semibold">₹450</span> / Per
              Night
            </h1> */}
            <p className="text-2xl font-semibold md:mt-3">Family Rooms 5</p>
            <p className="text-gray-800 tracking-wide md:leading-8 mt-2">
            With our expertly crafted designs, quality furnishings, and attention to detail, we're dedicated to creating spaces where families can come together, relax, and make lasting memories.
            </p>

            <button className={`px-6 py-2 md:mt-2 mt-3 ${model ? 'bg-red-700' :'bg-orange-500'} capitalize text-white rounded-md`} onClick={openModel}>
              Book Now
            </button>
          </div>
        </div>
        <div className="md:block hidden md:py-24">
          <RoomfeaturesSection />
        </div>
      </div>

      <div className="mt-32 md:hidden">
        <RoomfeaturesSection />
      </div>
    </div>
    </>
  );
}
