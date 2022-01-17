import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Education/banner.jpg'

import {FaGraduationCap} from 'react-icons/fa'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaGraduationCap />}
                text='Education'
                title='AnyPay for Education'
                description="With AnyPay, you can build the best payments infrastructure 
                for your business so you can facilitate learning and growth for
                your students and customers."
                to='/'
                link='Get Started' 
            />
            <div className='bg'></div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
