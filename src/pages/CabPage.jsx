import React from 'react'
import BookCapContact from '../components/BookCapContact'
import CabVideo from '../components/CabVideo'
import ServiceTaxi from '../components/ServiceTaxi'
import BookTaxiOnline from '../components/BookTaxiOnline'
// import cabbookingloader from '../assets/cabreloader.gif'
import CabImageSlider from '../components/CabImageSlider';
import SocialMediaSection from "../components/SocialMediaSection";
import HomeCarausalOne from "../components/HomeCarausalOne";
import TourDescription from "../components/TourDescription";
import PopularPackages from "../components/PopularPackagesHome";
import LocalSIghtSeen from '../components/LocalSightSeen'
export default function CabPage() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
        {/* {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={cabbookingloader} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : ( */}
        <>
        <CabImageSlider/>
        <TourDescription/>
        <SocialMediaSection/>
        <PopularPackages/>
        <HomeCarausalOne />
        <LocalSIghtSeen/>
        <ServiceTaxi/>
        <BookTaxiOnline/>
        <CabVideo/>
        <BookCapContact/>
      </>
      {/* )} */}
       
    </div>
  )
}
