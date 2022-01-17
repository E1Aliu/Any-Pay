import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/InStorePayments/banner.jpg'

import {FaStoreAlt} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaStoreAlt />}
                text='In-store Payments'
                title='More ways to pay in-store'
                description="Pay securely & easily at Stores, favourite Restaurants, Shopping 
                    Malls or a even Local Street Vendors in a flash. Offer AnyPay's 
                    payment methods anywhere you meet your customers."
                to='/'
                link='Get Started' 
            />
            <div className='bg'></div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
