import React from 'react'

import './styles/PaymentLinks.scss'
import MainCard from '../../shared/MainCard/MainCard'
import {Data3} from './data'

const PaymentLinks = () => {
    return (
        <div className='payment-links'>
            <div className='info'>
                    <h1 data-aos='fade-left' data-aos-easing="ease-in-sine">
                        We give merchants the ability to accept payments globally
                    </h1>
                    <p className='p' data-aos='fade-left' data-aos-easing="ease-in-sine">
                        We take care of global payment processing, sales 
                        tax management, invoicing, local entities, and more. 
                    </p>
                    <div className='items' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        {Data3.map((d, i) => {
                            return (
                                <MainCard key={i} {...d}/>
                            );
                        })}
                    </div>
            </div>
            <div className='img1' data-aos='flip-left'></div>
        </div>
    )
}

export default PaymentLinks
