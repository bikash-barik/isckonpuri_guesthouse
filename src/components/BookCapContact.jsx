import React from "react";
import './cabcontact.css';

export default function BookCapContact() {
  return (
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
                <input className="cabinput mr-4" type="text" placeholder="Enter Your Name" />
                <input className="cabinput" type="text" name="" id="" placeholder="Email Address" />
            </div>

            <div className="cabinputdiv">
                <input className="cabinput mr-4" type="text" placeholder="Phone Number" />
                <select className="cabinput" name="" id="">
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                    <option value="">Electric System</option>
                </select>
            </div>

            <div className="cabinputdiv">
                <textarea style={{width:"100%",padding:"15px"}} name="" id="" cols="30" rows="10">
                    Message
                </textarea>
            </div>

            <div className="cabinputdiv">
                <button className="cabbutton">Send Message  <i className="fa fa-arrow-right"></i> </button>
            </div>

        </div>
      </div>
    </section>
  );
}
