import React from 'react'
import { Link } from 'react-router-dom'
import './styles/transact.scss'

const Transact = () => {
    return (
        <div className='transact-row'>
            <div className='img' data-aos='flip-left'></div>
            <div className='col2'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Transact with Any Gateway
                </h1>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    You want to expand to new markets, increase your business flexibility,
                    and support a better customer experience. So, transacting with multiple 
                    gateways is essential. But building and maintaining connections to multiple 
                    services is complicated on your own.
                </p>
                <Link to='/PaymentGateway' className='hover-button'>Get Started</Link>
            </div>
        </div>
    )
}

export default Transact
