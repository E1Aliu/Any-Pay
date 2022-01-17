import React from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Events/banner.jpg'

import {FaRegCalendarAlt} from 'react-icons/fa'
import { Link } from '@material-ui/core'
import {IoArrowRedoSharp} from 'react-icons/io5'

const Banner = () => {
    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaRegCalendarAlt />}
                text='Events'
                title='Join us for an event in your city'
                description="Learn more about Startups, Products, Sales and Funding 
                    form the Industry leaders in our events" 
            />

            <div className='bg'></div>
            <div className='card'>
                <div className="img"></div>
                <div className="text">
                    <div className="inner-text">
                        <h1>The Laravel League</h1>
                        <p>
                            Maybe it is the ease of migration, beautiful documentation or pristine ORM, Laravel is the 
                            new darling of PHP aficianados. Which is why AnyPay, one of India’s top payment solutions 
                            company, is hosting a Laravel Meetup on 28th Dec, 2021 .
                        </p>
                    </div>
                    <div className="links">
                        <Link to='/'><IoArrowRedoSharp />Share this event</Link>
                        <Link to='/'>Know More</Link>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Banner
