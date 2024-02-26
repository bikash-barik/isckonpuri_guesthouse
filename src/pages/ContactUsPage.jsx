import React from 'react';
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { phoneNumber } from "../Textfiles/webiste-Content";
import { email } from "../Textfiles/webiste-Content";
import { address } from "../Textfiles/webiste-Content";
import '../components/contactus.css';

const ContactUsPage = () => {

  return (
    <>
    <section className='contactussection pt-32'>
      <div className="contactusrow1">
      <h1 className='contactusheading'>Contact Us</h1>
      </div>
      <div className="contactusrow">
        
        <div className="contactuscolumn1">
          <h1 className='contactuscolumnheading'>Send us a Message</h1>
          <div className="contactuscolumninnerdiv ">
                <input type="text" className='contactusinput mr-3' placeholder='First Name'/>
                <input type="text" className='contactusinput' placeholder='Last Name'/>
          </div>

          <div className="contactuscolumninnerdiv">
                <input type="email" className='contactusinput mr-3' placeholder='Email'/>
                <input type="text" className='contactusinput' placeholder='Contact Number'/>
          </div>

          <div className="contactuscolumninnerdiv">
                <textarea name="" className='contactusinput' id="" cols="50" rows="10" placeholder='Message'>
                  Message
                </textarea>
          </div>

          <div className="contactuscolumninnerdiv flex justify-end">
               <input type="submit" className='contactusinputbtn' placeholder='SEND MESSAGE'/>
          </div>

        </div>

        <div className="contactuscolumn2">
          

          <section className="w-full md:px-4 md:py-4 space-y-7">
          <h3 className='contactcolumn2heading'>Info</h3>
        <div className="items-center gap-5">
            <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">PHONE NUMBER</h3>
            </div>
            <div className="flex">
              <FaPhoneFlip className="text-white text-3xl py-1 bg-transparent mr-2" />
              <p className="text-white text-lg font-semibold">{phoneNumber}</p>         
            </div>
        </div>

        <div className="items-center gap-5">
          <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">Email</h3>
            </div>
            <div className="flex">
               <MdMarkEmailUnread className="text-white text-3xl py-1 bg-transparent mr-2" />
               <p className="text-white text-lg font-semibold">{email}</p>
            </div>
        </div>

        <div className="items-center gap-5">
          <div className="mb-2">
              <h3 className="text-white text-xl font-semibold">ADDRESS</h3>
            </div>
            <div className="flex">
               <FaLocationDot className="text-white text-3xl py-1 bg-transparent mr-2" />
               <p className="text-white text-lg font-semibold">{address}</p>
            </div>
        </div>

        <ul className="iconmenu">
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://facebook.com/"><i className="fab fa-facebook"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
               </li>
               <li className="iconmenu-item">
                       <a className="elementor-icon" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
               </li>     
        </ul>
      </section>

        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUsPage;
