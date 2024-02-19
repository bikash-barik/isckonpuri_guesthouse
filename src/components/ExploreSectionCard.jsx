import React from "react";
import './explorecard.css';

export const ExploreSectioncard = ({ heading, imgurl, description }) => {
  return (
    <div className="w-auto md:h-[150px] 
    hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-in-out
    md:mt-0 mt-2 flex md:flex-row flex-col items-center md:space-x-5 cursor-pointer">
      <div className="">
        <img src={imgurl} alt="" className="explorecardimage cursor-pointer rounded-md" />
      </div>
      <div className="md:text-left md:w-auto w-full text-center">
        <h1 className="text-xl font-semibold ">{heading}</h1>
        <p className="explorecardpara md:max-w-[240px] tracking-wider mt-2 text-xs md:text-[15px]">
          {description}
        </p>
      </div>
    </div>
  );
};
