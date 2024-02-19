import React from "react";
import "./rans.css";

const RanS = () => {
  return (
    <div className="rans">
      <div className="child-sortbox">
        <span className="noncollor">Filters</span>
        <span className="collor">Clear All</span>
      </div>
      <div className="child-card">
        <h1>Hotels, in Puri</h1>
        <div className="toggle">
          <span>Map View</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="sortb">
          <select name="sortby" id="sorrt">
            <option value="volvo">Sort By</option>
            <option value="saab">Guest Ratings</option>
            <option value="mercedes">Price low to hight</option>
            <option value="audi">Price high to low</option>
            <option value="audi">Show Closest to OYO</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RanS;
