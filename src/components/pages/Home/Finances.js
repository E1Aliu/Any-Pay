import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-elastic-carousel';

import MainCard from '../../shared/MainCard/MainCard'
import './styles/finances.scss'
import {SliderData, Data3} from './data'

const breakPoints = [
    { width: 4, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 }
];

const Finances = () => {
    return (
        <div className='finances'>
            <div className='row5'>
                <div className='left'>
                    <div className='bg1'></div>
                    <div className='bg2'></div>
                    <div className='img1' data-aos='flip-left'></div>
                </div>

                <Carousel className="slider" breakPoints={breakPoints}>
                    {SliderData.map((props) => {
                        return(
                            <div className='slider-item'>
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                                <Link to={props.to} className='hover-button'>
                                    {props.link}
                                </Link>
                            </div>
                        )
                    })}
                </Carousel>
                
                <div className='img2'></div>
            </div>

            <div className='home-row'>
                <div className='info'>
                    <h1 data-aos='fade-left' data-aos-easing="ease-in-sine">
                        <span>Get a fuller picture </span>of your finances
                    </h1>
                    <p className='p' data-aos='fade-left' data-aos-easing="ease-in-sine"> 
                        Bring your accounts together for a clearer view of what you 
                        have, what you’ve spent, and recent activity.
                    </p>
                    <div className='items' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        {Data3.map((d, i) => {
                            return (
                                <MainCard key={i} {...d}/>
                            );
                        })}
                    </div>
                </div>
                <div className='img1' data-aos='flip-left'></div>
            </div>
        </div>
    )
}

export default Finances
