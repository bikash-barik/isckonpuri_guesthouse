import React,{useEffect,useState} from 'react';
import './dailyoffer.css';
import './ourteam.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import chefimage from '../assets/chef_3.jpg';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import BookNowForm from "./BookNowForm";

export default function PrasadamHome() {
  const [PrasadamHomeData, setPrasadamHomeData] = useState([]);
  const settings = {
    infinite: true,
    speed: 500,
    loop:true,
    arrows:false,
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
    const contentDataRef = firestore.collection("PrasadamData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setPrasadamHomeData(newContentData);
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

    <section className="team_item pt_95 pb_100 xs_pt_65 xs_pb_70">
      <div className="ourteamrow">
        <div className="row wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="section_heading mb_25">
              <h4>Prasadam</h4>
              <h2>up to 55% off for this day</h2>
            </div>
          </div>
        </div>
{
  <Slider {...settings} className="explorepurislider">

    {
      PrasadamHomeData.map((item,index)=>(
        <>
        <div key={index} className='singleteamdiv'>
        <div className="single_team">
                    <div className="single_team_img">
                        <img src={item.imageUrl} alt="team" className="img-fluid w-100"/>
                    </div>
                    <div className="single_team_text">
                        <h4>{item.prasadname}</h4>
                        <p>₹ {item.prasadprice}</p>
                        {/* <ul className="flex flex-wrap">
                            <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fab fa-behance" aria-hidden="true"></i></a></li>
                        </ul> */}
                       <button className="px-6 py-2 md:mt-2 mt-3 bg-orange-500 capitalize text-white rounded-md" onClick={openModel}>
                       Buy Now
                       </button>
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
  );
}
