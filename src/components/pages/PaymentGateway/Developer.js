import React from 'react'
import { Data3 } from './data'
import './styles/support2.scss'

const Developer = () => {
    return (
        <div className='developer-row'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Developer friendly payment gateway integration
            </h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Get pre-built plugins for swift and seamless 
                integration with the payment gateway.
            </p>
            <div className='items'>
                {Data3.map((props) => {
                    return(
                        <div className='item' data-aos='flip-up'>
                            <div className='logo'
                                style={{content: `url(${props.logo})`}}>
                            </div>
                            <h6>{props.title}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Developer
