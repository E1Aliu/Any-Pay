import React from 'react'
import { Link } from 'react-router-dom'

import { BsArrowRight } from 'react-icons/bs'
import './styles/features.scss'
import { Data1 } from './data'

const Features = () => {
    return (
        <div className='features'>

            <div className='row1'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    The features your business loves
                </h1>
                <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    We know that online is the future of payments. And that future is only beginning. 
                    That's why we constantly focus on developing new features that support seamless 
                    payment experiences for your customers throughout the digital world.
                </p>
                <div className='items1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data1.map((props) => {
                        return(
                            <div className='item1'>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                                <div className='inline'>
                                    <div className='icon'
                                        style={{content: `url(${props.icon})`}}>
                                    </div>
                                    <Link to={props.to}> Learn More <BsArrowRight /></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='row2'>
                <div className='img' data-aos='flip-left'></div>
                <div className='col2'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Receive money with zero fees
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Get your own UK, Eurozone, Australian, New Zealand, and US bank details for 
                        a small, one-time setup fee — without a local address. Use them to get paid 
                        or withdraw money from platforms like Amazon for free.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Features
