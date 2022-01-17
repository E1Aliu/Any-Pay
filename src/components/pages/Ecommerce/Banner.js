import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Ecommerce/banner.jpg'

import {FaStore} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaStore />}
                text='Ecommerce'
                title='Payments platform for ecommerce'
                description="We provide all the tools you need to accept payments online and in-
                person from customers around the world. Companies like Wayfair, 
                Asos, etc choose AnyPay to scale and grow their revenue."
                to='/'
                link='Contact sales' 
            />
            <div className='bg'></div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
