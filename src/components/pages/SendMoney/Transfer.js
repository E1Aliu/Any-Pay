import React from 'react'

import { Data1, Data2 } from './data'
import './styles/transfer.scss'
import LeftRight from '../../shared/LeftRight/LeftRight'
import img3 from '../../../assets/SendMoney/img3.png'

const Transfer = () => {
    return (
        <div className='transfer'>
            <div className='row1'>
                <div className='col1'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Transfer Money to bank account
                    </h1>
                    <p data-aos="fade-left" data-aos-easing="ease-in-sine">
                        You can send money to almost anyone, in just a few easy 
                        clicks. All they need is an email address.
                    </p>
                    <div className='items1' data-aos="fade-left" data-aos-easing="ease-in-sine">
                        {Data1.map((props) => {
                            return(
                                <div className='item1'>
                                    <h6>{props.title}</h6>
                                    <div className='icon'>{props.icon}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='img'></div>
            </div>

            <div className='row2'>
                <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">How it works</h1>
                <p className='p' data-aos="fade-right" data-aos-easing="ease-in-sine">
                    How to send large amounts
                </p>
                <div className='inner-row'>
                    <div className='img' data-aos='flip-left'></div>
                    <div className='items2'>
                        {Data2.map((props) => {
                            return(
                                <div className='item2' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                    <div className='icon'>{props.id}</div>
                                    <div className='block'>
                                        <h6>{props.title}</h6>
                                        <p>{props.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <LeftRight    
                title='Talk with the experts in large transfers' 
                description='Our team of specialists is here to give you personalised 
                    support and guidance. No robots. Just real people, 
                    ready to help.'
                link='Get in touch'
                to='/Support'
                img={img3}
               
            />
        </div>
    )
}

export default Transfer
