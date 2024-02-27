import React,{useEffect,useState} from 'react'
import BookCapContact from '../components/BookCapContact'
import CabVideo from '../components/CabVideo'
import ServiceTaxi from '../components/ServiceTaxi'
import BookTaxiOnline from '../components/BookTaxiOnline'
// import cabbookingloader from '../assets/cabreloader.gif'
import CabImageSlider from '../components/CabImageSlider'
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
        <BookTaxiOnline/>
        <ServiceTaxi/>
        <CabVideo/>
        <BookCapContact/>
      </>
      {/* )} */}
       
    </div>
  )
}
