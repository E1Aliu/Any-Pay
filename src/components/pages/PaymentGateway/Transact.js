import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Transact.scss'
import { Data1 } from './data'

const Transact = () => {
    return (
        <div className='transact'>
            <div className='row1'>
                <h1 data-aos='zoom-in-up'>Powerful reasons to choose AnyPay Payment Gateway</h1>
                <div className='items1' data-aos='zoom-in-up'>
                    {Data1.map((props) => {
                        return(
                            <div className='item1'>
                                <div className='icon'>{props.icon}</div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>


            <div className='row2'>
                <div className='img' data-aos='flip-left'></div>
                <div className='col2'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Transact with Any Gateway
                    </h1>
                    <p>
                        You want to expand to new markets, increase your business flexibility,
                        and support a better customer experience. So, transacting with multiple 
                        gateways is essential. But building and maintaining connections to multiple 
                        services is complicated on your own.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Transact
