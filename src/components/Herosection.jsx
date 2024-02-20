import React from "react";
// import banner from "../assets/banner_bg.jpg";
// import Navbar from "./Navbar";
import {
  HerosectionHeading,
  HerosectionSubHeading,
} from "../Textfiles/webiste-Content";
import SearchBar from "./SearchBar";
import { HeroSectioncardData } from "../Textfiles/webiste-Content";
import '../components/homepage.css';

// const cardData = [
//   {
//     imageUrl: "./images/imageOne.png",
//     firstHeading: "no credit card",
//     secondHeading: "Must required",
//   },
//   {
//     imageUrl: "./images/imageTwo.png",
//     firstHeading: "Money Back",
//     secondHeading: "100% Guarantee",
//   },
//   {
//     imageUrl: "./images/imageThree.png",
//     firstHeading: "Best Price",
//     secondHeading: "Good Discount",
//   },
//   {
//     imageUrl: "./images/imageFour.png",
//     firstHeading: "Customer care",
//     secondHeading: "24/7 free Support",
//   },
// ];

export default function Herosection() {
  return (
    <div className="homepagediv w-full md:h-[900px] h-[860px] bg-hero-background bg-cover z-[997] relative flex items-center justify-center ">
      <div className="max-w-7xl md:px-0 px-4 pt-32">
        <h1 className="md:text-7xl text-3xl text-center mb-4 text-white">
          {HerosectionHeading}
        </h1>
        <p className="text-center items-center  text-white md:text-2xl md:mt-4">
          {HerosectionSubHeading}
        </p>
        <div className="mt-4">
          <SearchBar />
        </div>
        <div className="md:mt-32 mt-10 grid md:grid-cols-4 grid-cols-2 md:gap-9 gap-6">
          {HeroSectioncardData.map((item, index) => {
            return (
              <HeroSectionCard
                key={index}
                imgUrl={item.imageUrl}
                heading={item.firstHeading}
                subHeading={item.secondHeading}
              />
            );
          })}
          <HeroSectionCard />
        </div>
      </div>
    </div>
  );
}

export const HeroSectionCard = ({ imgUrl, heading, subHeading }) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4">
      <div className="transition-all duration-300">
        <img src={imgUrl} alt="" className="md:h-auto h-8" />
      </div>
      <div className="items-center text-white">
        <h1 className="md:text-xl text-sm font-semibold uppercase ">
          {heading}
        </h1>
        <h1 className="md:text-2xl font-semibold capitalize">{subHeading}</h1>
      </div>
    </div>
  );
};
