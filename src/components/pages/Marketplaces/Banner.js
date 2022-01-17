import React from 'react'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Postpaid/banner.png'
import './styles/banner.scss'

import {AiTwotoneShop} from 'react-icons/ai'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<AiTwotoneShop />}
                text='Marketplaces'
                title='Power payments for your marketplace'
                description="AnyPay brings together everything you need to onboard service 
                providers, manage payments, send payouts, and more. "
                to='/'
                link='Get Started'
                other='true'
            />
            <div className='bg'></div>

            <div className='images'>
                <div className='card card1'>
                        <div className='img-cont'>
                            <div className='img img1'></div>
                        </div>
                    <div className='inline inline1'>
                        <h5>
                            Wardrobe Set
                        </h5>
                        <h6>
                            $120
                        </h6>
                    </div>
                </div>

                <div className='block'>

                    <div className='card card2'>
                        <div className='img-cont'>
                            <div className='img img2'></div>
                        </div>
                        <div className=''>
                            <span className='trip'>All-inclusive trip to Morocco</span>
                            <div className='inline inline1'>
                                <h6>$999</h6>
                                <span>10 nights</span>
                            </div>
                        </div>
                    </div>
                    <div className='card card3'>
                        <div className='img-cont'>
                            <div className='img img3'></div>
                        </div>
                        <div className='inline inline1'>
                            <h5>Bike Rentals</h5>
                            <span>56/hr</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

    )
}

export default Banner
