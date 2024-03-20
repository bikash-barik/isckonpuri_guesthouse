import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link} from 'react-router-dom';
import './productcard.css';

const product =
  {
    name : "Blue Tshirt",
    price : "500",
    images : [{url:'https://static05.jockey.in/c_scale,h_640,w_480/jockey/uploads/dealimages/10081/originalimages/move-blue-t-shirt-mv01-119.jpg'}],
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
    <img src={product.images[0].url} alt={product.name} />
    <p>{product.name}</p>
    <div>
        <ReactStars {...options} /> <span>({product.numOfReviews} Reviews)</span>
    </div>
    <span>{`₹${product.price}`}</span>
    <button className="productshopnowbtn">Shop Now</button>
   </Link>
  )
}
