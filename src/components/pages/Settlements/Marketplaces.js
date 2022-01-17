import React, {useState} from 'react'
import { BiEnvelope } from 'react-icons/bi'
import './styles/marketplaces.scss'

const Marketplaces = () => {

    const [subscribe, setSubscribe] = useState('')

    return (
        <div className='marketplaces'>

            <div className="row3">
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">How does it work?</h1>
                <div className="images" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="img img1"></div>
                    <div className="img img2"></div>
                    <div className="img img3"></div>
                </div>
            </div>

            <div className="row4" data-aos='flip-up'>
                <div className="left">
                    <h1>Instant Settlements for Marketplaces</h1>
                    <p>
                        Using marketplace for your business? Get your customer 
                        payments instantly with AnyPay soon. Join the waitlist.
                    </p>
                    <div className="search-bar">
                        <span><BiEnvelope /></span>
                        <input 
                            value={subscribe}
                            name='subscribe'
                            id='subscribe'
                            onChange={(e) => setSubscribe(e.target.value)}
                            placeholder='Enter your email adress'
                        />
                        <button type='button'>Subscribe</button>
                    </div>
                </div>
                <div className="right"></div>
            </div>
        </div>
    )
}

export default Marketplaces
