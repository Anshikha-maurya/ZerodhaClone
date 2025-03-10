import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div  className='row text-center'>

                <h1 className='mt-5'>
                Open a Zerodha account
                </h1>

                <p> Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

                <div className='col-12 d-flex justify-content-center'>
            <Link to="/signup" className='btn btn-primary fs-5 p-2 w-50 w-sm-50 w-md-25 w-lg-auto mt-3'>
                Sign up for Free
            </Link>
        </div>
            
            </div>

       </div>
     );
}

export default OpenAccount;