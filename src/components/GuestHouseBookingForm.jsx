import React,{useState} from "react";
import './guesthousebookingform.css';
import axios from "axios";
import loadingImage from '../assets/hotelbookingreloader.gif';

export default function GuestHouseBookingForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({});

  const [firstName,setfirstName] = useState('');
  const [lastName,setlastName] = useState('');
  const [email,setEmail] = useState("");
  const [phoneNumber,setPhoneNumber] = useState('');
  const [address,setAddress] = useState("");
  const [checkInDate,setCheckInDate] = useState('');
  const [checkOutDate,setCheckOutDate] = useState('');
  const [location,setLocation] = useState('');
  const [numberofMembers,setNumberOfMembers] = useState("");
  const [bookingDate,setBookingDate] = useState("");
  const [range,setRange] = useState("");
  const [roomType,setRoomType] = useState("");

  // const handleCheckboxChange = (e) => {
  //   const { id, checked } = e.target;
  //   setTime((prevService) =>
  //     checked ? [...prevService, id] : prevService.filter((item) => item !== id)
  //   );

  //   console.log(time);
  // };

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

    if (!checkInDate) {
      newErrors.checkInDate = 'Check In Date is required';
    }

    if (!checkOutDate) {
      newErrors.checkOutDate = 'Check Out Date is required';
    }

    if (!location) {
      newErrors.location = 'Location is required';
    }

    if (!numberofMembers) {
      newErrors.numberofMembers = 'Number of Members is required';
    }

    if (!bookingDate) {
      newErrors.bookingDate = 'Booking Date is required';
    }

    if (!range) {
      newErrors.range = 'Price Range is required';
    }

    if (!roomType) {
      newErrors.roomType = 'Room Type is required';
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const submitGuestHouseBookingForm = async (e) =>{
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      checkInDate,
      checkOutDate,
      location,
      numberofMembers,
      bookingDate,
      range,
      roomType
    };

    if(validation()){
      try {
        setLoading(true);
        setMessage({text:"Wait Until Your Data is Submitted!..."})

        await axios.post("https://iskconpuriguesthouse-backend.onrender.com/GuestHouseBookingForm", formData);
        // await fetch("http://localhost:5500/BookNowForm", {method: "POST", body: formData});
        setfirstName("");
        setlastName("");
        setEmail("");
        setPhoneNumber("")
        setAddress("");
        setCheckInDate("");
        setCheckOutDate("");
        setLocation("");
        setNumberOfMembers("");
        setBookingDate("");
        setRange("");
        setRoomType("");
        
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
    <div className="flex flex-col items-center justify-center mx-auto my-auto py-10 md:px-0 px-4 max-w-2xl space-y-4">

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Make a Reservation</h1>
        <p className="text-white">Enter your information to book a room</p>
      </div>

      <div className="space-y-4 w-full">

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="first-name">First name</label>
            <input className="bookingforminput" id="first-name" placeholder="Enter your first name" required value={firstName} onChange={(e)=>{setfirstName(e.target.value)}}/>
          </div>
          <div  className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="last-name">Last name</label>
            <input className="bookingforminput" id="last-name" placeholder="Enter your last name" required  value={lastName} onChange={(e)=>{setlastName(e.target.value)}}/>
          </div>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="email">Email</label>
          <input className="bookingforminput" id="email" placeholder="Enter your email" required type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="phone">Phone</label>
          <input className="bookingforminput" id="phone" placeholder="Enter your Phone Number" required type="tel" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="address">Address</label>
          <input className="bookingforminput" id="address" placeholder="Enter your address" required value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="check-in">Check-in</label>
            <input className="bookingforminput" id="check-in" required type="date" value={checkInDate} onChange={(e)=>{setCheckInDate(e.target.value)}}/>
          </div>
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="check-out">Check-out</label>
            <input className="bookingforminput" id="check-out" required type="date" value={checkOutDate} onChange={(e)=>{setCheckOutDate(e.target.value)}}/>
          </div>
        </div>

        {/* <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="guests">Guests</label>
          <select className="bookingforminput" defaultValue="1" id="guests" placeholder="Select an option...">
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5 guests</option>
          </select>
        </div> */}

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="location">Which Location Do You want For Stay</label>
          <input className="bookingforminput" id="location" placeholder="Enter the location" required value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="members">How many Members (Like Child, Adult)</label>
          <input className="bookingforminput" id="members" placeholder="Enter the number of members" required value={numberofMembers} onChange={(e)=>{setNumberOfMembers(e.target.value)}}/>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="date">Booking Date</label>
            <input className="bookingforminput" id="date" required type="date" value={bookingDate} onChange={(e)=>{setBookingDate(e.target.value)}}/>
          </div>
          <div className="bookingforminputdiv">
            <label className="bookingformlabel" htmlFor="price-range">Price Range</label>
            <select className="bookingforminput" defaultValue="0-1000" id="price-range" placeholder="select an option" onChange={(e)=>{setRange(e.target.value)}}>
                <option value="">Select an option</option>
                <option value="0-1000">0-1000</option>
                <option value="1000-2000">1000-2000</option>
                <option value="2000-3000">2000-3000</option>
                <option value="3000-5000">3000-5000</option>
                <option value="5000-above">5000 and above</option>
            </select>
          </div>
        </div>

        <div className="bookingforminputdiv">
          <label className="bookingformlabel" htmlFor="room-type">Room Type</label>
          <select className="bookingforminput" defaultValue="AC" id="room-type"  placeholder="select an option" onChange={(e)=>{setRoomType(e.target.value)}}>
          <option value="">Select an option</option>
            <option value="AC">AC</option>
              <option value="NON AC">NON AC</option>
          </select>
        </div>

        <button className="w-full bg-orange-500 text-white font-bold py-4 px-4" onClick={submitGuestHouseBookingForm}>
          Book Now
        </button>
      </div>
    </div>
    }
    </>
  )
}

