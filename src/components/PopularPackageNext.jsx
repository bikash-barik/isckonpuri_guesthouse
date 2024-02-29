import React,{useState} from 'react'
// import packages1 from '../assets/packages1.jpg';
import './packagesnext.css';
// import { FaLocationDot } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import BookNowForm from './BookNowForm';

export default function PopularPackageNext() {
  const location = useLocation();
  const packageData = location.state?.packageData || {};

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
    <section className='packagesnextsection mt-28'>

        <div className="packagesnextinnerdiv">
        <div className="packagesnextimagediv">
        <img  className='packagesnextimg w-full' src={packageData.imageUrl} alt="" />
      </div>

      <div className="packagesnextdescription">
        <p><i className="fa fa-clock"></i> Duration: {packageData.startdate} - {packageData.enddate}</p>
        <p><i className="fa fa-clock"></i> Location : {packageData.location}</p>
        <p><i className="fa fa-clock"></i> Available Seat: {packageData.availableseats}</p>
        <p><i className="fa fa-clock"></i> Price: ₹{packageData.price}</p>
        <button className={`packagesnextbtn ${model ? 'bg-red-700' : 'bg-orange-500'}`} onClick={openModel}>Buy Now</button>
      </div>

      <div className="packagesnextquote">
        <p>Visit Dham</p>
      </div>

      <div className="packagesnexttablediv">

      </div>

      <div className="packagesnextparadiv">
        <p className='font-bold'>Day 1</p>
        <p>{packageData.day1}</p>
        
        <p className='font-bold'>Day 2</p>
        <p>{packageData.day2}</p>

        <p className='font-bold'>Day 3</p>
        <p>{packageData.day3}</p>

        <p className='font-bold'>Day 4</p>
        <p>{packageData.day4}</p>

      </div>
        </div>
      
    </section>
    </>
    
  )
}
