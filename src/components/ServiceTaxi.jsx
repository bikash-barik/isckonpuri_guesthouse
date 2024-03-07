import React,{useState,useEffect}from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './servicetaxi.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import BookNowForm from "./BookNowForm";

export default function ServiceTaxi() {
  const [ServiceTaxiData, setServiceTaxiData] = useState([]);
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
    const contentDataRef = firestore.collection("TaxiRateData");
    const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
      const newContentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(newContentData);
      setServiceTaxiData(newContentData);
    });
    return () => unsubscribe();
  }, []);

  const[model,setmodel]=useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const openModel = (buttonIndex)=>{
    setmodel(true);
    setActiveButton(buttonIndex);
  }


  return (
    <>
      <div className={model?"model open":"model"}>
    <BookNowForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false);setActiveButton(null)}}>
          &times;
    </button>
    </div>

        <section className="servicetaxisection">
      <div className="servicetaxiheadingdiv">
        <h3 className="servicetaxih3 text-2xl font-bold ">Our Service Taxi</h3>
        <h1 className="servicetaxih1 text-5xl font-bold">Our Taxi Rate</h1>
      </div>
      <div className="servicetaxisliderdiv mt-20">
        {
          <Slider {...settings}>
          {
            ServiceTaxiData.map((item,index)=>(
              <>
              <div key={index} className="col-md-6 col-lg-4 md:px-4 ">
              <div className="taxi-grid">
                <div className="taxi-grid_img flex align-middle justify-center">
                  <img 
                    className="servicetaxiimage"
                    decoding="async"
                    src={item.imageUrl}
                    alt="taxi_2_1 4 1"
                  />
                </div>
                <div className="taxi-grid_content">
                  <div className="taxi-grid_icon">
                  <i class="fa-solid fa-car"></i>
                  </div>
                  <h3 className="taxi-grid_title">
                    <a href="https://themeholy.com/wordpress/taxiar/taxi-details/">
                      {item.taxiname}
                    </a>
                  </h3>
                  <p className="taxi-grid_subtitle">{item.taxilocation}</p>
                  {/* <p className="taxi-grid_info">
                    Price:        <br />
                    <span className="text-white">₹{item.taxiinitialcharge}</span>
                  </p> */}
                  {/* <p className="taxi-grid_info">
                    Additional Kilos:
                    <br />
                    <span className="text-white">₹{item.taxiadditionalkilo}</span>
                  </p>
                  <p className="taxi-grid_info">
                    Per Stopped Trafic:
                    <br />
                    <span className="text-white">₹{item.taxiperstopcharge}</span>
                  </p> */}
                  <button key={index} onClick={() => openModel(index)}
                        className={`th-btn ${activeButton === index ? 'bg-red-700' : 'bg-orange-500'}`}
                  >
                    Book Cab
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
