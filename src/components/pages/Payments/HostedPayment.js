import React from 'react'
import { Link } from 'react-router-dom'
import './styles/hostedPayment.scss'

import {BsCheck} from 'react-icons/bs'
import {AiFillWarning} from 'react-icons/ai'

const HostedPayment = () => {
    return (
        <div className='hosted-payment'>
            <div className='row1'>
                <div className='images' data-aos='zoom-in-up'>
                    <div className='bg1'></div>
                    <div className='checkout'>

                        <div className='circles'>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>

                        <div className='inline1'>
                            <div className='img1'></div>
                            <div className='block'>
                                <h6>
                                    Sony MDR-ZX110 On-Ear Stereo Headphones (Black)
                                </h6>
                                <button type='button'>Checkout</button>
                            </div>
                        </div>

                        <div className='inline2'>
                            <div className='line'></div>
                            <div className='icon icon1'><BsCheck /></div>
                        </div>

                        <div className='inline2'>
                            <div className='line'></div>
                            <div className='icon icon2'><AiFillWarning /></div>
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <h1 data-aos='zoom-in-up'>
                        Hosted payment page
                    </h1>
                    <p data-aos='zoom-in-up'>
                        Simplify your integration using AnyPay Checkout. It 
                        dynamically adapts to your customer’s device and 
                        location to increase conversion, and supports coupons, 
                        tax rates, and more.
                    </p>
                    <Link to='/' className='hover-button' data-aos='zoom-in-up'>Learn More</Link>
                </div>
            </div>

            <div className='row1'>
                <div className='info'>
                    <h1 data-aos='zoom-in-up'>
                        Pay at places you love
                    </h1>
                    <p data-aos='zoom-in-up'>
                        Connect your AnyPay account to some of your favorite 
                        apps and millions of mobile websites. Then sail through 
                        checkout with money you have in AnyPay or a linked 
                        funding source.
                    </p>
                    <Link to='/Payouts' className='hover-button' data-aos='zoom-in-up'>Learn More</Link>
                </div>
                <div className='images' data-aos='zoom-in-up'>
                    <div className='bg2'></div>
                    <div className='top2'></div>
                </div>
            </div>

            <div className='row2'>
                <div className='line'></div>
                <div className='img'></div>
                <div className='text'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Hold all the cards
                    </h1>
                    <p  data-aos="fade-left" data-aos-easing="ease-in-sine">
                        When you use your cards to shop with AnyPay they work just the same, 
                        but you don't have to enter the details every time. Just add a card to your 
                        account and pay faster and more securely from your computer or mobile.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HostedPayment
