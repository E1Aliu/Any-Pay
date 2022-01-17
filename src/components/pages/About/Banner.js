import React from 'react'
import './styles/banner.scss'
import {IoMdRefreshCircle} from 'react-icons/io'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="bg"></div>
            <div className="inner-banner">
                <div className="logo"></div>
                <h5><IoMdRefreshCircle /> About</h5>
                <h1>AnyPay is changing the world</h1>
                <p>Truly digital employee benefits in one single platform, 
                    provide tax free benefits to your employees.
                </p>
            </div>
        </div>
    )
}

export default Banner
