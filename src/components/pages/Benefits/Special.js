import React from 'react'
import { Data1 } from './data'
import './styles/special.scss'

const Special = () => {
    return (
        <div className='special-row'>
            <h1 data-aos='fade-left'>
                What Makes AnyPay Different 
            </h1>
            <div className="items1">
                {Data1.map((props) => {
                    return(
                        <div className="item1" data-aos='flip-left'>
                            <div className="text">
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                            <div className="icon">
                                <div className="inner-icon" style={{content:`url(${props.icon})`}}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Special
