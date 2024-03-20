import React from 'react'
import '../components/shopping.css'
import ProductCard from '../components/ProductCard'
import ProductHerosection from '../components/ProductHerosection'
import RanS from '../components/RanS'
import PriceRangeSlider from '../components/PriceRangeSlider'
import SortBox from '../components/Sortbox'
export default function Shoping() {
  return (
    <>  

    <section className='shoppingsection'>
        <ProductHerosection/>

        <RanS title="Products"/>
        {/* <div className="productheadingdiv">
           <h2 className='productsHeading'>Products</h2>
        </div> */}

      

        <div className="productrow">

        <div className="productcolumn1">
            <PriceRangeSlider/>
            <SortBox/>
        </div>    

        <div className="prductcolumn2">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        
        </div>

      

    </section>
    </>
  
  )
}
