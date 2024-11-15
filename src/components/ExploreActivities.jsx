import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
// import activityimg from '../assets/activity-img-2.jpg';
import './exploreactivity.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import BookNowForm from "./BookNowForm";

export default function ExploreActivities() {
    const [ActivityData, setActivityData] = useState([]);
    const settings = {
        infinite: true,
        speed: 500,
        loop: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      useEffect(() => {
        const firestore = firebase.firestore();
        const contentDataRef = firestore.collection("ExploreActivityData");
        const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
          const newContentData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(newContentData);
          setActivityData(newContentData);
        });
        return () => unsubscribe();
      }, []);

      const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }

  return (
    <>
    <div className={model?"model open":"model"}>
    <BookNowForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>
        <section className='easection'>
        <div className="adidearow">
            <h3 className='adideah3 text-3xl text-center'>Select your activity</h3>
            <h1 className='adideah1 text-5xl text-center font-bold'>Explore Activity</h1>
        </div>

        <div className="earow1 w-4/5 mt-10">
          {
            <Slider {...settings}>
            {
                ActivityData.map((item,index)=>(
                    <>
                    <div className="explorediv md:px-6" key={index}>
                    <div className="exploreinnerdiv border">
                    <div className="exploreimgdiv">
                        <img className='exploreimage' src={item.imageUrl} alt="" />
                    </div>
                    <div className="exploreparadiv mt-4">
                        <h3 className='activityname'>{item.activityname}</h3>
                        <p>Starts from ₹{item.startingprice}</p>
                    </div>
                    <div className="explorebtndiv">
                    <button onClick={openModel}>Book Now</button>
                    </div>
                    </div>
                   
                    </div>
                    </>
                ))
               
            } 
           </Slider>
          }  

        </div>
    </section>
    </>

  )
}
