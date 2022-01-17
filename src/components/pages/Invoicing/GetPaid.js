import React, {useState} from 'react'
import './styles/getPaid.scss'
import { Data1 } from './data'
import Item from './Item'

const GetPaid = () => {

    return (
        <div className='get-paid-component'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Built to save time and get you paid faster.
            </h1>
            <div className="items1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data1.map((d,i) => {
                    return(
                        <Item key={i} {...d} /> 
                    )
                })}
            </div>
        </div>
    )
}

export default GetPaid
