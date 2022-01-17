import React from 'react'
import './styles/premium.scss'
import { Data1 } from './data'

const Premium = () => {
    return (
        <div className='premium-row'>
            <h5 data-aos='zoom-in-up'>How it works</h5>
            <h1 data-aos='zoom-in-up'>
                Collect Insurance Premiums with ease with 
                AnyPay All-in-One Payment Solutions
            </h1>
            <div className="inner-row" data-aos='zoom-in-up'> 
                <div className="items1">
                    {Data1.map((props) => {
                        return(
                            <div className="item1">
                                <div className="icon">{props.icon}</div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="img" data-aos='fade-left'></div>
            </div>
        </div>
    )
}

export default Premium
