import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/SaaS/banner.jpg'

import {MdComputer} from 'react-icons/md'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<MdComputer />}
                text='SaaS and IT'
                title='AnyPay for SaaS and IT'
                description="AnyPay offers a platform built for automation for SaaS companies. 
                Build and customise subscription plans around different periods 
                and billing models."
                to='/SendMoney'
                link='Send money' 
            />
            <div className='bg'></div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
