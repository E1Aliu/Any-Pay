import React from 'react'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Subscriptions/banner.jpg'
import './styles/banner.scss'

import {RiNewspaperLine} from 'react-icons/ri'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<RiNewspaperLine />}
                text='Subscriptions'
                title='Payments for Subscriptions'
                description="Offer your customers subscription plans with automated recurring 
                    transactions on various payment modes, through a platform that's 
                    built for automation."
                to='/'
                link='Get Started'
                other='true'
            />
            <div className='bg'></div>
            <div className='img'></div>
        </div>

    )
}

export default Banner
