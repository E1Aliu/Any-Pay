import React from 'react'

const SliderItem = () => {
    return (
        <div className='slider-item'>
            <div className='inner-item'>
                <h5>Product</h5>
                <h1>
                    We built Checkout so you don’t have to
                </h1>
                <p>
                    Checkout now offers a seamless purchase experience with out-of-the-box support 
                    for mobile wallets and address auto-complete, helps scale your business globally 
                    with over 25 languages and 10 international payment methods, and lets you 
                    customize payments for your business with support for tax rates, promo codes, 
                    brand configuration tools, and more.
                </p>
                <div className='inline'>
                    <div className='logo'></div>
                    <div className='block'>
                        <span>AnyPay Team</span>
                        <span>09/30/2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderItem
