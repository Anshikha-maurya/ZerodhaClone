import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-3 mt-5 border-top'>
                <h1 className='text-center'>
                    People
                </h1>
            </div>
            <div className='row p-3 text-muted' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-12 col-md-6 p-3 text-center'>
                    <img 
                        src="media/images/ansh.jpg" 
                        style={{ height: "70%", width: "60%", borderRadius: "100%" }} 
                        className="img-fluid"
                        alt="Anshikha Maurya"
                    />
                    <h4 className='mt-4'>Anshikha Maurya</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-12 col-md-6 p-5'>
                    <p>
                        Anshikha bootstrapped and founded Zerodha in 2025 to overcome the hurdles she faced during her decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        She is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is her zen.
                        <br />
                        <a href='#' style={{ textDecoration: "none" }}>Connect on Homepage / TradingQnA / Twitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;