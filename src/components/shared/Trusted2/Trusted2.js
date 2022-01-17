import React from 'react'
import './style.scss'

import {BiHeartCircle} from 'react-icons/bi'
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import {FaMoneyBillWave,FaMobile} from 'react-icons/fa'

const Data = [
    {
        icon:<RiMoneyDollarCircleFill />,
        title:'$7 billion sent every month'
    },
    {
        icon:<FaMoneyBillWave />,
        title:'$1.5 billion saved by customers a year'
    },
    {
        icon:<FaMobile />,
        title:'10 million customers'
    }
]

const Trusted2 = () => {
    return (
        <div className='shared-trusted2'>
            <div className='icon1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                 <BiHeartCircle />
            </div>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom"s>Trusted all over world</h1>
            <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Your money is on its way in a few clicks. No hidden costs, no surprises.
            </p>

            <div className='items' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data.map((props) => {
                    return(
                        <div className='item'>
                            <div className='icon'>
                                <div className='bg bg1'></div>
                                <div className='bg bg2'></div>
                                <div className='inner-icon'>
                                    {props.icon}
                                </div>
                            </div>
                            <h6>{props.title}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Trusted2
