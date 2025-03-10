import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>

                {/* Hero Image */}
                <div className='col-12'>
                    <img src='media/images/homeHero.png' alt='Hero Image' className='img-fluid mb-4' />
                </div>

                {/* Heading */}
                <div className='col-12'>
                    <h1 className='mt-3'>Invest in everything</h1>
                </div>

                {/* Description */}
                <div className='col-12'>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
                </div>

                {/* Button (Fixed Size on Desktop) */}
                <div className='col-12 d-flex justify-content-center'>
            <Link to="/signup" className='btn btn-primary fs-5 p-2 w-50 w-sm-50 w-md-25 w-lg-auto mt-3'>
                Sign up for Free
            </Link>
        </div>

            </div>
        </div>
    );
}

export default Hero;
