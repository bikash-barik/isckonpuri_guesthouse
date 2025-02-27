import React from "react";
// import Herosection from "../components/Herosection";
import ExploreSection from "../components/ExploreSection";
import ImageContentSection from "../components/ImageContentSection";
// import HomeCarausalOne from "../components/HomeCarausalOne";
import RoomSection from "../components/RoomSection";
// import SocialMediaSection from "../components/SocialMediaSection";
import RoomsCarausalSection from "../components/RoomsCarausalSection";
// import EventSection from "../components/EventSection";
// import NewsLetterSection from "../components/NewsLetterSection";
// import Footer from "../components/Footer";
// import OnScrollRevealComponent from "../animation/Revel";
// import hotelbookingloader from '../assets/hotelbookingreloader.gif';
// import PopularPackages from "../components/PopularPackagesHome";
// import DailyOffer from "../components/DailyOffer";
import ServiceTaxi from "../components/ServiceTaxi";
import OurTeam from "../components/PrasadamHome";
import DailyOffer from "../components/DailyOffer";
// import PrasadamHeroSection from "../components/PrasadamHeroSection";
// import HomePageHeroSection from "../components/HomePageHeroSection";
import PopupMenu from "../components/PopupMenu";
import Home from "../components/Home";

export default function HomePage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);
  return (
    <div className="w-full">
      {/* {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={hotelbookingloader} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : ( */}
        <>
      {/* <Herosection /> */}
      {/* <PrasadamHeroSection/> */}
      <Home/>
      {/* <HomePageHeroSection/> */}
      <OurTeam/>
      <ExploreSection />
      <ImageContentSection />
      {/* <HomeCarausalOne /> */}
      <RoomSection />
      {/* <SocialMediaSection /> */}
      <DailyOffer/>
      <RoomsCarausalSection />
      {/* <DailyOffer/> */}
      <ServiceTaxi/>
      {/* <EventSection /> */}
      {/* <NewsLetterSection /> */}
      </>
      {/* )} */}
      
      {/* <Footer/> */}
      <PopupMenu/>
    </div>
  );
}
