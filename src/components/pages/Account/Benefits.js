import React from 'react'
import { Data1 } from './data'
import './styles/benefits.scss'

const Benefits = () => {
    return (
        <div className='benefits-row'>
            <h1 data-aos='zoom-in-up'>
                One Account with Many Benefits
            </h1>
            <div className="items1" data-aos='fade-up'>
                {Data1.map((props) => {
                    return(
                        <div className="item1">
                            <div className="icon" style={{content: `url(${props.icon})`}}></div>
                            <h6>{props.title}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Benefits
