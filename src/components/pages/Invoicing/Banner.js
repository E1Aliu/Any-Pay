import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Invoicing/banner.jpg'

import {RiMoneyDollarBoxFill} from 'react-icons/ri'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<RiMoneyDollarBoxFill />}
                text='Invoicing'
                title='Invoicing built for speed and scale'
                description="AnyPay Invoicing is a global invoicing platform built to save you time 
                    and get you paid faster. Create and send a Stripe-hosted invoice in 
                    minutes—no code required."
                to='/'
                link='Download App' 
            />

            <div className="banner-img1"></div>
            <div className="bg"></div>          

        </div>
    )
}

export default Banner
