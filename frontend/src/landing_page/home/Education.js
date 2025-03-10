import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>

                {/* Left Section (Image) */}
                <div className='col-12 col-md-6 p-4 text-center'>
                    <img src='media/images/education.svg' className='img-fluid' style={{width:"60%"}} />
                </div>  

                {/* Right Section (Text) */}
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world <br /> 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}>Varsity  <i className="fa-solid fa-arrow-right"></i></a>

                    <p className='mt-4'>
                        TradingQ&A, the most active trading and investment community in <br /> 
                        India for all your market-related queries.
                    </p>
                    <a href='#' style={{textDecoration:"none"}}>TradingQ&A  <i className="fa-solid fa-arrow-right"></i></a>
                </div>

            </div>
        </div>
    );
}

export default Education;
