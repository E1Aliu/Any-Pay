import React from 'react'
import './styles/operations.scss'
import { Data1, Data2 } from './data'

const Operations = () => {
    return (
        <div className='operations'>

            <div className='row1'>
                <h1>
                    With AnyPay enable your tech business to experience 
                    the most secure & convenient payments solution
                </h1>

                <div className='items1'>
                    <div className='inner-row'>
                        {Data1.map((props) => {
                            return(
                                <div className='item1'>
                                    <div className='logo' style={{content: `url(${props.logo})`}}></div>
                                    <h6>{props.title}</h6>
                                </div>
                            )
                        })}
                    </div>
                    <div className='img'></div>
                </div>
            </div>

            <div className='saas-row'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Enable Multi-currency Payments
                </h1>
                <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    SaaS and other IT products are built for global consumers today. 
                    This calls for secure and robust payment systems that are built 
                    to accept international payments.
                </p>
                <div className='inner-row' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='images'>
                        <div className='top top1'></div>
                        <div className='bg bg1'></div>
                    </div>
                    <div className='items'>
                        {Data2.map((props) => {
                            return(
                                <div className='item'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Operations
