import React, { useEffect, useState } from "react";
import "./dailyoffer.css";
import "./ourteam.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import BookNowForm from "./BookNowForm";

export default function Prasadam() {
  const [PrasadamData, setPrasadamData] = useState([]);

  useEffect(() => {
    const firestore = firebase.firestore();
    const contentDataRef = firestore.collection("PrasadamData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setPrasadamData(newContentData);
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
        <div
          className="row wow fadeInUp"
          data-wow-duration="1s"
          style={{
            visibility: "visible",
            animationDuration: "1s",
            animationName: "fadeInUp",
          }}
        >
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="section_heading mb_25">
              <h4>Prasadam</h4>
              <h2>up to 55% off for this day</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="ourteamrow2">
        {PrasadamData.map((item, index) => (
          <>
            <div key={index} className="singleteamdiv">
              <div className="single_team">
                <div className="single_team_img">
                  <img
                    src={item.imageUrl}
                    alt="team"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="single_team_text">
                  <h4>{item.prasadname}</h4>
                  <p>₹ {item.prasadprice}</p>
                  <button className="px-6 py-2 md:mt-2 mt-3 bg-orange-500 capitalize text-white rounded-md" onClick={openModel}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
    </>
  );
}
