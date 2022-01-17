import React from 'react'
import { Link } from 'react-router-dom'
import './styles/OurProducts.scss'

import { Data1, Data2, Data3 } from './data'
import {BsCheckBox} from 'react-icons/bs'
import MainCard from '../../shared/MainCard/MainCard'

const OurProducts = () => {
    return (
        <div className='our-products'>
            <div className='row1'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Our products
                </h1>
                <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    We offer fast, instant and secure optimised payment solutions 
                    for all businesses. With a simple, single integration, you can 
                    enable 100+ local payment methods
                </p>
                <div className='items' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data1.map((props) => {
                        return(
                            <div className='item'>
                                <div className='icon'
                                    style={{content:`url(${props.icon})`}}>
                                </div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='row2'>
                <div className='col1'>
                    <div className='currencies'>
                        <h6>Base Currency</h6>
                        <p>United States Dollar</p>
                        <h6>Available Currencies</h6>
                        <div className='mini-items'>
                            {Data2.map((props) => {
                                return(
                                    <div className='mini-item'>
                                        <BsCheckBox /> {props.currency}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='img'></div>
                    <div className='invoice'>
                       <h5>INVOICE NUMBER</h5>
                       <div className='input input1'>SDFS2212</div>
                       <h5>CUSTOMER DETAILS</h5>
                       <div className='input'>+91 987654321</div>
                       <div className='input2'>proteek.sharma@email.com</div>
                       <button type='button'>SEND INVOICE</button>
                    </div>
                </div>
                <div className='col2'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Invoice payments
                    </h1>
                    <p className='p' data-aos="fade-left" data-aos-easing="ease-in-sine">
                        Pay invoices with the real exchange rate in 70+ countries 
                        from your phone or app. 50% of payments are instant or 
                        arrive in an hour.
                    </p>
                    <Link to='/Payments' className='hover-button'>Get Started</Link>
                    <div className='items2' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        {Data3.map((d, i) => {
                            return (
                                <MainCard key={i} {...d}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts
