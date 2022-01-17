import React from 'react'

import LeftRight from '../../shared/LeftRight/LeftRight'
import MainCard from '../../shared/MainCard/MainCard'
import { Data1 } from './data'
import './styles/protection.scss'

import {FaFile} from 'react-icons/fa'

const Protection = () => {
    return (
        <div className='protection'>
            <div className='row1'>
                <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">
                   Get everything you need 
                </h1>
                <p className='p' data-aos="fade-right" data-aos-easing="ease-in-sine">
                    We offer a Buyer and Seller Protection system. Payments can 
                    be refund up to 180 days, based on what is sold.
                </p>
                <div className='items'>
                    {Data1.map((d, i) => {
                        return (
                            <MainCard key={i} {...d}/>
                        );
                    })}
                </div>
            </div>

            <LeftRight 
                styles='leftright-reverse'   
                title='Payment in a few clicks' 
                description='Millions of customers around the world use us for 
                            one simple reason: it’s simple. Just an email address 
                            and password will get you through to checkout before 
                            you can reach for your wallet.'
                link='Learn More'
                to='/Payments'
                other='true'
            >

                <div className='images'>

                    <div className='img'  data-aos='fade-right' data-aos-easing="ease-in-sine"></div>
                    <div className='bg1'></div>
                    <div className='bg2'></div>
                    <div className='bg3'></div>

                    <div className='div div1'  data-aos='fade-down' data-aos-easing="ease-in-sine">
                        <div className='line1'></div>
                    </div>

                    <div className='div div2'  data-aos='fade-up' data-aos-easing="ease-in-sine">
                        <FaFile />
                        <div className='line2'></div>
                        <div className='button'></div>
                    </div>

                    <div className='div div3' data-aos='fade-left' data-aos-easing="ease-in-sine">
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='row1'>
                            <div className='line line1'></div>
                            <div className='line line2'></div>
                        </div>
                        <div className='button'></div>
                    </div>
                </div>

            </LeftRight>
        </div>
    )
}

export default Protection
