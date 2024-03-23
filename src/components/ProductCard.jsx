import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';
import './productcard.css';
import poojathali from '../assets/pooja-thali.webp';
const product =
  {
    name : "Neev Brass Puja Thali",
    price : "855",
    image : poojathali,
    _id : "saurav",
    numOfReviews: 100,
    rating: 5
  }

export default function ProductCard() {
  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:product.rating,
    isHalf:true,
    size : window.innerWidth < 600 ? 20 : 25,
}
  return (
   <Link className='productCard' to={`/product/${product._id}`}>
    <img src={product.image} alt={product.name} />
    <p>{product.name}</p>
    <div>
        <ReactStars {...options} /> <span>({product.numOfReviews} Reviews)</span>
    </div>
    <span>{`₹${product.price}`}</span>
    <button className="productshopnowbtn">Shop Now</button>
   </Link>
  )
}
