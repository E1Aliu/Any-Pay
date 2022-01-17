import React from 'react'
import { Link } from 'react-router-dom'
import './styles/recharge.scss'
import './styles/recharge2.scss'

import { Data2, Data3 } from './data'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { FaPlug } from 'react-icons/fa'

const Recharge = () => {
    return (
        <div className='recharge'>
            <div className='row1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data2.map((props) => {
                    return(
                        <div className='item1'>
                            <div className='inner-item'>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='row2'>
                <div className='img' data-aos='flip-left'></div>
                <div className='inner-row'>
                    <h1>
                        Three Easy Steps To Get Your Recharge
                    </h1>
                    <div className='items2'>
                        {Data3.map((props) => {
                            return(
                                <div className='item2'>
                                    <div className='inline'>
                                        <div className='id'>
                                            <div className='square'></div>
                                            <h5>{props.nr}</h5>
                                        </div>
                                        <div className='line'></div>
                                        <div className='arrow arrow1'><MdKeyboardArrowRight /></div>
                                        <div className='arrow arrow2'><MdKeyboardArrowRight /></div>
                                    </div>
                                    <h6>{props.title}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='row3'>
                <div className='images' >
                    <div className='img'></div>
                    <div className='card'>
                        <div className='icon'><FaPlug /></div>
                        <div className='block'>
                            <h6>Electricity Bill</h6>
                            <small>Pay by 08 Sep</small>
                        </div>
                        <span>$234</span>
                    </div>
                </div>
                <div className='info'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Get Payment Reminders
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        We will notify you about the upcoming payments 
                        on the AnyPay App. So, you won't be late to pay
                        your bills.
                    </p>
                    <Link to='/Payments' className='hover-button'>
                        Download App
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Recharge
