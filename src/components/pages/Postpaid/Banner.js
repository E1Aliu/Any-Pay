import React from 'react'
import './styles/banner.scss'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Postpaid/banner.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Banner = () => {
    return (
        <div>
            <SharedBanner 
                bg={banner}
                titleIcon={<AiOutlineShoppingCart />}
                text='Postpaid'
                title='Shop now, pay later'
                description="Big Wishes? Get what you want right now. Big bills? Clear 
                them rightaway. Get AnyPay Postpaid, a new & incredible 
                way to pay."
                to='/AppsDesktop'
                link='Get Started'
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
