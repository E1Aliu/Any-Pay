import React from 'react'
import {Link} from 'react-router-dom'
import Carousel from 'react-elastic-carousel';

import '../BuySlider/BuySlider.scss'

import {BsArrowRight} from 'react-icons/bs'
import { Data } from './data';

const breakPoints = [
    { width: 4, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 700, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },
    { width: 900, itemsToShow: 5 }
];


const BuySlider2 = () => {

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
        <div className='shared-book-and-buy-slider'>
            <h1 data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
                Book & Buy with AnyPay
            </h1>
            <p data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
                Online payments without borders
            </p>
            <Carousel className="slider"  
                        breakPoints={breakPoints} 
                        ref={carouselRef}
                        onPrevStart={onPrevStart}
                        onNextStart={onNextStart}
                        disableArrowsOnEnd={false}
            >
                {Data.map((props) => {
                    return(
                        <div className='slider-item'>
                            <div className='img'>
                                <div className='inner-img'
                                    style={{content: `url(${props.img})`}}>
                                </div>
                            </div>
                            <div className='link'>
                                <Link to={props.to}>
                                    {props.link} <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </Carousel>

        </div>
    )
}

export default BuySlider2
