import React from 'react'
import {Link} from 'react-router-dom'

import {Data1, Data2} from './data'
import './styles/features.scss'
import {BsCheckBox} from 'react-icons/bs'

const Features = () => {
    return (
        <div className='features'>

            <div className='row1'>
                <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                    Faster Payouts with Powerful Features
                </h1>
                <p className='p' data-aos="fade-left" data-aos-easing="ease-in-sine">
                    We offer a Buyer and Seller Protection system. 
                    Payments can be refund up to 180 days, based 
                    on what is sold.
                </p>
                <div className='items1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data1.map((props) => {
                        return(
                            <div className='item1'>
                                <div className='icon'>{props.icon}</div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='shared-sell-more-online'>

                <div className='col1'>

                    <div className='currencies'>
                        <h6 >Base Currency</h6>
                        <p>United States Dollar</p>
                        <h6>Available Currencies</h6>
                        <div className='mini-items'>
                            {Data2.map((props) => {
                                return(
                                    <div className='mini-item'>
                                        <BsCheckBox /> {props.currency}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className='bg'></div>    
                    <div className='top'></div>

                </div>
                <div className='col2'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Sell more with online payments
                    </h1>
                    <p>
                        Whether it’s a one-time purchase or recurring subscription 
                        payments, sell software around the world with support for 
                        multiple payment methods, currencies, and languages.
                    </p>
                    <Link to='/Payments' className='hover-button'>
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Features
