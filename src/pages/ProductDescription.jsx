import React from 'react'
import ReactStars from "react-rating-stars-component";
import '../components/productdescription.css';
// import ReviewCard from '../layout/ReviewCard/ReviewCard';
import { useParams } from 'react-router-dom';
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


export default function ProductDescription() {
  const { id } = useParams();

  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    value:5,
    isHalf:true,
    size : window.innerWidth < 600 ? 20 : 25,
}

  return (
    <>
        <div className='ProductDetails'>
        <div>

         <img className='CarouselImage' src={product.image} key={product.image} alt={product.name} />
           
        </div>
    <div>
        <div className="detailsBlock-1">
          <h2>{product.name}</h2>
        </div>
        <div className='detailsBlock-2'>
        <ReactStars {...options} /> <span>({product.numOfReviews} Reviews)</span>
        </div>
        <div className="detailsBlock-3">
          <h1>{`₹${product.price}`}</h1>
          {/* <div className="detailsBlock-3-1">
            <div className="detailsBlock-3-1-1">
              <button>-</button>
              <input value="1" placeholder='1' type="Number" />
              <button>+</button>
            </div>{""}
            <button>Add to Cart</button>
          </div> */}
          {/* <p>
            Status:{""}
            <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
              {product.Stock < 1 ? "OutOfStock" : "InStock"}
            </b>
          </p> */}
        </div>
        <div className="detailsBlock-4">
          Description : <p>{product.description}</p>
        </div>
        <button className='submitReview'>Submit Review</button>
    </div>
  </div>
      </>
  )
}
