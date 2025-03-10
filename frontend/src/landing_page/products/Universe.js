import React from 'react';
import { Link } from "react-router-dom";
function Universe() {
    return ( 
        <div className='container mt-5'>
            <div className='text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center'>
                {[
                    { img: "media/images/zerodhaFundhouse.png", desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals." },
                    { img: "media/images/sensibullLogo.svg", desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more." },
                    { img: "media/images/streakLogo.png", desc: "Systematic trading platform that allows you to create and backtest strategies without coding." },
                    { img: "media/images/smallcaseLogo.png", desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs." },
                    { img: "media/images/goldenpiLogo.png", desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more." },
                    { img: "media/images/dittoLogo.png", desc: "Personalized advice on life and health insurance. No spam and no mis-selling." }
                ].map((item, index) => (
                    <div key={index} className='col-12 col-md-4 p-4 d-flex flex-column align-items-center'>
                        <img src={item.img} className='img-fluid' style={{ maxHeight: "75%", maxWidth: "70%" }} alt='Zerodha Partner' />
                        <p className='text-muted mt-3'>{item.desc}</p>
                    </div>
                ))}
            </div>
            <div className='col-12 d-flex justify-content-center'>
            <Link to="/signup" className='btn btn-primary fs-5 p-2 w-50 w-sm-50 w-md-25 w-lg-auto mt-3'>
                Sign up for Free
            </Link>
        </div>
        </div>
    );
}

export default Universe;
