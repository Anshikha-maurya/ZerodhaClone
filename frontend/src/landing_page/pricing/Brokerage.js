import React from 'react';

function Brokerage() {
    return (
        <div className='container'>
            <div className='row p-3 p-md-5 mt-5 text-center text-md-start border-top'>  
                <div className='col-12 col-md-8 p-3'>
                    <a href='' style={{ textDecoration: "none" }}>
                        <h3 className='fs-5'>Brokerage Calculator</h3>
                    </a>
                    <div>
                        <ul className='text-muted fs-6' style={{ lineHeight: "1.8", fontSize: "14px" }}>
                            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                            <li>MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.</li>
                            <li>MTF Brokerage: 0.3% or ₹20 per executed order, whichever is lower.</li>
                            <li>MTF Pledge Charge: ₹30 + GST per pledge request per ISIN.</li>
                        </ul>
                    </div>
                </div>
                <div className='col-12 col-md-4 p-3 text-center text-md-start'>
                    <a href='' style={{ textDecoration: "none" }}>
                        <h3 className='fs-4'>List of Charges</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
