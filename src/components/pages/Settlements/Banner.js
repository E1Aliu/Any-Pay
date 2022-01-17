import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Settlements/banner.jpg'

import {FiCloudLightning} from 'react-icons/fi'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FiCloudLightning />}
                text='Settlements'
                title='AnyPay Settlements'
                description="Get customer payments settled 24x7
                round the year & ensure you never run out of cash"
                to='/'
                link='Get Started' 
            />

            <div className="banner-img1"></div>
            <div className="bg"></div>          

        </div>
    )
}

export default Banner
