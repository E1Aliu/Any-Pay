import React from 'react'
import { Link } from 'react-router-dom'
import { Data1 } from './data'
import { BsArrowRight } from 'react-icons/bs'
import './styles/Businesses.scss'

const Businesses = () => {
    return (
        <div className='business-row'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Designed with small business owners in mind.
            </h1>
            <p className="p" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Approve payroll when you’re ready, access integrated employee 
                services, and manage everything in one place.
            </p>
            <div className="items1">
                {Data1.map((props) => {
                    return(
                        <div className="item1" data-aos='flip-left'>
                            <div className="img" style={{content: `url(${props.img})`}}></div>
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                            <Link to={props.to}>Learn more <BsArrowRight /></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Businesses
