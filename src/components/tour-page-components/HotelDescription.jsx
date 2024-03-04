import React from "react";
import Heading from "../Heading";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { SiInternetexplorer } from "react-icons/si";
import { LiaCocktailSolid } from "react-icons/lia";
import { FaWifi } from "react-icons/fa6";

const data = [
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: <FaWifi className="md:text-6xl text-3xl text-gray-400" />,
    title: "Free wifi",
  },
  {
    icon: <SiInternetexplorer className="md:text-6xl text-3xl text-gray-400" />,
    title: "Internet",
  },
  {
    icon: (
      <MdOutlineSportsGymnastics className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "Free Gym",
  },
  {
    icon: <LiaCocktailSolid className="md:text-6xl text-3xl text-gray-400" />,
    title: "cocktail",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
  {
    icon: (
      <TbAirConditioningDisabled className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "AC ROOM",
  },
];

const HotelDescription = () => {
  return (
    <div className="w-full mt-10 mb-10 md:px-44">
      <div className=" w-full mb-10">
        <Heading SectionHeading="Hotel Amenities" />
      </div>
      <div className="flex md:mt-12 items-center md:gap-40 w-full overflow-x-scroll scrollbar-hide ">
        {data.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-center flex-col min-w-[100px] ">
              <div className="ml-5">{item.icon}</div>
              <div className="ml-4">
                <h1 className="md:text-[17px] mt-3 w-full text-xs font-semibold text-gray-600">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDescription;
