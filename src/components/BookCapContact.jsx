import React,{useState} from "react";
import './cabcontact.css';
import axios from 'axios';
import loadingImage from '../assets/hotelbookingreloader.gif';

export default function BookCapContact() {
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

        await axios.post("https://iskconpuriguesthouse-backend.onrender.com/CabBookingContactUsForm", formData);
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
    <section className="cabcontactsection">
      <div className="cabcontactrow">
        <div className="cabcontactcolumn1">
          <iframe
            title="Google Maps - Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.0997896812632!2d85.81275457526819!3d19.793365929060656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c431d4aa6983%3A0xb0169724de0f847f!2sISKCON%20Puri!5e0!3m2!1sen!2sin!4v1703079253988!5m2!1sen!2sin"
            width="100%"
            height="750px"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mobile-margin-top"
          ></iframe>
        </div>

        <div className="cabcontactcolumn2">
            <h1 className="cabheading">Get A <span className="cabspan">Free</span> Quote</h1>
            <p>Car driver instructor must also have good communication skills patience confidence and teaching skills.</p>
            <div className="cabinputdiv">
                <input className="cabinput mr-4" type="text" placeholder="Enter Your First Name"  value={firstName} required onChange={(e)=>{setfirstName(e.target.value)}} />
                <input className="cabinput mr-4" type="text" placeholder="Enter Your Last Name" value={lastName} required onChange={(e)=>{setlastName(e.target.value)}} />
                
            </div>

            <div className="cabinputdiv">
                <input className="cabinput mr-4" type="text" placeholder="Phone Number"  value={contactNumber} required onChange={(e)=>{setContactNumber(e.target.value)}} />
                {/* <select className="cabinput" name="" id="">
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                </select> */}
                <input className="cabinput" type="text" name="" id="" placeholder="Email Address"  value={emailAddress} required onChange={(e)=>{setEmailAddress(e.target.value)}} />
            </div>

            <div className="cabinputdiv">
                <textarea style={{width:"100%",padding:"15px"}} name="" id="" cols="30" rows="10" value={contactMessage} required onChange={(e)=>{setContactMessage(e.target.value)}}>
                    Message
                </textarea>
            </div>

            <div className="cabinputdiv">
                <button className="cabbutton" onClick={submitContactUsForm}>Send Message  <i className="fa fa-arrow-right"></i> </button>
            </div>

        </div>
      </div>
    </section>
}
    </>
  );
}
