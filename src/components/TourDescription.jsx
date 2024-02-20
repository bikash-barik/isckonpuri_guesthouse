import React from "react";
import Heading from "./Heading";
// import { TbAirConditioningDisabled } from "react-icons/tb";
// import { MdOutlineSportsGymnastics } from "react-icons/md";
// import { SiInternetexplorer } from "react-icons/si";
// import { LiaCocktailSolid } from "react-icons/lia";
// import { FaWifi } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
// import { SiYourtraveldottv } from "react-icons/si";
import { MdLocalHotel } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { RiGuideFill } from "react-icons/ri";
const data = [
  {
    icon: (
      <FaTicketAlt className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "Tickets",
  },
  // {
  //   icon: <SiYourtraveldottv className="md:text-6xl text-3xl text-gray-400" />,
  //   title: "Travelling",
  // },
  {
    icon: <MdLocalHotel className="md:text-6xl text-3xl text-gray-400" />,
    title: "Accommodation",
  },
  {
    icon: (
      <FaBowlFood className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "Prasad",
  },
  {
    icon: <RiGuideFill className="md:text-6xl text-3xl text-gray-400" />,
    title: "Tourist Guide",
  },
  {
    icon: (
      <FaHandsHelping className="md:text-6xl text-3xl text-gray-400" />
    ),
    title: "Help & Support",
  },

];

const TourDescription = () => {
  return (
    <div className="mt-8 w-full mb-10 md:px-44">
      <div className=" w-full mb-10">
        <Heading SectionHeading="Tour Amenities" />
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

export default TourDescription;
