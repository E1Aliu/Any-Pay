import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Insurance/banner.jpg'

import {RiHome7Line} from 'react-icons/ri'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<RiHome7Line />}
                text='Insurance'
                title='Business Insurance'
                description="Improve Premium Collection, Reduce Policy 
                    Lapses & Increase Sales."
                to='/'
                link='Get Started' 
            />
            <div className='bg'></div>
            <div className='images'>
                <div className="img1"></div>
                <div className="block">
                    <div className="img2"></div>
                    <div className="card">
                        <div className="img3"></div>
                        <div className="text">
                            <h6>AnyPay Insurance </h6>
                            <p className='card-text'>
                                Protect your loved 
                                ones against death, 
                                disability and Illness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
