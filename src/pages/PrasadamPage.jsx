import React,{useEffect,useState} from 'react';
import "../components/prasadampage.css";
import sliderimage from '../assets/slider_img_1.png' 
import DailyOffer from '../components/DailyOffer';
import BookaTable from '../components/BookaTable';
import OurTeam from '../components/PrasadamHome';
import OurTeamNext from '../components/OurTeamNext';
import Count from '../components/Count';
import Download from '../components/Download';
import prasadamreloader from '../assets/prasadamreloader.gif';
import Prasadam from '../components/Prasadam';

export default function PrasadamPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <section style={{height: "100vh",display: "flex", alignItems: "center", justifyContent: "center",}}>
          <img src={prasadamreloader} alt="Loading" className="loading-image" style={{ width: "300px",height:"300px",borderRadius:"50%",backgroundColor:"white"}}/>
        </section>
      ) : (
        <>
       <div className="heroscreendiv w-full md:h-[900px] h-[860px] z-[997] relative flex items-center justify-center ">
          <div className="homescreenrow md:flex justify-content-center">
            <div className="homescreencolumn">
              <div className="banner_text wow fadeInLeft" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInLeft' }}>
                <h3>Satisfy Your Cravings</h3>
                <h1>Delicious Foods With Wonderful Eating</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum fugit minimaet debitis ut distinctio optio.</p>
                <form>
                  <input type="text" placeholder="Search . . ." />
                  <button type="submit" className="commonbtn">search</button>
                </form>
              </div>
            </div>
            <div className="homescreencolumn">
              <div className="banner_img wow fadeInRight" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInRight' }}>
                <div className="homescreenimagediv">
                  <img src={sliderimage} alt="fooditem" className="img-fluid w-100" />
                  {/* <span>
                    35% off
                  </span> */}
                </div>
              </div>
            </div>
          </div>
    </div>
    {/* <DailyOffer/> */}
    <BookaTable/>
    <Prasadam/>
    <OurTeamNext/>
    <Count/>
    <Download/>
      </>
      )}
    
    </>
  );
}