// SortBox.js

import React from "react";
import "./sortbox.css";

const SortBox = () => {
  return (
    <div className="sort-box-container">
      <div className="collection">
        <h2>Collections</h2>
        <label class="container">
          Sanitised b4 ur eyes
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Vaccinated Staff
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Local IDs accepted
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Free Breakfast
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Free Cancellation
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <hr className="line-after-category" />
      <div className="locality">
        <h2>Locality</h2>
        <label class="container">
          Dubai
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Canada
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          London
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Usa
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <hr className="line-after-category" />
      <div className="star">
        <h2>Star Category</h2>
        <label class="container">
          5 Star
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          3 Star
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Other
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <hr className="line-after-category" />
      <div className="facilities">
        <h2>Hotel Facilities</h2>
        <label class="container">
          Seating Area
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Ac
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Outdoor Sports
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="container">
          Full Size Bed
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <hr className="line-after-category" />
      <div className="check-in">
        <h2>Check-in features</h2>
        <label class="container">
          Pay at Hotel
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  );
};

export default SortBox;
