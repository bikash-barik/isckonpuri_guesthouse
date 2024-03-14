import React,{useState} from 'react'
import axios from "axios";
import loadingImage from '../assets/hotelbookingreloader.gif';

export default function PrasadhBookingForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});

  const [Name,setName] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const [time,setTime] = useState([]);
  const [date,setDate] = useState('');
  const [range,setRange] = useState("");
  const [location,setLocation] = useState('');
  const [numberofPlates,setNumberOfPlates] = useState("");

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setTime((prevService) =>
      checked ? [...prevService, id] : prevService.filter((item) => item !== id)
    );

    console.log(time);
  };

  const [errors, setErrors] = useState({});

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[\d+\-\s()]*$/;


    if (!Name) {
      newErrors.Name = 'Name is required';
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

    if (!numberofPlates) {
      newErrors.numberofPlates = 'Number of Plates is required';
    }

    if (!address) {
      newErrors.address = 'Address is required';
    }

    if (time.length === 0) {
      newErrors.service = 'Time is required';
    }

    if (!date) {
      newErrors.date = 'Date is required';
    }

    if (!range) {
      newErrors.range = 'Range is required';
    }

    if (!location) {
      newErrors.location = 'Location is required';
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
      numberofPlates,
      time,
      date,
      range,
      location
    };

    if(validation()){
      try {
        setLoading(true);
        setMessage({text:"Wait Until Your Data is Submitted!..."})

        await axios.post("https://iskconpuriguesthouse-backend.onrender.com/PrasadBookingForm", formData);
        // await fetch("http://localhost:5500/BookNowForm", {method: "POST", body: formData});
        setName("");
        setEmail("");
        setPhoneNumber("")
        setAddress("");
        setNumberOfPlates("");
        setTime([]);
        setDate("");
        setRange("");
        setLocation("");
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
    <div className="flex flex-col items-center justify-center mx-auto my-auto mt-10 md:px-4 px-4 max-w-3xl space-y-4 border p-4">

    <div className="space-y-2 text-center">
      <h1 className="text-3xl text-white font-bold">Food Booking Form</h1>
      <p className="text-white">Enter your information to book a meal</p>
    </div>

    <div className="space-y-4 w-full">

      <div className="grid grid-cols-2 gap-4">

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="name">Name</label>
          <input className="bookingforminput" id="name" placeholder="Enter your name" required  value={Name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="mobile">Mobile</label>
          <input className="bookingforminput" id="mobile" placeholder="Enter your Mobile Number" required  value={phoneNumber} type="tel" onChange={(e)=>{setPhoneNumber(e.target.value)}} />
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="address">Address</label>
        <input className="bookingforminput" id="address" placeholder="Enter your address" required value={address}  onChange={(e)=>{setAddress(e.target.value)}}/>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="email">Email</label>
        <input className="bookingforminput" id="email" placeholder="Enter your Email" required type="email"  value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="plates">How many Plates</label>
        <input className="bookingforminput" id="plates" placeholder="Enter the number of plates" required type="number" value={numberofPlates}  onChange={(e)=>{setNumberOfPlates(e.target.value)}} />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel">Home Time Do you want</label>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <input type='checkbox' className="bookingformcheckbox" id="Breakfast" onChange={handleCheckboxChange}  />
            <label className="bookingformlabel" htmlFor="breakfast">Breakfast</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="Lunch" onChange={handleCheckboxChange}  />
            <label className="bookingformlabel" htmlFor="lunch">Lunch</label>
          </div>
          <div>
          <input type='checkbox' className="bookingformcheckbox" id="Dinner" onChange={handleCheckboxChange} />
            <label className="bookingformlabel" htmlFor="dinner">Dinner</label>
          </div>
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="booking-date">Date You want to Book</label>
        <input className="bookingforminput" id="booking-date" required type="date" name={date} onChange={(e)=>{setDate(e.target.value)}} />
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel">Price Range</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
          <input type='radio' className="bookingformcheckbox" name="price_range" value="0-1000" onChange={(e)=>{setRange(e.target.value)}} />
            <label className="bookingformlabel" htmlFor="range-1">0-1000</label>
          </div>
          <div>
          <input type='radio' className="bookingformcheckbox" name="price_range" value="1000-2000" onChange={(e)=>{setRange(e.target.value)}}  />
            <label className="bookingformlabel" htmlFor="range-2">1000-2000</label>
          </div>
          <div>
          <input type='radio' className="bookingformcheckbox" name="price_range" value="2000-3000" onChange={(e)=>{setRange(e.target.value)}}  />
            <label className="bookingformlabel" htmlFor="range-3">2000-3000</label>
          </div>
          <div>
          <input type='radio' className="bookingformcheckbox" name="price_range" value="3000-4000" onChange={(e)=>{setRange(e.target.value)}}  />
            <label className="bookingformlabel" htmlFor="range-4">3000-5000</label>
          </div>
          <div>
          <input type='radio' className="bookingformcheckbox" name="price_range" value="5000 and above" onChange={(e)=>{setRange(e.target.value)}}  />
            <label className="bookingformlabel" htmlFor="range-5">5000 and above</label>
          </div>
        </div>
      </div>

      <div className="bookingforminputdiv">
        <label className="bookingformlabel" htmlFor="current-location">Your Current staying location</label>
        <input className="bookingforminput" id="current-location" placeholder="Enter your current staying location" required name={location} onChange={(e)=>{setLocation(e.target.value)}}  />
      </div>

      <button className="w-full bg-orange-500 text-white font-bold py-4 px-4"  onClick={submitCheckoutForm}>
        Book Now
      </button>
    </div>
  </div>
}
  </>
  )
}
