import React from "react";
import { FaRegSquare } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";

export default function HotelDescriptionAndPrice() {
  return (
    <div className="w-full md:mt-16 my-10 md:h-[150px] h-[160px] md:pt-0 pt-3 bg-white shadow-md border border-gray-200 rounded-lg flex md:flex-row flex-col overflow-hidden md:pl-6">
      <div className="md:w-[75%] w-full justify-around flex items-center mb-2">
         <div className="flex md:flex-row md:p-0  flex-col min-w-[100px]  justify-center items-center gap-5">
            <FaRegSquare className="md:text-5xl text-3xl text-orange-500" />
            <p className="capitalize md:text-xl text-sm text-gray-600 ">199 sq.ft</p>
         </div>
         <div className="flex md:flex-row flex-col items-center gap-5 min-w-[100px]">
            <IoBedOutline className="md:text-5xl text-3xl text-orange-500" />
            <p className="capitalize md:text-xl text-sm text-gray-600 ">Double bed</p>
         </div>
         <div className="flex md:flex-row flex-col items-center gap-5 min-w-[100px]">
            <LuBath className="md:text-5xl text-3xl text-orange-500" />
            <p className="capitalize md:text-xl text-sm text-gray-600 ">2 bath rooms</p>
         </div>

         

         
      </div>
      <div className="md:w-[25%] w-full md:mt-0 h-[160px] py-2 bg-orange-500 flex items-center justify-center">
        <div>
          <p className="uppercase text-xl text-white">price</p>
          <p className="capitalize md:text-3xl text-2xl text-white font-semibold">₹5999.00 night</p>
        </div>
      </div>
    </div>
  );
}
