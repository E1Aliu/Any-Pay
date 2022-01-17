import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-elastic-carousel'
import './styles/slider.scss'
import { Data1 } from './data'


const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width:450, itemsToShow: 2 },
    { width: 550, itemsToShow: 3 },
    { width: 650, itemsToShow: 4 },
    { width: 750, itemsToShow: 5 },
    { width: 850, itemsToShow: 6 },
    { width: 950, itemsToShow: 7 },
];


const Slider = () => {

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
        <div className='slider-container'>
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

export default Slider
