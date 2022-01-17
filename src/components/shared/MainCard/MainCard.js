import React from 'react'

import './MainCard.scss'

const MainCard = (props) => {
    return (
        <div className='shared-main-card'>
            <div className='icon'>
                <div className='bg bg1' style={{background: `${props.color}`}}></div>
                <div className='bg bg2' style={{background: `${props.color}`}}></div>
                <div className='inner-icon' style={{color: `${props.color}`}}>
                    {props.icon}
                </div>
            </div>
            <h6>{props.title}</h6>
            <p>{props.description}</p>
        </div>
    )
}

export default MainCard
