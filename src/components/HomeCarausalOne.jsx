import React, { useRef,useEffect,useState } from "react";
import { FaAngleLeft} from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CarausalOneData } from "../Textfiles/webiste-Content";
import { HomeCarausalCardOne } from "./HomeCarausalCardOne ";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeCarausalOne() {
  const [VisitingSpotData, setVisitingSpotData] = useState([]);

  const boxRef = useRef(null);
  const handlePressPrevious = () => {

    const box = boxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft -= width;
    }
  };

  const handlePressNext = () => {
  
    const box = boxRef.current;
    if (box) {
      const width = box?.clientWidth;
      box.scrollLeft += width;
    }
  };

  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("VisitingSpotData");
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
      Sightseen Tour
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
            heading={item.spotname}
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
      {/* <div className="w-full mt-8 text-center ">
        <button
          onClick={handlePressNext}
          className=" text-center px-4 py-2 border border-black text-orange-500 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none transition-all duration-75"
        >
          <FaAngleRight />
        </button>
        <button
          onClick={handlePressPrevious}
          className=" px-4 py-2 ml-3 border border-black text-orange-500 text-xl font-bold rounded hover:bg-red-600 hover:text-white hover:border-none"
        >
          <FaAngleLeft />
        </button>
      </div> */}
    </div>
  );
}
