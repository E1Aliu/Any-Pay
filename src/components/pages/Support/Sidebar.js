import React from 'react'
import { Link } from 'react-router-dom'

import { Data1, Data2, Data3 } from './data'

const Sidebar = () => {
    return (
        <div className='support-sidebar'>

            <div className='first'>
                <div className='title' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='logo-cont'>
                        <div className='logo'></div>
                        AnyPay
                    </div>
                    <span>SUPPORT</span>
                </div>
                {Data1.map((props) => {
                    return(
                        <div className='link-item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <div className={`icon ${props.class}`}>
                                {props.icon}
                            </div>
                            <Link to={props.to}>
                                {props.title}
                            </Link>
                        </div>
                    )
                })}
            </div>


            <div className='second'>
                <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Contact support</h6>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">24×7 help from our support staff</p>

                <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Popular topics</h6>
                {Data2.map((props) => {
                    return(
                        <div className='link-item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <Link to={props.to}>
                                {props.title}
                            </Link>
                        </div>
                    )
                })}
            </div>


            <div className='third'>
                <h6 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Contact support</h6>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">24×7 help from our support staff</p>
                {Data3.map((props) => {
                    return(
                        <div className='link-item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <div className={`icon ${props.class}`}>
                                {props.icon}
                            </div>
                            <span>{props.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
