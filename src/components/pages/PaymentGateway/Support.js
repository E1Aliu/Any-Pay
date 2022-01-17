import React from 'react'
import { Link } from 'react-router-dom'
import './styles/support.scss'
import './styles/support2.scss'


import {BiConversation} from 'react-icons/bi'
import {FaPuzzlePiece} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs'
import {Data} from './data'

const Support = () => {
    return (
        <div className='support'>

            <div className='row3'>
                <div className='col1'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Most widely-used checkout
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Tap into a store of 4 million+ saved cards and say goodbye to
                        requiring customers to type card details every time.
                    </p>
                    <div>
                        <div className='item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <div className='icon'><BiConversation /></div>
                            <span>Better Conversions than ever</span>
                        </div>
                        <div className='item' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <div className='icon'><FaPuzzlePiece /></div>
                            <span>Easy Integration with less code</span>
                        </div>
                    </div>
                </div>
                <div className='img' data-aos='flip-left'></div>
            </div>



            <div className='row4'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Integrate our Payment Gateway on Different Platforms
                </h1>
                <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom"> 
                    Choose between different platforms to integrate our payment 
                    gateway and start collecting payments instantly.
                </p>
                <div className='inner-row4'>
                    <div className='col1'>
                        <div className='img1'></div>
                        {Data.map((props) => {
                            return(
                                <div className='item4'>
                                    <h5>Integrate with…</h5>
                                    <h6>{props.title}</h6>
                                    <div className='inline'>
                                        <div className='icon' 
                                            style={{content: `url(${props.icon})`}}>
                                        </div>
                                        <Link to={props.to}>
                                            {props.link} <BsArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='col2'>
                        <div className='img2' data-aos='flip-left'></div>
                        <div className='img-container'>
                            <div className='img3'></div>
                            <h4>Beautiful Checkout UI</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row5'>
                <div className='col1'>
                    <h1>
                        Support Your Platform or Marketplace
                    </h1>
                    <p>
                        Platforms and marketplaces often have sophisticated payments 
                        requirements. They might need the flexibility to offer multiple gateway 
                        options to their partners or customers.
                    </p>
                    <Link to='/Marketplaces' className='hover-button'>Get Started</Link>
                </div>
                <div className='img' data-aos='flip-right'></div>
            </div>
        </div>
    )
}

export default Support
