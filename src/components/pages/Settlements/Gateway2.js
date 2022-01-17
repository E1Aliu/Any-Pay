import React from 'react'

import { CgAsterisk } from 'react-icons/cg'
import './styles/gateway2.scss'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { Data } from '../../shared/CustomersComments/data'

const Gateway2 = () => {
    return (
        <div className='gateway2'>
            <div className="text"  data-aos="fade-up" data-aos-anchor-placement="top-bottom"> 
                <div className="logo"></div>
                <h1>
                    Do you know how a typical payment 
                    gateway settlement cycle works in AnyPay?
                </h1>
                <p className="p">
                    Refer our settlements and reconciliation guide to 
                    get a complete understanding on how settlements work 
                    when using AnyPay Payment Gateway.
                </p>
            </div>

            <div className="cards"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card card1">
                    <div className="inline1">
                        <div className="icon"></div>
                        UPI
                    </div>

                    <span>johndoe@okaxis</span>

                    <button type='button'>Request OTP</button>
                </div>


                <div className="card card2">
                    <p>Please enter OTP send to Registered mobile number</p>
                    <div className="stars">
                        <CgAsterisk />
                        <CgAsterisk />
                        <CgAsterisk />
                        <CgAsterisk />
                    </div>
                    <button type='button'>Confirm</button>
                </div>


                <div className="card card3">
                    <h6>Payment Succesful</h6>
                    <div className="check"><AiOutlineCheckCircle /></div>
                </div>

                <div className="card card4">
                    <div className="block">
                        <small>Account No.</small>
                        <p>XXXX XXXX XXXX XXXX </p>
                    </div>
                    <h5>Amount Credited</h5>
                </div>
            </div>

            
        </div>
    )
}

export default Gateway2
