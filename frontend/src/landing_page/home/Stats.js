import React from 'react';

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row align-items-center'>

                {/* Left Section (Text) */}
                <div className='col-12 col-md-6 p-3 text-center text-md-start'>
                    <h1 className='fs-2 mb-4'>Trust with confidence</h1>
                    
                    <h2 className='fs-4 mb-2'>Customer-first always</h2>
                    <p className='text-muted mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h2 className='fs-4 mb-2'>No spam or gimmicks</h2>
                    <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className='fs-4 mb-2'>The Zerodha universe</h2>
                    <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className='fs-4 mb-2'>Do better with money</h2>
                    <p className='text-muted mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                {/* Right Section (Image & Links) */}
                <div className='col-12 col-md-6 text-center'>
                    <img src='media/images/ecosystem.png' className='img-fluid' style={{ width: "90%" }} />
                    
                    <div className='mt-3'>
                        <a href='#' className='mx-3' style={{ textDecoration: "none" }}>
                            Explore our products <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href='#' className='mx-3' style={{ textDecoration: "none" }}>
                            Try Kite demo <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;
