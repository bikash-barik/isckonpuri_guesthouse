// PriceRangeSlider.js
import React, { useState } from 'react';

import "./product.css";

const PriceRangeSlider = () => {
  const [price, setPrice] = useState(50);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="price-range-container">
        <hr className="line-break" />
      <span>Price</span>
      <input
        type="range"
        id="priceRange"
        min="0"
        max="100"
        step="1"
        value={price}
        onChange={handlePriceChange}
      />
      <div id="priceValue">Your range of Price is between 0 /- and ₹{price}</div>
    </div>
  );
};

export default PriceRangeSlider;
