import React,{useEffect,useState} from 'react'
import './download.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC52tM2h6HzGDeJkZmkjgSXtRODVUSUCMo",
    authDomain: "iskconpuri-guesthouse.firebaseapp.com",
    projectId: "iskconpuri-guesthouse",
    storageBucket: "iskconpuri-guesthouse.appspot.com",
    messagingSenderId: "316548638536",
    appId: "1:316548638536:web:e00c16c169032ffda7b57d",
    measurementId: "G-QN23VJ28YT"
};

  
export default function Download() {

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

 const[PrasadamGalleryData,setPrasadamGalleryData]=useState([]);
  console.log(PrasadamGalleryData);
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const storageRef = ref(storage, "Prasadam-Gallery");
    listAll(storageRef)
      .then((result) => {
        const urlsPromises = result.items.map((imageRef) =>
          getDownloadURL(imageRef)
        );
        return Promise.all(urlsPromises);
      })
      .then((urls) => {
        setPrasadamGalleryData(urls);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <section className="download">
        <div className="downloadrow">

            <div className="downloadcolumn1">
                <div className="download_text_bg">
                    <div className="download_text_overlay">
                        <div className="download_text">
                            {/* <h5>₹5.00 Cashback</h5> */}
                            <h2>Easy To Order Our All Food</h2>
                            <ul className="flex flex-wrap">
                                <li>
                                    <a href="/">
                                        {/* <span className="icon"><i className="fab fa-google-play" aria-hidden="true"></i></span> */}
                                        <p>
                                            {/* <span>Available on the</span> */}
                                            <i className="fas fa-phone" aria-hidden="true"></i> 
                                            +91- 8114 735 348
                                        </p>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        {/* <span className="icon"><i className="fab fa-apple" aria-hidden="true"></i></span> */}
                                        <p>
                                            {/* <span>Download on the</span> */}
                                            <i className="fas fa-phone" aria-hidden="true"></i>
                                            +91- 6370 995 573
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="downloadcolumn2">
                <div className="sliderdiv">
                    <Slider {...settings} className="explorepurislider">
                        {
                         PrasadamGalleryData.map((item,index)=>(
                            <>
                            <div key={index}>
                                    <div className="download_slider">
                                      <img src={item} alt="app download" className="imgfluid w-100"/>
                                    </div>
                            </div>
                            </>
                         ))   
                        }
                            
                    </Slider>
                </div>
               
            </div>
        </div>
    </section>
  )
}


