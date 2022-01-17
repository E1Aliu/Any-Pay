import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Accepted.scss'
import {Data2} from './data'
import {AiOutlinePlus} from 'react-icons/ai'

const Accepted = () => {
    return (
        <div className='accepted-component'>
            <div className='img-cont' data-aos='flip-left'>
                <div className='img'></div>
            </div>
            <div className='info'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Accepted Everywhere
                </h1>
                <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Accepted Everywhere
                </p>
                <div className='items' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data2.map((props) => {
                        return(
                            <div className='item'>
                                <div className='icon'>{props.icon}</div>
                                <h6>{props.title}</h6>
                            </div>
                        )
                    })}

                    <button type='button'><AiOutlinePlus /></button>
                </div>
                <Link to='/' className='hover-button' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default Accepted
