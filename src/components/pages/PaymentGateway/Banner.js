import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/PaymentGateway/banner.jpg'

import {RiVisaLine} from 'react-icons/ri'
import {SiGlassdoor} from 'react-icons/si'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<SiGlassdoor />}
                text='Payment Gateway'
                title='Supercharge your business'
                description="With the easiest integration, completely online onboarding, feature 
                    filled checkout and best in class performance, quickly go live with 
                    AnyPay and experience the future of payments."
                to='/'
                link='Get Started' 
            />
            <div className='bg'></div>


            <div className='banner-img'>
                <div className='inner-img'>

                    <div className='phone'></div>

                    <div className='card'>
                        <div className='code'>
                            <div className='block'>
                                <div className='line line1'></div>
                                <div className='line line1'></div>
                                <div className='line line1'></div>
                                <div className='line line1'></div>
                            </div>
                            <div className='line3'></div>
                            <div className='block'>
                                <div className='line line2'></div>
                                <div className='line line2'></div>
                                <div className='line line2'></div>
                                <div className='line line2'></div>
                            </div>
                        </div>

                        <p className='p'>1567 0289 5583 4670</p>
                        <div className='inline'>
                            <p>12/05</p>
                            <div className='line5'></div>
                        </div>
                    </div>

                    <div className='billing'>
                        <div className='left'>
                            <h5>Billing Info</h5>
                            
                            <div className='item1'>
                                <h6>Payment Method</h6>
                                <div className='visa'>
                                    <RiVisaLine /> 
                                    <span>Ending in 4670</span> 
                                    <div className='circle'>
                                        <div className='inner-circle'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='item1'>
                                <h6>Billing Address</h6>
                                <div className='line line1'></div>
                                <div className='line line2'></div>
                            </div>
                            <div className='item1'>
                                <h6>Shipping Address</h6>
                                <div className='line line1'></div>
                                <div className='line line2'></div>
                            </div>
                        </div>

                        <div className='image1'></div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Banner
