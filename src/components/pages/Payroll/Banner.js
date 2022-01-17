import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Payroll/banner.jpg'

import {FaWallet} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaWallet />}
                text='Payroll'
                title='Payroll, simplified by AnyPay'
                description="Payroll for contractors and employees that’s easy to use 
                    and seriously smart. Pay your team and access HR and 
                    benefits."
                to='/'
                link='Download App' 
            />

            <div className="banner-img1"></div>
            <div className="bg"></div>          

        </div>
    )
}

export default Banner
