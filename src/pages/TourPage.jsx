import React from "react";
import TourPageHerosection from "../components/tour-page-components/TourPageHerosection";
// import HotelDescription from "../components/tour-page-components/HotelDescription";
// import HotelDescriptionAndPrice from "../components/tour-page-components/HotelDescriptionAndPrice";
// import RoomsCarausalSection from "../components/RoomsCarausalSection";
// import HotelFacilities from "../components/tour-page-components/HotelFacilities";
import PopularPackages from "../components/PopularPackages";
import TourDescription from "../components/TourDescription";


export default function TourPage() {
  return (
    <div className="">
      <TourPageHerosection />
      <TourDescription/>
      {/* <div className="px-4 md:px-24">
        <HotelDescriptionAndPrice />
      </div> */}
      {/* <HotelFacilities/> */}
      <PopularPackages/>
      {/* <RoomsCarausalSection/> */}
      
    </div>
  );
}
