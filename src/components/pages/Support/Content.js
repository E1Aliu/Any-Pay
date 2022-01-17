import React from 'react'
import { Link } from 'react-router-dom'
import { Data4,Data5 } from './data'
import {BsPlayFill} from 'react-icons/bs'

const Content = () => {
    return (
        <div className='content'>
            <div className='row1'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Browse support articles by topic
                </h1>
                <div className='items1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data4.map((props) => {
                        return(
                            <div className='item1'>
                                <div className='img'
                                    style={{content: `url(${props.icon})`}}>
                                </div>
                                <div className='block'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='row2'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Video Tutorials
                </h1>
                <div className='items2' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data5.map((props) => {
                        return(
                            <div className='item2'>
                                <Link to='/Support'>
                                    <div className='img' 
                                        style={{content: `url(${props.img})`}}>
                                    </div>

                                    <div className='icon'>
                                        <BsPlayFill />
                                    </div>
                                </Link>
                                <h6>{props.title}</h6>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='row3' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='info'>
                    <h5>You are not alone</h5>
                    <h1>Join our online community!</h1>
                    <p>
                        Our online community is a place for autistic people and 
                        their families to meet like-minded people and share their 
                        thoughts and experiences.
                    </p>
                    <Link to='/Signup' className='hover-button'>Join Now</Link>
                </div>
                <div className='img'></div>
            </div>
        </div>
    )
}

export default Content
