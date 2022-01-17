import React from 'react'
import './PaymentClicks.scss'

import {AiFillWindows} from 'react-icons/ai'
import {FaLinux} from 'react-icons/fa'

const PaymentClicks = () => {
    return (
        <div className='shared-payment-clicks'>
            <div className='col1'>
                <h1>
                    Payment in a few clicks
                </h1>
                <p>
                    Millions of customers around the world use us for 
                    one simple reason: it’s simple. Just an email address 
                    and password will get you through to checkout before 
                    you can reach for your wallet.
                </p>
                <div className='buttons'>
                    <button className='button1' type='button'>
                        <AiFillWindows /> Download Windows
                    </button>
                    <button className='button2' type='button'>
                        <FaLinux /> Download Linux
                    </button>
                </div>
            </div>
            <div className='img'></div>
        </div>
    )
}

export default PaymentClicks
