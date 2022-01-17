import React from 'react'
import { Link } from 'react-router-dom'
import './styles/banner.scss'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Payments/banner.jpg'

import {MdKeyboardArrowRight} from 'react-icons/md'
import {BiWallet} from 'react-icons/bi'
import {BannerData} from './data'

const Banner = () => {
    return (
        <div>
            <SharedBanner 
                bg={banner}
                titleIcon={<BiWallet />}
                text='Payments'
                title='Pay at more places you love'
                description="Check out simply and more securely at thousands of online stores 
                            with just an email address and password. You don't need to type in 
                            your card details every time you pay."
                to='/AppsDesktop'
                link='Download App'
                other='true'
            >

                <div className='images'>
                    <div className='img'></div>
                    <div className='items'>
                        {BannerData.map((props) => {
                            return(
                                <div className={`banner-item ${props.class}`}>
                                    <div className='icon'>{props.icon}</div>
                                    <Link to={props.to}>{props.link} <MdKeyboardArrowRight /></Link>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </SharedBanner>
        </div>
    )
}

export default Banner
