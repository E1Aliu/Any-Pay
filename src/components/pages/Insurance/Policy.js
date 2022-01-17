import React from 'react'
import './styles/Policy.scss'
import { Link } from 'react-router-dom'

const Policy = () => {
    return (
        <div className='policy'>
            <div className="row row1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img">
                    <div className="inner-img1"></div>
                    <div className="bg bg1"></div>
                    <div className="bg bg2"></div>
                </div>
                <div className="info">
                    <h5>Insurance</h5>
                    <h1>Insurance renewals on the go</h1>
                    <p>
                        With multiple online and offline pay modes that AnyPay offers, the 
                        end consumers gets the flexibility to choose from different options 
                        for their insurance premium payment.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
            <div className="row row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h5>Make it easy</h5>
                    <h1>Avoid policy lapses or churns</h1>
                    <p>
                        Through Integration on AnyPay App, Insurance companies can 
                        choose to send notifications to their policy holders on AnyPay App 
                        which helps in easy and quick payment of renewal premium 
                        thereby reducing policy lapses.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
                <div className="img">
                    <div className="inner-img2"></div>
                    <div className="bg bg1"></div>
                    <div className="bg bg2"></div>
                </div>
            </div>            
        </div>
    )
}

export default Policy
