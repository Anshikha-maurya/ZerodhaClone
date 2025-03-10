import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
                <div className='col-12 col-md-6 p-4'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: "20px", textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' className='img-fluid' alt='Google Play' /></a>
                        <a href={appStore} className='ms-3'><img src='media/images/appstoreBadge.svg' className='img-fluid' alt='App Store' /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;