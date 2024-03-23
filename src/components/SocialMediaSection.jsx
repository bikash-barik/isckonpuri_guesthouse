import React,{useEffect,useState} from "react";
import { InstagramCardData } from "../Textfiles/webiste-Content";
import { SocialMediaCard } from "./SocialMediaCard";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SocialMediaSection() {
  const [ExplorePlaceData, setExplorePlaceData] = useState([]);
  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("ExplorePlaceData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setExplorePlaceData(newContentData);
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
    <div className="w-full h-auto md:mb-10 mb-2 border md:pt-20">
      <h1 className="text-4xl underline decoration-orange-500 w-full text-center tracking-wide">
      ENJOY OUR ODISHA
      </h1>
      <div className="flex justify-center items-center">
      <div className="w-11/12 mt-8">
      <Slider {...settings} >
        {
          ExplorePlaceData.length > 0 ?
          ExplorePlaceData.map((item,index) =>{
            return <SocialMediaCard key={index} imgUrl={item.imageUrl} placename={item.placename} />
        })
        :
            InstagramCardData.map((item,index) =>{
                return <SocialMediaCard key={index} imgUrl={item.imgurl} placename={item.placename}/>
            })
        }
       </Slider>
      </div>
      </div>
      
    </div>
  );
}


