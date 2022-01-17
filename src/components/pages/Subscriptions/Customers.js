import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Customers.scss'
import { Data2, Data3 } from './data'

const Customers = () => {
    return (
        <div className='customer'>

            <div className='row3' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='inner-row3'>
                    <h1>
                        Make subscription payments frictionless for your customer
                    </h1>
                    <p>
                        AnyPay Subscriptions gives you the flexibility to craft your 
                        subscription plans as per your business' specific requirements, 
                        with support for trial period, upfront charges, add-ons, 
                        discounts etc. Got a different use case? Reach out to us and 
                        we'll figure out how to solve for it.
                    </p>
                    <Link to='/Payments' className='hover-button'>Get Started</Link>
                </div>

                <div className='items3'>
                    {Data2.map((props) => {
                        return(
                            <div className='item3'>
                                <div className='icon'>
                                    <div className='bg'></div>
                                    {props.icon}
                                </div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='row4' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='info'>
                    <h1>
                        How Does Subscription Management Work?
                    </h1>
                    <p>
                        AnyPay's Subscription helps you customise your payment 
                        plans & automate collections from your customers.
                    </p>
                </div>
                <div className='items4'>
                    {Data3.map((props) => {
                        return(
                            <div className='item4'>
                                <div className='img' style={{content: `url(${props.img})`}}></div>
                                <h6>{props.title}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Customers
