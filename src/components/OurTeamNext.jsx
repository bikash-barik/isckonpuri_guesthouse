import React,{useState} from 'react'
import './ourteamnext.css';
import PrasadhBookingForm from "./PrasadhBookingForm";

export default function OurTeamNext() {
    const[model,setmodel]=useState(false);

    const openModel = ()=>{
      setmodel(true);
    }
  return (
    <>
    <div className={model?"model open":"model"}>
    <PrasadhBookingForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>
    <section className="add_slider">
            <div className="addsliderrow">
                <div className="col-xl-6 col-lg-6">
                    <div className="add_slider_single teamnextcolumn1">
                        <div className="text">
                            {/* <h5>weekly best seller</h5> */}
                            <h2>Travel Prasadam</h2>
                            <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                            <button  onClick={openModel}>Book Now <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="add_slider_single teamnextcolumn2">
                        <div className="text">
                            {/* <h5>daily offer</h5> */}
                            <h2>Jagannath Abhada</h2>
                            <p>Neque porro quisquam est qui dolor ipsum quia dolor sit ametsed.</p>
                            <button  onClick={openModel}>Book Now <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    </>
    
  )
}
