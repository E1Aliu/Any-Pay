import React from 'react'
import Carousel from 'react-elastic-carousel';

import './CustomersComments.scss'
import { Data } from './data';
import {BsFillStarFill} from 'react-icons/bs'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 1 }
];

const CustomersComments = () => {

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
        <div className='shared-customers-comments'>
            <h1 data-aos="fade-left" data-aos-easing="ease-in-sine">What our customers think!</h1>
            <Carousel className="slider"  
                    breakPoints={breakPoints} 
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
            >
                {Data.map((props) => {
                    return(
                        <div className='slider-item' data-aos="zoom-in-up" data-aos-easing="ease-in-sine">
                            <div className='mini-item'>
                                <div className='profile-container'>
                                    <div className='profile'
                                        style={{content: `url(${props.profile})`}}>
                                    </div>
                                    <div className='bg bg1'></div>
                                    <div className='bg bg2'></div>
                                </div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                                <span className='name'>-{props.name}</span>
                            </div>

                            <div className='text'>
                                <span><BsFillStarFill /> Trustpilot</span>
                                <p>Rated 4.1 / 5 based on 18,544 reviews. Showing our favorite reviews.</p>
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default CustomersComments
