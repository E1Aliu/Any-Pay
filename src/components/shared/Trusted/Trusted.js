import React from 'react'
import { Link } from 'react-router-dom'
import './trusted.scss'
import { Data } from './data'

const Trusted = () => {
    return (
        <div className='shared-trusted'>
            <div className='line'></div>
            <div className='inner-row'>
                <div className='col1'>
                    <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Trusted all over world
                    </h1>
                    <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        We’re available around the world, and we add new currencies all the 
                        time. If you think we should add a specific currency, let us know.
                    </p>
                    <div className='items'>
                        {Data.map((props) => {
                            return(
                                <Link to={props.to} className='item'>
                                    <div className='flag'
                                        style={{content: `url(${props.flag})`}}>
                                    </div>
                                    <h6>{props.country}</h6>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className='img'></div>
            </div>
        </div>
    )
}

export default Trusted
