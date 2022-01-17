import React from 'react'
import './styles/sale.scss'
import { Link } from 'react-router-dom'

const Sale = () => {
    return (
        <div className='sale-row'>
             <div className="info">
                <h1>Build your perfect point of sale</h1>
                <p>
                    Our APIs and SDKs simplify the integration of Terminal 
                    into JavaScript, iOS, and Android-based point of sale 
                    applications.
                </p>
                <Link to='/' className='hover-button'>Get Started</Link>
            </div>

            <div className="images">
                <div className="img-cont" data-aos='flip-left'>
                    <div className="img"></div>
                </div>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>

                <div className="circle circle1">
                    <div className="inner-circle"></div>
                </div>
                <div className="circle circle2">
                    <div className="inner-circle"></div>
                </div>
            </div>
        </div>
    )
}

export default Sale
