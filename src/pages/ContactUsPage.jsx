import React,{useState} from 'react';
import { FaPhoneFlip } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { phoneNumber } from "../Textfiles/webiste-Content";
import { email } from "../Textfiles/webiste-Content";
import { address } from "../Textfiles/webiste-Content";
import '../components/contactus.css';
import axios from 'axios';
import loadingImage from '../assets/hotelbookingreloader.gif';

const ContactUsPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});
  
  const [firstName,setfirstName] = useState('');
  const [lastName,setlastName] = useState('');
  const [emailAddress,setEmailAddress] = useState("");
  const [contactNumber,setContactNumber] = useState('');
  const [contactMessage,setContactMessage] = useState('');

  const [errors, setErrors] = useState({});

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[\d+\-\s()]*$/;


    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    }


    if (!contactNumber) {
      newErrors.contactNumber = 'Mobile Number is required';
    } else if (!phonePattern.test(contactNumber)) {
      newErrors.contactNumber = 'Please enter correct Correct Mobile Number';
    }

    if (!emailAddress) {
      newErrors.emailAddress = 'Email is required';
    } else if (!emailPattern.test(emailAddress)) {
      newErrors.emailAddress = 'Please enter your Institute Email ID';
    }

    if (!contactMessage) {
      newErrors.contactMessage = 'Message is required';
    }

   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const submitContactUsForm = async (e) =>{
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      contactNumber,
      emailAddress,
      contactMessage,
    };

    if(validation()){
      try {
        setLoading(true);
        setMessage({text:"Wait Until Your Data is Submitted!..."})

        await axios.post("https://iskconpuriguesthouse-backend.onrender.com/ContactUsForm", formData);
        // await fetch("http://localhost:5500/BookNowForm", {method: "POST", body: formData});
        setfirstName("");
        setlastName("");
        setEmailAddress("")
        setContactNumber("");
        setContactMessage('');
        setMessage({ type: 'success', text: 'Data submitted successfully!' });
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } catch (error) {
        setMessage({ type: 'error', text: error });
        setTimeout(() => {
         setLoading(false);
       }, 5000);
      }
    }
    else{
      alert("All the fields are required...")
    }
  }

  return (
    <>
     {
      loading ?
      <section
      style={{
        height: "90vh",
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={loadingImage}
        alt="Loading"
        className="loading-image"
        style={{ width: "300px",height:"300px" }}
      />
      <div className="loadingimagemessage">
          <h2 style={{ color: message.type === 'success' ? 'green' : message.type === 'error' ? 'red' :'yellow'}}>{message.text}</h2>
          </div>
    </section>
    :
    <section className='contactussection pt-32'>
      <div className="contactusrow1">
      <h1 className='contactusheading'>Contact Us</h1>
      </div>
      <div className="contactusrow">
        
        <div className="contactuscolumn1">
          <h1 className='contactuscolumnheading'>Send us a Message</h1>
          <div className="contactuscolumninnerdiv ">
                <input type="text" className='contactusinput mr-3' placeholder='First Name'  value={firstName} required onChange={(e)=>{setfirstName(e.target.value)}}/>
                {/* {errors.firstName && (<span className="checkoutspan">{errors.firstName}</span>)} */}
                <input type="text" className='contactusinput' placeholder='Last Name'  value={lastName} required onChange={(e)=>{setlastName(e.target.value)}}/>
          </div>

          <div className="contactuscolumninnerdiv">
                <input type="email" className='contactusinput mr-3' placeholder='Email'  value={emailAddress} required onChange={(e)=>{setEmailAddress(e.target.value)}}/>
                <input type="text" className='contactusinput' placeholder='Contact Number'  value={contactNumber} required onChange={(e)=>{setContactNumber(e.target.value)}}/>
          </div>

          <div className="contactuscolumninnerdiv">
                <textarea name="" className='contactusinput' id="" cols="50" rows="10" placeholder='Message'  value={contactMessage} required onChange={(e)=>{setContactMessage(e.target.value)}}>
                  Message
                </textarea>
          </div>

          <div className="contactuscolumninnerdiv flex justify-end">
               <button className='contactusinputbtn' onClick={submitContactUsForm}> SEND MESSAGE </button>
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
}
    </>
  );
};

export default ContactUsPage;
