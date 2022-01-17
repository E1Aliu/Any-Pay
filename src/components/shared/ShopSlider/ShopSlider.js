import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel'


import './style.scss'
import { Data1 } from './data';
import {MdKeyboardArrowRight} from 'react-icons/md'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
];

const ShopSlider = () => {

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
        <div className='shared-shop-slide1' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <Carousel className="slider"  
                breakPoints={breakPoints} 
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
               {Data1.map((props) => {
                   return(
                       <div className="item1">
                           <div className="img" style={{content: `url(${props.img})`}}></div>
                           <div className="info">
                               <h1>{props.title}</h1>
                               <h5>{props.subtitle}</h5>
                               <Link to={props.to}>SHOP NOW</Link>
                           </div>
                       </div>
                   )
               })}

            </Carousel>
        </div>
    )
}

export default ShopSlider
