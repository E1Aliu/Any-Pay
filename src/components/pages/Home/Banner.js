import React from 'react'
import {Link} from 'react-router-dom'

import './styles/banner.scss'


const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='inner-banner'>
                <div className='text'>
                        <h1 data-aos='fade-left' data-aos-easing="ease-in-sine">
                            Modern Payments Platform
                        </h1>
                        <p>
                            AnyPay is a leading, integrated payment service provider 
                            focused on helping our merchant and financial institution 
                            clients to be more successful.
                        </p>
                        <div className='links'>
                            <Link to='/AppsDesktop' className='link1'>Download App</Link>
                            <Link to='/' className='link2'>More Info</Link>
                        </div>
                </div>
                <div className='img'></div>
            </div>

            <div className='rectangle rectangle1'></div>
            <div className='rectangle rectangle2'></div>
        </div>
    )
}

export default Banner
