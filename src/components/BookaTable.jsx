import React from "react";
import './bookatable.css';

export default function BookaTable() {
  return (
    <div className="bookatablediv">
      <div className="bookatablerow">

        <div className="bookatablecolumndiv">

            <div className="bookatablecolumn">

            <h1 className="bookatableheading">Book a Table</h1>

            <div className="bookatablecolumninner">
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Name</label>
                <input className="bookatableinputdivinput" type="text" placeholder="Name"/>
                </div>
    
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Email</label>
                <input className="bookatableinputdivinput" type="email" placeholder="Email"/>
                </div>
                
            </div>
    
            <div className="bookatablecolumninner">
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Phone</label>
                <input className="bookatableinputdivinput" type="text" placeholder="Phone"/>
                </div>
    
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Select Date</label>
                <input className="bookatableinputdivinput" type="date" placeholder="Date"/>
                </div>
                
            </div>
    
            <div className="bookatablecolumninner">
            
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Select Time</label>
                <select className="bookatableinputdivinput" name="" id="">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                </select>
                </div>
    
                <div className="bookatableinputdiv">
                <label className="bookatableinputdivlabel" htmlFor="">Select Person</label>
                <select className="bookatableinputdivinput" name="" id="">
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                        <option value="">Select</option>
                </select>
                </div>
                
            </div>

            <div className="bookatablecolumninner">
            <button type="submit" className="common_btn">confirm</button>
            </div>
            </div>
        </div>
       
      </div>
    </div>
  );
}
