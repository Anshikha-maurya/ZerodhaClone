import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-4 p-md-5 mt-5 border-bottom text-center'>
                <h1>Charges</h1>
                <h3 className='text-muted fs-5 mt-3'>List of all charges and taxes</h3>
            </div>

            <div className='row p-2 mt-5 text-center'>
                <div className='col-12 col-md-4 p-3 p-md-4'>
                    <img src='media/images/pricingEquity.svg' alt="Equity" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted'>
                        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                    </p>   
                </div>

                <div className='col-12 col-md-4 p-3 p-md-4'>
                    <img src='media/images/intradayTrades.svg' alt="Intraday Trades" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, 
                        currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>

                <div className='col-12 col-md-4 p-3 p-md-4'>
                    <img src='media/images/pricingEquity.svg' alt="Mutual Funds" className="img-fluid mb-3" />
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted'>
                        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
