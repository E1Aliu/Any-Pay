import React from 'react'

import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/PaymentLinks/banner.png'
import './styles/banner.scss'

import {RiCheckFill} from 'react-icons/ri'
import {FaStaylinked} from 'react-icons/fa'

const Banner = () => {
    return (
        <SharedBanner 
            bg={banner}
            titleIcon={<FaStaylinked />}
            text='Payment Links'
            title='Getting paid is now just one link away!'
            description='Share payment link via an email, SMS, messenger, chatbot etc. 
                        and get paid immediately. Accepting payments from customers
                        is now just a link away.'
            to='/Payments'
            link='Get Started'
            other='true'
        >

            <div className='cards'>
                <div className='lines'></div>
                <div className='card1' data-aos='fade-left' data-aos-easing="ease-in-sine">
                    <h2>Create a link</h2>
                    <h4>Amount</h4>
                    <div className='input'>EUR 5000</div>

                    <h4>Link Validity</h4>
                    <div className='input'>1 Week</div>

                    <button type='button'>Confirm</button>
                </div>

                <div className='card2' data-aos='fade-up' data-aos-easing="ease-in-sine">
                    <div className='icon'>
                        <RiCheckFill />
                    </div>
                    <h2>Payment Succesful</h2>

                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line2'></div>
                </div>
            </div>

        </SharedBanner>
    )
}

export default Banner
