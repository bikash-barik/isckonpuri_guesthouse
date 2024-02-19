import React from 'react'
import './count.css';
export default function Count() {
  return (
    <section className="counter_part">
        <div className="counter_overlay">
            <div className="counterrow">
            <div className="col-xl-3 col-sm-6 col-lg-3 mb-8">
                        <div className="single_counter">
                            <div className="text">
                                <h2 className="counter">85,000</h2>
                                <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            </div>
                            <p>customer serve</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-lg-3 mb-8">
                        <div className="single_counter">
                            <div className="text">
                                <h2 className="counter">120</h2>
                                <span><i className="fas fa-hat-chef" aria-hidden="true"></i></span>
                            </div>
                            <p>experience chef</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-lg-3 mb-8">
                        <div className="single_counter">
                            <div className="text">
                                <h2 className="counter">72,000</h2>
                                <span><i className="fas fa-users" aria-hidden="true"></i></span>
                            </div>
                            <p>happy customer</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-lg-3 mb-8">
                        <div className="single_counter">
                            <div className="text">
                                <h2 className="counter">30</h2>
                                <span><i className="fas fa-trophy" aria-hidden="true"></i></span>
                            </div>
                            <p>winning award</p>
                        </div>
                    </div>
            </div>
                  
                </div>
    </section>
  )
}
