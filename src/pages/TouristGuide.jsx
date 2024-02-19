import React,{useState,useEffect} from 'react'
import TouristGuideHome from '../components/TouristGuideHome'
import AdventureIdeas from '../components/AdventureIdeas'
import ExploreActivities from '../components/ExploreActivities'
import NumberCounter from '../components/NumberCounter'
import Subscribe from '../components/Subscribe';
import touristguideloader from '../assets/touristguidereloader.gif'

export default function TouristGuide() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div>
       {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={touristguideloader} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : (
        <>
      <TouristGuideHome/>
      <AdventureIdeas/>
      <ExploreActivities/>
      <NumberCounter/>
      <Subscribe/>
      </>
      )}
     
    </div>
  )
}
