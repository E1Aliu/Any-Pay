import React from 'react'
import './styles/fuel.scss'
import { Data3 } from './data'

const Fuel = () => {
    return (
        <div className='fuel-row'>
            
            <div className="info">
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Fuel Wallet
                </h1>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Fuel Reimbursement made Easy with AnyPay Fuel Wallet
                </p>
                {Data3.map((props) => {
                    return(
                        <div className="item3">
                            <div className={`icon ${props.class}`}>{props.icon}</div>
                            <h6>{props.title}</h6>
                        </div>
                    )
                })}
                
            </div>


            <div className="images">
                <div className="img1"></div>
                <div className="img2" data-aos='flip-left'></div>
                <div className="leaf leaf1"></div>
                <div className="leaf leaf2"></div>
            </div>
        </div>
    )
}

export default Fuel
