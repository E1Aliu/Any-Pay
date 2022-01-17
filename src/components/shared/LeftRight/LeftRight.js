import React from 'react'
import {Link} from 'react-router-dom'

import './LeftRight.scss'

const LeftRight = (props) => {
    return (
        <div className={`left-right ${props.styles}`} 
            style={{ backgroundImage: `url(${props.bg})` }}>

            <div className='col1'>
                {props.text ? <div className={`text ${props.noborder}`}>
                    {props.icon ? <div className='icon' style={{ content: `url(${props.icon})` }}></div> : null}
                    {props.text ? <p>{props.text}</p> : null}
                </div> : null}

                {props.title ? <h1>{props.title}</h1> : null}
                {props.description ? <p>{props.description}</p> : null}
                
                {props.to ? (
                    <Link to={props.to} className={`hover-button ${props.linkStyles}`}>
                        {props.link}
                        {props.symbol}
                    </Link>
                ) : null}

            </div>
            
            {props.img ? <div className='img' style={{ content: `url(${props.img})` }} 
               data-aos='fade-left'></div>
                : null}
            
            {props.other ?
                <div className='other-elements' >
                    {props.children}
                </div> 
            : null}
            
        </div>
    )
}

export default LeftRight
