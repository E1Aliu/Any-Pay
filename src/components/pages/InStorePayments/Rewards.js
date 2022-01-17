import React from 'react'
import './styles/Rewards.scss'
import { Data1 } from './data'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const Rewards = () => {
    return (
        <div className='rewards'>
            <div className="row1">
                <h1 data-aos='fade-left'>Boost customers' purchasing power by offering more ways to pay.</h1>
                <div className="items1">
                    {Data1.map((props) => {
                        return(
                            <div className="item1" data-aos='flip-left'>
                                <div className="img-cont">
                                    <div className="img" style={{content: `url(${props.img})`}}></div>
                                </div>
                                <div className="text">
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>

                                    <Link to={props.to}>Learn more <BsArrowRight /></Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="row row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img img1"></div>
                <div className="info">
                    <h1>Earn Incredible Rewards</h1>
                    <p>
                        Get Offers from the hottest brands, Cashbacks, AnyPay First 
                        Points & more, every time you make a payment on AnyPay
                        App, don't wait anymore.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>

            <div className="row row3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h1>This is AnyPay In-store</h1>
                    <p>
                        Our in-store solution in a non-integrated plug-and-play way to
                        offer AnyPay payments in your brick & mortar. Customers pay on 
                        their own device for a contactless and safe checkout.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
                <div className="img img2"></div>
            </div>
        </div>
    )
}

export default Rewards
