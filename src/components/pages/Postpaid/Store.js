import React from 'react'
import { Link } from 'react-router-dom'
import './styles/store.scss'
import {  Data3 } from './data'

const Store = () => {
    return (
        <div className='store'>
            <div className='row3'>
                <div className='img'></div>
                <div className='inner-row'>
                    <div className='icon1' data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
                    <h1  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Pay later at any store
                    </h1>
                    <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Elevate your shopping game anywhere online
                    </p>
                    <div className='items' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        {Data3.map((props) => {
                            return(
                                <div className='item'>
                                    <div className='icon'>{props.icon}</div>
                                    <p>{props.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='row4'>
                <div className='img'></div>
                <div className='info'>
                    <div className='icon' data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Scan the QR Code to activate Postpaid
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Enjoy single click checkouts without hassle. 
                    </p>
                    <Link to='/' className='hover-button' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Store
