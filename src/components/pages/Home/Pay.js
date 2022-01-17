import React from 'react'
import {Link} from 'react-router-dom'

import {FaAsterisk} from 'react-icons/fa'
import {MdKeyboardArrowRight} from 'react-icons/md'

import LeftRight from '../../shared/LeftRight/LeftRight'
import './styles/pay.scss'
import './styles/pay2.scss'

import { Data2 } from './data'

const Pay = () => {
    return (
        <div className='pay'>
            <LeftRight    
                title='Pay from your bank account' 
                description='Pay anyone, everywhere. Make contactless & secure 
                        payments in-stores or online using AnyPay Wallet or 
                        Directly from your Bank Account. '
                link='Learn More'
                to='/'
                other='true'
            >

                <div className='images'>
                    <div className='img'  data-aos='fade-left' data-aos-easing="ease-in-sine"></div>
                    <div className='bg1'></div>
                    <div className='bg2'></div>
                    <div className='bg3'></div>

                    <div className='card card1' data-aos='flip-right' data-aos-easing="ease-in-sine">
                        <div className='inner-card1'>
                            <div className='button'></div>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                            <div className='line line3'></div>

                            <div className='line line1'></div>
                            <div className='line line2'></div>
                            <div className='line line3'></div>

                            <div className='icons'>
                                <FaAsterisk /><FaAsterisk /><FaAsterisk />
                                <FaAsterisk /><FaAsterisk /><FaAsterisk />
                            </div>

                            <div className='buttons'>
                                <div className='btn btn1'></div>
                                <div className='btn btn2'></div>
                            </div>
                        </div>
                    </div>

                    <div className='card card2' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        <div className='inner-card2'>
                            <div className='first'>
                                <h6>$450</h6>
                                <div className='line1'></div>
                                <div className='line1'></div>
                            </div>

                            <div className='second'>
                                <div className='line line2'></div>
                                <div className='line line3'></div>
                                <div className='line line3 line33'></div>
                                <div className='line line2'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </LeftRight>

            <div className='row4'>

                <div className='bg1'></div>
                <div className='bg2'></div>

                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
                <div className='line4'></div>

                <div className='inner-row4'>
                    <h1 data-aos='zoom-in-up'>
                        Approve more transactions
                    </h1>
                    <p className='p' data-aos='zoom-in-up'>
                        Experience more approvals on every single payment with local and 
                        global payment processing, data-driven optimizations, and powerful 
                        risk management. All within a fully connected single payments system.
                    </p>
                    <div className='items4' data-aos='zoom-in-up'>
                        {Data2.map((props) => {
                            return(
                                <div className='item4'>
                                    <div className='icon'>
                                        {props.icon}
                                    </div>

                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                    <Link to={props.to}>
                                        Learn More <MdKeyboardArrowRight />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Pay
