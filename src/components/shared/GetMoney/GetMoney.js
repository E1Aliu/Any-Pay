import React from 'react'
import './style.scss'

import {RiLock2Fill} from 'react-icons/ri'
import {FaMouse, FaCalendarAlt} from 'react-icons/fa'
import {HiCurrencyDollar} from 'react-icons/hi'
import {BiTransfer} from 'react-icons/bi'

import MainCard from '../MainCard/MainCard'

const Data1 = [
    {
        icon:<RiLock2Fill />,
        title:'Mighty Protection',
        description:"You don't need to worry. With our AnyPay Buyer Protection you have not to worry about any problems.",
        color:'#3A3EA8'
    },
    {
        icon:<FaMouse />,
        title:'Easy to Use',
        description:'AnyPay is simple, after signup a short verification is needed, then you can start paying and selling.',
        color:'#BF3939'
    },
    {
        icon:<FaCalendarAlt />,
        title:'Organized Payments',
        description:'With our simple but yet mighty Dashboard organizing payments has reached a new level.',
        color:'#4C883B'
    },
    {
        icon:<BiTransfer />,
        title:'Transfer in Seconds ',
        description:"Payments can't be better. Pay anyone with just one simple click. Everything is done in lightspeed.",
        color:'#39ADBF'
    },
    {
        icon:<HiCurrencyDollar />,
        title:'Available Currencies',
        description:"We support every crypto currency possible, from BTC to ETH, from EON to NEO, they'll be converted automatically.",
        color:'#973AA8'
    }
]

const GetMoney = () => {
    return (
        <div className='shared-get-money'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Get your money faster, easier and cheaper with AnyPay
            </h1>
            <p className='p' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                We offer fast, instant and secure optimised payment with a 
                simple, single integration, just to make it easy for you.
            </p>
            <div className='items1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data1.map((d, i) => {
                    return(
                        <MainCard key={i} {...d} />
                    )
                })}
            </div>
        </div>
    )
}

export default GetMoney
