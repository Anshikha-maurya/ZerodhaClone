import React from 'react';

function Pricing() {
    return ( 
       <div className='container p-5'>
            <div className='row align-items-center'>

                {/* Left Section (Text) */}
                <div className='col-12 col-md-4 text-center text-md-start mb-4 mb-md-0'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking 
                        and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>

                {/* Spacing Column for Larger Screens */}
                <div className='d-none d-md-block col-md-2'></div>

                {/* Right Section (Pricing Cards) */}
                <div className='col-12 col-md-6'>
                    <div className='row text-center'>

                        <div className='col-12 col-sm-4 p-3'>
                            <img src='media/images/pricingEquity.svg' className='img-fluid' style={{height:"70%", width:"70%"}}/>
                            <p className='text-muted'>Free account opening</p>
                        </div>

                        <div className='col-12 col-sm-4 p-3'>
                            <img src='media/images/pricingEquity.svg' className='img-fluid' style={{height:"70%", width:"70%"}}/>
                            <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>

                        <div className='col-12 col-sm-4 p-3'>
                            <img src='media/images/intradayTrades.svg' className='img-fluid' style={{height:"70%", width:"70%"}}/>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>

                    </div>
                </div>

            </div>
       </div>
    );
}

export default Pricing;
