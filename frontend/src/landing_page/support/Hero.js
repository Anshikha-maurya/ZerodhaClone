import React from 'react';

function Hero() {
    return (  
        <section className='container' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4 className='fs-2'>Support Portal</h4>
                <a href='' className='text-decoration-none'>Track Tickets</a>
            </div>

            <div className='row p-3 p-md-5'>
                {/* Left Section */}
                <div className='col-12 col-md-6 p-3'>
                    <h1 className='fs-3'>
                        Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input 
                        type='text' 
                        placeholder='Eg. how do I activate F&O, why is my order getting rejected' 
                        className='form-control mt-4'
                    />
                    <div className='mt-3'>
                        {["Track account opening", "Track segment activation", "Intraday margins", "Kite user manual"].map((item, index) => (
                            <a key={index} href='' className='d-inline-block text-decoration-none me-3'>{item}</a>
                        ))}
                    </div>
                </div>

                {/* Right Section */}
                <div className='col-12 col-md-6 p-3 p-md-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol className='ps-3'>
                        <li className='mb-2'>
                            <a href='' className='text-decoration-none'>
                                Trading holiday on account of Maha Shivaratri on February 26, 2025
                            </a>
                        </li>
                        <li>
                            <a href='' className='text-decoration-none'>
                                Offer for sale (OFS) - February 2025
                            </a>
                        </li>
                    </ol>
                </div>
            </div>  
        </section>
    );
}

export default Hero;
