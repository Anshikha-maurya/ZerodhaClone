import React from 'react';

function RightSection({ 
    imageURL,
    productName,
    productDescription,
    learnMore
}) {
    return (
        <div className='container mt-5'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 p-4'>
                    <h1 className='mt-4'>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>  
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;