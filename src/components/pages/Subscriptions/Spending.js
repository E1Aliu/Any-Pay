import React from 'react'
import { Link } from 'react-router-dom'
import './styles/spending.scss'
import { Data4 } from './data'

const Spending = () => {
    return (
        <div className='spending'>
            <div className='row row1'>

                <div className='images'>
                    <div className='top' data-aos='flip-right'>
                        {Data4.map((props) => {
                            return(
                                <div className='inner-item'>
                                    <div className='first'>
                                        <div className='logo' style={{content:`url(${props.logo})`}}></div>
                                        <div className='block'>
                                            <h6>{props.title}</h6>
                                            <small>{props.text}</small>
                                        </div>
                                    </div>
                                    <h5>{props.price}</h5>
                                </div>
                            )
                        })}
                    </div>
                    <div className='bg'></div>
                </div>
                <div className='col2'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine"> 
                        Get control over your subscriptions
                    </h1>
                    <p>
                        Stay notified about new subscriptions and all payment related 
                        activities via dynamic event notifications and be in full control 
                        of your business.
                    </p>
                    <Link to='/' className='hover-button'> 
                        Get Started
                    </Link>
                </div>
            </div>

            <div className='row row2'>
                <div className='col2'>
                    <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">
                        Stay on top of your spending
                    </h1>
                    <p>
                        Get an effortless breakdown of your finances to see where your
                        money is going and how to improve. We’ll notify you of important 
                        events that need your attention so you’re never caught off guard.
                    </p>
                    <Link to='/' className='hover-button'> 
                        Learn more
                    </Link>
                </div>
                <div className='img' data-aos='flip-left'></div>
            </div>





        </div>
    )
}

export default Spending
