import React, {useState} from 'react'

import {Data4} from './data'
import './styles/banking.scss'

const Banking = () => {

    const [register, setRegister] = useState('')

    return (
        <div className='banking'>
            <div className='row3'>
                <div className='inner-row'>
                    <div className='text'>
                        <h1  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            Multi-currency banking without the bank.
                        </h1>
                        <p  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            Get all the features you need to bank in another country 
                            — regardless of where you’re located. With zero hassle and 
                            a one-time fee of 16 GBP.
                        </p>
                    </div>
                </div>
                <div className='img'></div>
            </div>

            <div className='row4'>
                <div className='logo'  data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
                <h5  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Product features
                </h5>
                <div className='input-container'  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <h1>
                        Your business is registered in
                    </h1>
                    <input type='text'
                        name='register'
                        value={register}
                        onChange={(e) => setRegister(e.target.value)}
                    />
                </div>
                <div className='items4'>
                    {Data4.map((props) => {
                        return(
                            <div className='item4' data-aos='flip-left'>
                                <div className='bg'></div>
                                <div className='inner-item'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Banking
