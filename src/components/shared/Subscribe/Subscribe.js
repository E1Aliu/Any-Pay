import React, {useState} from 'react'
import {FaRegEnvelope} from 'react-icons/fa'
import './subscribe.scss'

const Subscribe = () => {

    const [email, setEmail] = useState('');

    return (
        <div className='shared-subscribe'>
            <div className='block' data-aos='fade-left'>
                <h1>Subscribe to AnyPay</h1>
                <p>Get unlimited offers in your inbox </p>
            </div>

            <div className='email-container' data-aos='zoom-in-up'>
                <span><FaRegEnvelope /></span>
                 <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter your email'
                />
                <button type='submit'>Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe
