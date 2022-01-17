import React from 'react'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Billing/banner.jpg'
import './styles/banner.scss'

import {FaMoneyBillWave} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaMoneyBillWave />}
                text='Billing'
                title='Payments made Rewarding on AnyPay'
                description='Pay for services like Subscription, Metro Cards, besides the regulars like 
                        Mobile, Electricity & Water with the AnyPay App & get rewarded with 
                        hottest deals, cashbacks & offers.'
                to='/Billing'
                link='Get Started'
            />

            <div className='bg'></div>

            <div className='cards'>
                <div className='inner-card'>
                    <div className='img'></div>
                    <div className='card'>
                        <h5>Payment Method</h5>
                        <div className='logo-container'>
                            <div className='logo'></div>
                            <h6>AnyPay</h6>
                        </div>
                    </div>    
                </div>     
            </div>

        </div>
    )
}

export default Banner
