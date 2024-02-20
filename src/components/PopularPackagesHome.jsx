import React, { useState, useEffect } from "react";
import "./popularpackage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./Heading";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";

export default function PopularPackagesHome() {
  const [PopularPackagesData, setPopularPackagesData] = useState([]);
  const navigate = useNavigate();

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
    const contentDataRef = firestore.collection("PopularPackagesData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setPopularPackagesData(newContentData);
    });
    return () => unsubscribe();
  }, []);

  const handlePackageClick = (item) => {
    navigate(`/packages-next/₹{item.location}`, { state: { packageData: item } });
  };

  return (
    <section className="packagessection mt-20">
      <div className="packagesrow1 mb-10">
        <Heading SectionHeading="Dham Tour Places" />
      </div>

      <div className="packagesrow2">
        {
          <Slider {...settings} className="explorepurislider">
            {
            PopularPackagesData.map((item, index) => (
              <>
                <div key={index} className="packagesinnercolumn1 pb-6" onClick={() => handlePackageClick(item)}>
                  <div className="packagescolumninner">
                    <div className="packagesinnercolumnimagediv">
                      <img className="popularpackageimg" src={item.imageUrl} alt={item.location} />
                    </div>

                    <div className="packagesinnercolumnparadiv">
                      <div className="titlediv">
                        <div className="titleparadiv">{item.location}</div>
                        <div className="titlepricediv">₹{item.price}</div>
                      </div>
                      <p className="packagestiming">
                      <i class="fa-solid fa-clock"></i> {item.startdate} -{" "}
                        {item.enddate}
                      </p>
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
  );
}
