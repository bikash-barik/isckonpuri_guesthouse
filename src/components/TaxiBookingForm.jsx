import React,{useState} from 'react';
import './booknowform.css';
// import { IoMdClose } from "react-icons/io";
import axios from "axios";
import loadingImage from '../assets/hotelbookingreloader.gif';
export default function TaxiBookingForm() {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});

  const [Name,setName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [service,setService] = useState([]);

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setService((prevService) =>
      checked ? [...prevService, id] : prevService.filter((item) => item !== id)
    );

    console.log(service);
  };

  const [errors, setErrors] = useState({});

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[\d+\-\s()]*$/;


    if (!Name) {
      newErrors.Name = 'First Name is required';
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Mobile Number is required';
    } else if (!phonePattern.test(phoneNumber)) {
      newErrors.phoneNumber = 'Please enter correct Correct Mobile Number';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter your Institute Email ID';
    }

    if (!address) {
      newErrors.address = 'Address is required';
    }

    if (service.length === 0) {
      newErrors.service = 'Services is required';
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const submitCheckoutForm = async (e) =>{
    e.preventDefault();

    const formData = {
      Name,
      phoneNumber,
      email,
      address,
      service,
    };

    if(validation()){
      try {
        setLoading(true);
        setMessage({text:"Wait Until Your Data is Submitted!..."})

        await axios.post("https://iskconpuriguesthouse-backend.onrender.com/BookNowForm", formData);
        // await fetch("http://localhost:5500/BookNowForm", {method: "POST", body: formData});
        setName("");
        setEmail("");
        setPhoneNumber("")
        setAddress("");
        setService([]);
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
    <section className="booknowsection mt-28">
     
      <div className="booknowrow1">
      <h1 className='booknowheading'>Book Now Form</h1>
      </div>
      <div className="booknowrow">
    
         <div className="booknowcolumninnerdiv">
                <input type="text" className='booknowinput' placeholder='Name'  value={Name} required onChange={(e)=>{setName(e.target.value)}}/>
                {errors.Name && (<span className="checkoutspan">{errors.Name}</span>)}

                <input type="text" className='booknowinput' placeholder='Contact Number'  value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                {errors.phoneNumber && (<span className="checkoutspan">{errors.phoneNumber}</span>)}

                <input type="email" className='booknowinput' placeholder='Email'  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                {errors.email && (<span className="checkoutspan">{errors.email}</span>)}

                <input type="text" className='booknowinput' placeholder='Address'  value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                {errors.address && (<span className="checkoutspan">{errors.address}</span>)}
         </div>
                
          <div className="booknowcolumninnerdiv flex flex-col">
               <label htmlFor="" className='booknowlabel'> <input type="checkbox"  id="HotelBooking" onChange={handleCheckboxChange} /> Hotel Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" id="CabBooking" onChange={handleCheckboxChange} /> Cab Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" id="PrasadhBooking" onChange={handleCheckboxChange} /> Prsadam Booking</label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" id="Tour" onChange={handleCheckboxChange} /> Tour </label>
               <label htmlFor="" className='booknowlabel'> <input type="checkbox" id="TouristGuide" onChange={handleCheckboxChange} /> Tourist Guide </label>
          </div>
          {errors.service && (<span className="checkoutspan">{errors.service}</span>)}   

          <div className="booknowcolumninnerdiv mt-4">
               <button className='booknowinputbtn' onClick={submitCheckoutForm}>SEND MESSAGE</button>
          </div>
      </div>

</section> 
}   
</>
  )
}
