import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Benefits/banner.jpg'

import {FaHandHoldingHeart} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaHandHoldingHeart />}
                text='Benefits'
                title='Employees Benefits'
                description="Truly digital employee benefits in one single platform, 
                provide tax free benefits to your employees."
                to='/'
                link='Download App' 
            />
            <div className='bg'></div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
