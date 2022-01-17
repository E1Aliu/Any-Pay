import React from 'react'
import Slider from 'react-rangeslider'

import './styles/banner.scss'
import 'react-rangeslider/lib/index.css'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/SendMoney/banner.jpg'

import {FaTelegramPlane} from 'react-icons/fa'
import {BiTransfer} from 'react-icons/bi'

const Banner = () => {
    return (
        <div>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaTelegramPlane />}
                text='Send Money'
                title='Send money in a few seconds'
                description="You can send money to almost anyone with an email address, 
                    without sharing your financial information with the recipients. 
                    Use their email address and they'll get the money."
                to='/'
                link='Send money'
                other='true'
            >

                <div className='card'>
                    <h5>How much do you plan to send?</h5>
                    <div className='slider-cont'>
                        <Slider
                            min={1000}
                            max={1000000}
                            step={1000}
                            value={400000}
                        />
                    </div>

                    <div className='inline'>
                        <div className='first'>
                            <h4>400,000</h4>
                            <div className='flags'>
                                <div className='flag flag1'></div>
                                EUR
                            </div>
                        </div>

                        <span className='arrows'><BiTransfer /></span>

                        <div className='flags'>
                            <div className='flag flag2'></div>
                            USD
                        </div>
                    </div>

                    <div className='line'></div>

                    <div className='inline2'>
                        <div className='col2'>
                            <h6>Average fee</h6>
                            <span>0.00%</span>
                        </div>

                        <div className='line2'></div>

                        <div className='col2'>
                            <h6>Total fees</h6>
                            <span>0.00%</span>
                        </div>
                    </div>
                </div>

            </SharedBanner>
        </div>
    )
}

export default Banner
