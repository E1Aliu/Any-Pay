import React from 'react'
import { Link } from 'react-router-dom'
import './styles/readers.scss'

const Readers = () => {
    return (
        <div className='readers'>
            <div className="row1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img"></div>
                <div className="items1">
                   <h1>
                        Pre-certified card readers
                   </h1>
                   <p>
                        Save months of developer and certification time with our EMV-certified AnyPay card 
                        readers. They provide end-to-end encryption, natively support chip cards and contactless
                        payments—including Apple Pay and Google Pay—and help protect you against liability for 
                        counterfeit fraud.
                   </p>
                   <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>

            <div className="row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="inner-row">
                    <div className="text">
                        <h1>
                            Scale with ease
                        </h1>
                        <p>
                            Easily manage in-person payments logistics at scale with 
                            our centralized fleet management tools.. Order and dropship 
                            new hardware, configure readers remotely, and more.
                        </p>
                        <Link to='/' className='hover-button'>Get Started</Link>
                    </div>
                </div>
                <div className="img"></div>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
            </div>
        </div>
    )
}

export default Readers
