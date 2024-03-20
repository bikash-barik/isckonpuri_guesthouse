import React from "react";
import '../components/homepage.css';
import Search from "./Search";

export default function ProductHerosection() {
  return (
    <div className="homepagediv w-full md:h-[650px] h-[860px] bg-pooja-samanImage bg-cover z-[997] relative flex items-center justify-center ">
      <div className="max-w-7xl md:px-0 px-4">
        <h2 className="md:text-7xl text-3xl text-center mb-4 text-white">
          Welcome to ISKCON PURI
        </h2>
        <h2 className="md:text-7xl text-3xl text-center mb-4 text-white">
          SHOPPING 
        </h2>
        <p className="text-center items-center  text-white md:text-2xl md:mt-4">
         Find Best Deals On Products
        </p>
        <div className="mt-4">
          <Search/>
        </div>
      </div>
    </div>
  );
}