import React, { useState, useEffect } from "react";
import "./popularpackage.css";
import Heading from "./Heading";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";

export default function PopularPackagesHome() {
  const [PopularPackagesData, setPopularPackagesData] = useState([]);
  const navigate = useNavigate();

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

      <div className="packagesrowtour">
        {
            PopularPackagesData.map((item, index) => (
              <>
                <div key={index} className="packagesinnercolumn1 packagescolumntour pb-6" onClick={() => handlePackageClick(item)}>
                  <div className="packagescolumninner">
                    <div className="packagesinnercolumnimagediv">
                      <img className="popularpackageimg" src={item.imageUrl} alt={item.location} />
                    </div>

                    <div className="packagesinnercolumnparadiv">
                      <div className="titlediv">
                        <div className="titleparadiv">{item.location}</div>
                        {/* <div className="titlepricediv">₹{item.price}</div> */}
                      </div>
                      {/* <p className="packagestiming">
                        <i className="fa fa-clock"></i> {item.startdate} -{" "}
                        {item.enddate}
                      </p> */}
                      <div className="packagesbtndiv">
                      <button onClick={() => handlePackageClick(item)}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))
            }
      </div>
    </section>
  );
}
