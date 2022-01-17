import React from 'react'
import { Link } from 'react-router-dom'

import './PaymentClicks2.scss'
import {AiFillApple} from 'react-icons/ai'

const PaymentClicks2 = () => {
    return (
        <div className='shared-payment-clicks2'>

            <div className='row row1'>
                <div className='info'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Payment in a few clicks
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Millions of customers around the world use us for 
                        one simple reason: it’s simple. Just an email address 
                        and password will get you through to checkout before 
                        you can reach for your wallet.
                    </p>
                    <button type='button'><AiFillApple /> Download Iphone</button>
                </div>
                <div className='img img1'></div>
            </div>

            <div className='row row2'>
                <div className='img img2'></div>
                <div className='info'>
                    <div className='icon' data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Scan the QR Code to activate Postpaid
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Enjoy single click checkouts without hassle.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentClicks2
