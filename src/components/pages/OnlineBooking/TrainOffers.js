import React from 'react'
import { Link } from 'react-router-dom'
import './styles/trainOffers.scss'
import {Data2} from './data'
import { BsArrowRight } from 'react-icons/bs'

const TrainOffers = () => {
    return (
        <div className='offers'>
            <div className='row1'>
                <div className='images'>
                    <div className='img1' data-aos='flip-left'></div>
                    <div className='img2'></div>
                </div>
                <div className='col2'>
                    <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                        Movie Ticket Booking
                    </h1>
                    <p>
                        So get set to experience a flawless and quick movie ticket booking
                        platform which lets you choose from a number of multiplex theatres
                        and a long list of latest movies.
                    </p>
                    <Link to='/' className='hover-button'>Book Now</Link>
                </div>

            </div>

            <div className='row2'>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Train Offers
                </h1>
                <div className='items2' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {Data2.map((props) => {
                        return(
                            <div className='item2'>
                                <div className='img' style={{content: `url(${props.img})`}}></div>
                                <Link to={props.to}>{props.link} <BsArrowRight /></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TrainOffers
