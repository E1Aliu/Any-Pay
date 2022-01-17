import React from 'react'

import './styles/getPaid.scss'
import { Data1, Data2 } from './data'
import {MdKeyboardArrowRight} from 'react-icons/md'

const GetPaid = () => {
    return (
        <div className='get-paid'>
            <div className='row1'>
                {Data1.map((props) => {
                    return(
                        <div className='item1' data-aos='zoom-in-up'>
                            <div className='icon' style={{background: `${props.color}`}}>
                                {props.icon}
                            </div>
                            <h6>{props.title}</h6>
                            <p>{props.description}</p>
                        </div>
                    )
                })}
            </div>

            <div className='row2'>
                <div className='img'></div>
                <div className='items-container'>
                    <h1 data-aos='fade-left'>Creating a payment link is a no-brainer!</h1>
                    <div className='items2'>
                        {Data2.map((props) => {
                            return(
                                <div className='item2'>
                                    <div className='inline'>
                                        <div className='id'>
                                            <div className='square'></div>
                                            <h5>{props.id}</h5>
                                        </div>
                                        <div className='line'></div>
                                        <div className='arrow arrow1'><MdKeyboardArrowRight /></div>
                                        <div className='arrow arrow2'><MdKeyboardArrowRight /></div>
                                    </div>

                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetPaid
