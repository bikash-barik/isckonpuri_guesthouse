import React,{useEffect,useState} from 'react'
// import Herosection from "../components/Herosection";
import Rooms from "../components/Rooms";
import Sortbox from "../components/Sortbox";
// import Footer from "../components/Footer";
import Label from "../components/Label";
import PriceRangeSlider from "../components/PriceRangeSlider";
import RanS from '../components/RanS';
import hotelbookingloader from '../assets/hotelbookingreloader.gif';
// import TourPageHerosection from "../components/tour-page-components/TourPageHerosection";
import HotelDescription from "../components/tour-page-components/HotelDescription";
import HotelDescriptionAndPrice from "../components/tour-page-components/HotelDescriptionAndPrice";
// import RoomsCarausalSection from "../components/RoomsCarausalSection";
import HotelFacilities from "../components/tour-page-components/HotelFacilities";
import HotelPageHeroSection from '../components/HotelPageHeroSection';
const RoomsSuite = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={hotelbookingloader} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : (
        <>
       {/* <Herosection /> */}
       <HotelPageHeroSection />
      <HotelDescription />
      <div className="px-4 md:px-24">
        <HotelDescriptionAndPrice />
      </div>
      <HotelFacilities/>
       <Label />
      <RanS/>
      <div className="w-full flex">
        <div className="w-30%">
          <PriceRangeSlider/>
          <Sortbox />
        </div>
        <div className="mr-10">
          <Rooms />
        </div>
      </div>
      </>
      )}
    </div>
  )
}

export default RoomsSuite;