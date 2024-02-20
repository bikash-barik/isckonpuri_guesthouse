import React from "react";
import { IoSearchOutline } from "react-icons/io5";
// import DatePicker from "./DatePicker";

export default function SearchBar() {
  return (
    <div className="md:h-[110px] h-[290px] w-[350px] md:w-auto   bg-white min-w-7xl rounded-lg md:rounded-full md:gap-7 gap-1 flex md:flex-row flex-col justify-between md:items-center overflow-hidden py-6 md:px-16 px-6  ">
      {/* first section */}
      <div className="">
        <h1 className="md:text-xl font-semibold text-sm">Location</h1>
        <input
          type="text"
          className="outline-none"
          placeholder="Enter your location"
        />
      </div>
      <Outline />

      {/* second section */}

      <div>
        <h1 className="md:text-xl font-semibold text-sm">Check in</h1>
        <input type="date" placeholder="add dates" className="" />
      </div>
      <Outline />
      <div>
        <h1 className="md:text-xl font-semibold text-sm">check out</h1>
        <input type="date" placeholder="add dates" className="" />
      </div>

      <Outline />

      {/* 4th section */}
      <div></div>
      <div className="flex justify-between md:gap-8 items-center">
        <div>
          <h1 className="md:text-xl font-semibold">Guest & Room</h1>
          <p>Add guest and rooms</p>
        </div>
        <div className="">
          <button className="w-12 h-12  rounded-full bg-orange-500 flex justify-center items-center">
            <IoSearchOutline className="text-white font-bold" />
          </button>
        </div>
      </div>

      {/* search icon */}
    </div>
  );
}

export const Outline = () => {
  return (
    <div className=" h-50px] bg-red-600 w-[1px] rounded-full flex overflow-hidden  "></div>
  );
};
