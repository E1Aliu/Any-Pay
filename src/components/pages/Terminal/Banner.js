import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Terminal/banner.jpg'

import {AiOutlineCode} from 'react-icons/ai'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<AiOutlineCode />}
                text='Terminal'
                title='Extend AnyPay payments to your point of sale'
                description="AnyPay Terminal enables you to build your own in-person 
                    checkout to accept payments in the physical world."
                to='/'
                link='Download App' 
            />

            <div className="banner-img1"></div>
            <div className="bg"></div>          

        </div>
    )
}

export default Banner
