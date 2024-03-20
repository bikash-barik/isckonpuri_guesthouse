import React, { useState } from "react";
import isckonpurilogo from '../assets/logos/logooooo-removebg-preview-removebg-preview.png';
import { Link} from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import "./navbar.css";
import BookNowForm from "./BookNowForm";
import GuestHouseBookingForm from "./GuestHouseBookingForm";
import PrasadhBookingForm from "./PrasadhBookingForm";
// import GuestHouseBookingForm from "./GuestHouseBookingForm";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpne] = useState(false);
  
  const handleNavbarBackgroud = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", handleNavbarBackgroud);

  const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }

  return (
    <>
    <div className={model?"model open":"model"}>
    <BookNowForm/>
    {/* <PrasadhBookingForm/> */}
    {/* <GuestHouseBookingForm/> */}
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>
    <section className={`topbar ${navbar ? "display-none" : "display-block"}`}>
    <div className="topbarrow flex justify-between">
        <div className="col-xl-6 col-sm-6 col-md-8">
            <ul className="topbar_info flex flex-wrap d-none d-sm-flex px-8">
                <li className="mx-4" ><a href="mailto:example@gmail.com"><i className="fas fa-envelope" aria-hidden="true"></i> info@iskconpuri.com</a>
                </li>
                <li className="d-none d-md-block mx-4"><a href="callto:123456789"><i className="fas fa-phone" aria-hidden="true"></i>
                +91 8114735348</a></li>
            </ul>
        </div>
        <div className="col-xl-6 col-sm-6 col-md-4">
            <ul className="topbar_icon">
                <li className="topbarIconli"><a href="/"><i class="fa-brands fa-facebook"></i></a> </li>
                <li className="topbarIconli"><a href="/"><i className="fab fa-twitter"></i></a> </li>
                <li className="topbarIconli"><a href="/"><i className="fab fa-linkedin-in"></i></a> </li>
                <li className="topbarIconli"><a href="/"><i className="fab fa-behance"></i></a> </li>
            </ul>
        </div>
    </div>
</section>
    <div className={`w-full fixed ${navbar ? "top-0 left-0 transform translate-y-50 transition-transform ease-in-out duration-500" : ""} z-[998]`}>
     
      <div className={`md:flex items-center justify-between  bg-white py-2 md:px-8`}>
        <Link to="/">
        <img className="h-20" src={isckonpurilogo} alt="" />
        </Link>
        <div onClick={() => setOpne(!open)} className="text-3xl md:hidden absolute text-gray-800  right-8 top-6 cursor-pointer">
          {open ? <IoIosClose /> : <IoMdMenu />}
        </div>
        <ul className={` md:flex md:items-center md:mb-0 absolute md:static text-sm md:text-[16px] md:bg-transparent bg-white md:z-auto w-full left-0 md:w-auto z-[-1] pl-4 md:pl-0 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-590px]'} px-0`}>
            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/" onClick={() => setOpne(false)} className="hover:text-red-500">Home</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/prasadam" onClick={() => setOpne(false)}  className="hover:text-red-500">Prasadam</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/shopping" onClick={() => setOpne(false)}  className="hover:text-red-500">Shoping</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/tour" onClick={() => setOpne(false)}  className="hover:text-red-500">Tour</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/room-suites" onClick={() => setOpne(false)}  className="hover:text-red-500">Guest House</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/cab-booking" onClick={() => setOpne(false)}  className="hover:text-red-500">Cab Booking</a>
            </li>

            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/tourist-guide" onClick={() => setOpne(false)}  className="hover:text-red-500">Tourist Guide</a>
            </li> 
            
            <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
              <a href="/contact-us" onClick={() => setOpne(false)}  className="hover:text-red-500">Contact Us</a>
            </li>

          <li className=" md:ml-10 ml-0 md:my-0 my-7 font-semibold" >
          <button className={`px-6 py-2 md:mt-2 mt-3 ${model ? 'bg-red-700' :'bg-orange-500'} capitalize text-white rounded-md`}  onClick={() => { openModel(); setOpne(false); }}>
              Book Now
            </button>
          </li>
        </ul>
        <ul className="menu_icon">
            <li>
              <a className="cart_icon" href="cart_view.html"><i class="fa-solid fa-basket-shopping"></i>
                <span>05</span></a>
            </li>
           <li>
              <a className="cart_icon" href="/login"><i className="fas fa-user" aria-hidden="true"></i></a>
           </li>
        </ul>
        
      </div>
    </div>
    </>
  );
}