import React from 'react'
import {Link} from 'react-router-dom'

import './style.scss'

const SharedBanner = (props) => {
    return (
        <div className={`shared-banner ${props.styles}`} 
            style={{ backgroundImage: `url(${props.bg})` }}>

            <div className='inner-banner'>
                {props.text ? <h5>{props.titleIcon} {props.text}</h5> : null}
                {props.line ? <div className='line'></div> : null}

                {props.title ? <h1 data-aos='fade-right' data-aos-easing="ease-in-sine">
                    {props.title}</h1> : null
                }
                {props.description ? <p className='p' data-aos='fade-left' data-aos-easing="ease-in-sine">
                    {props.description}</p> : null
                }
                
                {props.to ? (
                    <Link to={props.to} className={`hover-button ${props.linkStyles}`}>
                        {props.link}
                        {props.symbol}
                    </Link>
                ) : null}

            </div>


            {props.other ?
                <div className='other-elements' >
                    {props.children}
                </div> 
            : null}
        </div>
    )
}

export default SharedBanner
