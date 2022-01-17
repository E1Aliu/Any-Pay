import React from 'react'
import './styles/SendMoney.scss'
import { Data1 } from './data'

const SendMoney = () => {
    return (
        <div className='send-money'>
            <div className="row1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="col1">
                    <h5>How it works</h5>
                    <h1>A better way to move money across borders</h1>
                    <p>
                        Sending money should be stress-free – no matter how far it’s traveling. 
                        Our app and website are designed for you to manage your money on the 
                        go. And we’ve built a team that’s dedicated to keeping your money safe, 
                        and the process watertight.
                    </p>
                </div>
                <div className="images">
                    <div className="img-cont">
                        <div className="img"></div>
                    </div>
                    <div className="square square1">
                        <div className="inner-square">
                            <div className="red"></div>
                            <div className="yellow"></div>
                        </div>
                    </div>
                    <div className="square square2">
                        <div className="inner-square">
                            <div className="red"></div>
                            <div className="yellow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data1.map((props) => {
                    return(
                        <div className="item2">
                            <h5>{props.number} <span>{props.unit}</span></h5>
                            <h6>{props.title}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SendMoney
