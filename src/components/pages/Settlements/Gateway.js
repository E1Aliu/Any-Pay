import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel';
import { Data1 } from './data';

import './styles/gateway.scss'

const breakPoints = [
    { width: 4, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 }
];

const Gateway = () => {

    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
      }
    };
    const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo('single-slide'.length);
      }
    };

    return (
        <div className='gateway'>
            <div className="slider-container">
                <div className="icon1" data-aos="fade-up" data-aos-anchor-placement="top-bottom"></div>
                <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">Supercharge your payment gateway</h1>
                <p className="p" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Encash your customer payments with Instant Settlements, 
                    now available from Day 1 of activation at 0% fee for a 
                    limited time. T&C apply
                </p>
                <Carousel className="slider"  
                            breakPoints={breakPoints} 
                            ref={carouselRef}
                            onPrevStart={onPrevStart}
                            onNextStart={onNextStart}
                            disableArrowsOnEnd={false}
                >
                    {Data1.map((props) => {
                        return(
                            <div className='slider-item' data-aos='flip-left'>
                                <div className="inline">
                                    <div className="icon" style={{content:`url(${props.icon})`}}></div>
                                    <h6>{props.title}</h6>
                                </div>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="row2"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img"></div>

                <div className="info">
                    <h1>On-Demand Settlements</h1>
                    <p>
                        The merchant can get instant fund transfers in his bank 
                        account as and when he demands 24x7, 365 days a year 
                        at a single click.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Gateway
