import React from 'react'
import { Link } from 'react-router-dom'
import { Data1 } from './data'
import { BsArrowRight } from 'react-icons/bs'
import './styles/Businesses.scss'

const Businesses = () => {
    return (
        <div className='business-row'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Built with platforms and modern retailers in mind
            </h1>
            <p className="p" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Terminal helps you unify your online and offline channels with flexible 
                developer tools,  cloud-based hardware management, and more.
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
