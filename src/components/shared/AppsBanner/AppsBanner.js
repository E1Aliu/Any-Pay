import React from 'react'
import { Link } from 'react-router-dom'

import {AppsData} from './data'
import './style.scss'

const AppsBanner = () => {
    return (
        <div className='shared-apps-banner'>

            <div className='inner-banner'>
                <h5 data-aos='zoom-in-up'>
                    Apps
                </h5>
                <h1 data-aos='zoom-in-up'>
                    The next level shopping app
                </h1>
                <p data-aos='zoom-in-up'>
                    Get the free AnyPay app on your platforms
                </p>
            </div>

            <div className='img'></div>

            <div className='cards' data-aos='fade-left'>
                {AppsData.map((props) => {
                    return(
                        <div className={`card ${props.class}`}>
                            <Link to={props.to}>
                                <div className='inner-icon'>{props.icon}</div>
                                <h6>{props.title}</h6>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AppsBanner
