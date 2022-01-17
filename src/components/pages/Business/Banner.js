import React from 'react'
import './styles/banner.scss'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Business/banner.png'
import {FaBriefcase} from 'react-icons/fa'

const Banner = () => {
    return (
        <div>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaBriefcase />}
                text='Business'
                title='Payouts platform for businesses'
                description="Make fast, low-cost payouts to all your customers, 
                freelancers, employees, investors, and suppliers 
                around the world."
                to='/'
                link='Contact sales'
                other='true'
            >

                <div className='images'>
                    <div className='img'></div>
                </div>

            </SharedBanner>
        </div>
    )
}

export default Banner
