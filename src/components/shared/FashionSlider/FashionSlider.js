import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { Data1 } from './data';
import './style.scss'

const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width:400, itemsToShow: 2 },
    { width: 450, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 820, itemsToShow: 6 },
    { width:900, itemsToShow: 8 },
    { width: 1000, itemsToShow: 10 }
];
const FashionSlider = () => {

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
        <div className='shared-fashion-slider-container'>
            <Carousel className="slider"  
                    breakPoints={breakPoints} 
                    ref={carouselRef}
                    onPrevStart={onPrevStart}
                    onNextStart={onNextStart}
                    disableArrowsOnEnd={false}
            >
                {Data1.map((props) => {
                    return(
                        <div className='slider-item'>
                            <div className='image' style={{content: `url(${props.image})`}}></div>
                            <Link to={props.to}>{props.link}</Link>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}

export default FashionSlider
