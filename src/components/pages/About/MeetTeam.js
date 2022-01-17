import React from 'react'
import './styles/meetTeam.scss'
import Carousel from 'react-elastic-carousel'

import { Data3 } from './data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 650, itemsToShow: 3 },
    { width: 850, itemsToShow: 4 }
];

const MeetTeam = () => {
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
        <div className='meet-team'>
            <h1>Meet Our Team</h1>
            <Carousel className="slider"  
                breakPoints={breakPoints} 
                ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                disableArrowsOnEnd={false}
            >
               {Data3.map((props) => {
                   return(
                       <div className="item1">
                           <div className="img-cont">
                                <div className="img" style={{content: `url(${props.img})`}}></div>
                            </div>
                            <div className="text">
                                <h5>in</h5>
                                <h6>{props.name}</h6>
                                <p>{props.work}</p>
                            </div>
                       </div>
                   )
               })}

            </Carousel>
        </div>
    )
}

export default MeetTeam
