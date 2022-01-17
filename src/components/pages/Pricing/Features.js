import React from 'react'
import { Link } from 'react-router-dom'
import './styles/features.scss'
import { BsArrowRight } from 'react-icons/bs'
import { Data3 } from './data'

const Features = () => {
    return (
        <div className='features-row'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                WHAT’S INCLUDED
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Get <span>100+ features </span> 
                out of the box with AnyPay's integrated per-transaction pricing
            </p>

            <div className='features'>
                {Data3.map((props) => {
                    return(
                        <div className='feaure' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <h5>{props.title}</h5>
                            <div className='right'>
                                {props.items.map((l) => {
                                    return(
                                        <div className='item'>
                                            <div className='icon' style={{content:`url(${l.icon})`}}></div>
                                            <h6>{l.title2}</h6>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

            <Link to='/'>
                View More Platform Features <BsArrowRight />
            </Link>
        </div>
    )
}

export default Features
