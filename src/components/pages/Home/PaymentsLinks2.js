import React from 'react'

import './styles/paymentsLinks.scss'
import './styles/finances.scss'

import LeftRight from '../../shared/LeftRight/LeftRight'
import MainCard from '../../shared/MainCard/MainCard'
import {Data4} from './data'

import img6 from '../../../assets/Home/img6.png'

const PaymentsLinks2 = () => {
    return (
        <div className='payments-links'>
             <div className='home-row'>
                <div className='info'>
                    <h1 data-aos='fade-left' data-aos-easing="ease-in-sine">
                        Payment Links is built to cater to all kinds of businesses 
                    </h1>
                    <p className='p' data-aos='fade-left' data-aos-easing="ease-in-sine">
                        Integrate Payment Links to automate collection for clients 
                        without the need for an app or website login flow.
                    </p>
                    <div className='items' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        {Data4.map((d, i) => {
                            return (
                                <MainCard key={i} {...d}/>
                            );
                        })}
                    </div>
                </div>
                <div className='img2' data-aos='flip-left'></div>
            </div>

            <LeftRight    
                styles='leftright-reverse'
                title='Get what you want right now' 
                description="Check out simply and more securely at thousands of online stores 
                    with just an email address and password. You don't need to type in 
                    your card details every time you pay"
                link='Learn More'
                to='/'
                img={img6}
            />
        </div>
    )
}

export default PaymentsLinks2
