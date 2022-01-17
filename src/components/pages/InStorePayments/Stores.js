import React from 'react'
import './styles/stores.scss'
import {FaGooglePlay, FaApple} from 'react-icons/fa'
import { Data2 } from './data'

const Stores = () => {
    return (
        <div className='stores'>
            <div className="row4">
                <div className="img"></div>
                <div className="bg"></div>
                <div className="inner-row">
                    <div className="text">
                        <h1>Small, Medium & Big Stores</h1>
                        <p>
                            AnyPay is Accepted everywhere. So, download 
                            AnyPay App to Pay from anywhere
                        </p>
                        <div className="buttons">
                            <button type='button' className='button1'>
                                <div className="icon"><FaApple /></div>
                                <div className="block">
                                    <small>Download on the</small>
                                    <span>App Store</span>
                                </div>
                            </button>

                            <button type='button'>
                                <div className="icon"><FaGooglePlay /></div>
                                <div className="block">
                                    <small>GET IT ON</small>
                                    <span>Google Play</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row5">
                <h1 data-aos='fade-left'>Details about AnyPay In-store.</h1>
                <div className="items5">
                    {Data2.map((props) => {
                        return(
                            <div className="item5" data-aos='flip-left'>
                                <div className="img-cont">
                                    <div className="img" style={{content:`url(${props.img})`}}></div>
                                </div>
                                <div className="text">
                                    <h6>{props.title}</h6>
                                    {props.items.map((l) => {
                                        return(
                                            <div className="inline">
                                                <div className="icon" style={{content:`url(${l.icon})`}}></div>
                                                <p>{l.title2}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Stores
