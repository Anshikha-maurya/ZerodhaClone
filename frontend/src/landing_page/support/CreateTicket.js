import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-4'>
                <h3 className='fs-2 text-muted'>
                    To create a ticket, select a relevant topic
                </h3>
            </div>

            <div className='row p-3 p-md-5'>
                {/* Account Opening */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-solid fa-circle-plus fa-sm"></i> Account Opening </h4>
                    {["Getting", "Online", "Offline", "Charges", "Company, Partnership and HUF", "Non Resident Indian (NRI)"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>

                {/* Your Zerodha Account */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-regular fa-user"></i> Your Zerodha Account </h4>
                    {["Login credentials", "Your Profile", "Account modification and segment addition", "CMR & DP ID", "Nomination", "Transfer and conversion of shares"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>

                {/* Trading and Markets */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-solid fa-chart-simple"></i> Trading and Markets </h4>
                    {["Trading FAQs", "Kite", "Margins", "Product and order types", "Corporate actions", "Kite features"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>
            </div> 

            <div className='row p-3 p-md-5'>
                {/* Funds */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-solid fa-box"></i> Funds </h4>
                    {["Fund withdrawal", "Adding funds", "Adding bank accounts", "eMandates"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>

                {/* Console */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-solid fa-circle-half-stroke"></i> Console </h4>
                    {["IPO", "Portfolio", "Funds statement", "Profile", "Reports", "Referral program"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>

                {/* Coin */}
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <h4><i className="fa-regular fa-circle"></i> Coin </h4>
                    {["Understanding mutual funds and Coin", "Coin app", "Coin web", "Transactions and reports", "National Pension Scheme (NPS)"].map((item, index) => (
                        <a key={index} href='' className='d-block text-decoration-none mt-1'>{item}</a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
