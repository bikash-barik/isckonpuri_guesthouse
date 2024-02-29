import React,{useState,useEffect} from 'react'
import './adventureidea.css';
// import homeadventureidea from '../assets/home-adventure-idea-01.jpg';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import BookNowForm from "./BookNowForm";

export default function AdventureIdeas() {
    const [HeritageData, setHeritageData] = useState([]);
    useEffect(() => {
        const firestore = firebase.firestore();
        const contentDataRef = firestore.collection("HeritageData");
        const unsubscribe = contentDataRef.onSnapshot((snapshot) => {
          const newContentData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log(newContentData);
          setHeritageData(newContentData);
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
     <section className='adideassection'>
        <div className="adidearow">
            <h3 className='adideah3 text-3xl text-center'>Take Yourself</h3>
            <h1 className='adideah1 text-5xl text-center font-bold'>Explore the Dham's rich heritage</h1>
        </div>
        <div className="adidearow1">

        { 
        <Slider {...settings}>
            {
             HeritageData.map((item,index)=>(
                <>
                <div className="adideacolumn1 mb-6" key={index}>
                <div className="adiimagediv">
                    <img src={item.imageUrl} alt="" />
                </div>

                <div className="adideaparadiv">
                    <h3 className='heritagename'>{item.heritagename}</h3>
                    <p className='heritagedescription'>{item.heritagedescription}</p>
                </div>

                <div className="adideabtndiv">
                    <button onClick={openModel}>Book Now</button>
                </div>
            </div>
            </>
            ))}
        </Slider>   
        }
        </div>    
    </section>
    </>
   
  )
}
