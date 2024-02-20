import React from 'react';
import './dailyoffer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
export default function DailyOffer() {

  const settings = {
    infinite: true,
    speed: 500,
    loop:true,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="offer_item pt_95 pb_100 xs_pt_65 xs_pb_70">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
          <div className="col-md-8 col-lg-7 col-xl-6">
            <div className="section_heading mb_25 text-center">
              <h4>Prasadam</h4>
              <h2>up to 55% off for this day</h2>
            </div>
          </div>
        </div>
  <Slider {...settings}>
             <div className="slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" style={{ width: 570 }}>
                <div>
                  <div className="flex items-center justify-center" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="offer_item_single">
                      <span>55% off</span>
                      <a className="title" href="menu_details.html">
                        Mahaprasad
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                      <div className="dailyofferul md:flex">
                              <ul className="flex flex-wrap">
                        <li>
                          <Link to="/">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </Link>
                        </li>
                        <li>
                         <Link to="/"><i className="fa fa-heart"></i> saurav</Link>
                        </li>
                        <li>
                          <a href="/">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>

                      <div className="dailyofferbtndiv">
                      <button className='dailyofferbtn'>Buy Now</button>
                      </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: 570 }}>
                <div>
                  <div className="col-xl-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="offer_item_single">
                      <span>45% off</span>
                      <a className="title" href="menu_details.html">
                        Prasadam
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>

                      <div className="dailyofferul md:flex">
                              <ul className="flex flex-wrap">
                        <li>
                          <a href="/" data-bs-toggle="modal" data-bs-target="#cartModal">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                          <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="menu_details.html">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>

                      <div className="dailyofferbtndiv">
                      <button className='dailyofferbtn'>Buy Now</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{ width: 570 }}>
                <div>
                  <div className="col-xl-4" style={{ width: '100%', display: 'inline-block' }}>
                    <div className="offer_item_single">
                      <span>45% off</span>
                      <a className="title" href="menu_details.html">
                        Raj Bhog
                      </a>
                      <p>Enim ipsam voluptat in quia voluptas sit aspe rnatur aut odit aut.</p>
                      <div className="dailyofferul md:flex">
                              <ul className="flex flex-wrap">
                        <li>
                          <a href="/" data-bs-toggle="modal" data-bs-target="#cartModal">
                            <i className="fas fa-shopping-basket" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a href="/">
                          <i className="fa fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="menu_details.html">
                            <i className="far fa-eye" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>

                      <div className="dailyofferbtndiv">
                      <button className='dailyofferbtn'>Buy Now</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
</Slider>

      </div>
    </section>
  );
}
