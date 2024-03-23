import React, { useRef,useEffect,useState } from "react";
import { CarausalOneData } from "../Textfiles/webiste-Content";
import { HomeCarausalCardOne } from "./HomeCarausalCardOne ";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LocalSIghtSeen() {
  const [VisitingSpotData, setVisitingSpotData] = useState([]);

  const boxRef = useRef(null);
 

  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("LocalSightSeenData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setVisitingSpotData(newContentData);
    });
    return () => unsubscribe();
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    loop: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
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

  return (
    <div className="w-full h-auto mb-10 pt-8 md:px-16 px:0 md:mb-6">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
      PURI LOCAL SIGHTSEEN
      </h1>
      <div
        ref={boxRef}
        id="carausalContainer"
        className="mt-10"
      >
        {
          <Slider {...settings} >
            {
        VisitingSpotData.length > 0 ?
        VisitingSpotData.map((item, index) => (
          <HomeCarausalCardOne
            key={index}
            imgUrl={item.imageUrl}
            heading={item.localsightseenplacename}
          />
        ))
        :
        CarausalOneData.map((item, index) => (
          <HomeCarausalCardOne
            key={index}
            imgUrl={item.imgurl}
            heading={item.heading}
          />
        ))
        }
          </Slider>
        }
        
      </div>
    </div>
  );
}
