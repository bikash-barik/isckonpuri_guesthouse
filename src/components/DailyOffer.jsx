import React,{useState} from 'react';
import './dailyoffer.css';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Link } from 'react-router-dom';
import PrasadhBookingForm from './PrasadhBookingForm';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import dinner from '../assets/dinner.jpg';

export default function DailyOffer() {

  // const settings = {
  //   infinite: true,
  //   speed: 500,
  //   loop:true,
  //   arrows:false,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const[model,setmodel]=useState(false);

  const openModel = ()=>{
    setmodel(true);
  }


  return (
    <>
      <div className={model?"model open":"model"}>
    <PrasadhBookingForm/>
    <button className='modelcloseButton' onClick={()=>{setmodel(false)}}>
          &times;
    </button>
    </div>

    <section className="offer_item pt_95 pb_100 xs_pt_65 xs_pb_70">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="section_heading mb_25 text-center">
              <h4>Prasadam</h4>
              {/* <h2>up to 35% off for this day</h2> */}
            </div>
          </div>
        </div>
  {/* <Slider {...settings}> */}
  <div className="dailyofferrow">
  <div className='dailyoffercolumn'>
                <div>
                  <div className="dailyofferdiv">
                    <div className="offer_item_single">
                      <div className="offer_item_single_content1">
                      {/* <span>35% off</span> */}
                      <img className='dailyofferimage' src={breakfast} alt="breakfast" />
                      </div>

                      <div className="offer_item_single_content">
                      
                      <a className="title" href="menu_details.html">
                        Breakfast
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                      <div className="dailyofferul">

                      {/* <div className='dailyofferuldiv'>
                        <ul className="flex">
                        <li>
                          <Link to="/">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <a href="/">
                          <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                        </div> */}
                        <div className="dailyofferbtndiv">
                            <button className='dailyofferbtn'onClick={openModel}>Buy Now</button>
                      </div>

                      </div>
                      
                        </div> 
                    </div>
                  </div>
                </div>
              </div>

              <div className='dailyoffercolumn'>
                <div>
                  <div className="dailyofferdiv">
                    <div className="offer_item_single">
                    <div className="offer_item_single_content1">
                      {/* <span>35% off</span> */}
                      <img className='dailyofferimage' src={lunch} alt="lunch" />
                      </div>

                      <div className="offer_item_single_content">
                      
                      <a className="title" href="menu_details.html">
                        Lunch
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                      <div className="dailyofferul">

                      {/* <div className='dailyofferuldiv'>
                        <ul className="flex">
                        <li>
                          <Link to="/">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <a href="/">
                          <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                        </div> */}
                        <div className="dailyofferbtndiv">
                            <button className='dailyofferbtn'onClick={openModel}>Buy Now</button>
                      </div>

                      </div>
                      
                        </div> 
                    </div>
                  </div>
                </div>
              </div>

              <div className='dailyoffercolumn'>
                <div>
                  <div className="dailyofferdiv">
                    <div className="offer_item_single">
                    <div className="offer_item_single_content1">
                      {/* <span>35% off</span> */}
                      <img className='dailyofferimage' src={dinner} alt="dinner" />
                      </div>

                      <div className="offer_item_single_content">
                      
                      <a className="title" href="menu_details.html">
                        Dinner
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                      <div className="dailyofferul">

                      {/* <div className='dailyofferuldiv'>
                        <ul className="flex">
                        <li>
                          <Link to="/">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                          <a href="/">
                          <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                        </div> */}
                        <div className="dailyofferbtndiv">
                            <button className='dailyofferbtn'onClick={openModel}>Buy Now</button>
                      </div>

                      </div>
                      
                        </div> 
                    </div>
                  </div>
                </div>
              </div>
  </div>
 
{/* </Slider> */}

      </div>
    </section>
    </>
    
  );
}
