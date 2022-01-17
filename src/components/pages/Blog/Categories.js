import React from 'react'
import  Carousel from 'react-elastic-carousel'

import SliderItem from './SliderItem';
import './styles/slider.scss'
import {FiMenu} from 'react-icons/fi'
import {Data1} from './data'

const breakPoints = [
    { width: 4, itemsToShow: 1 },
    { width: 600, itemsToShow: 1}
];

const Categories = () => {
    return (
        <div className='categories'>
            <div className='list'>
                <h4><FiMenu /> Categories</h4>
                <div className=''>
                    {Data1.map((props) => {
                        return(
                            <div className="check">
                                <input
                                    type="checkbox"
                                    id={props.title}
                                    name={props.title}
                                />
                                <h5>{props.title}</h5>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Carousel className="slider" breakPoints={breakPoints} >
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </Carousel>
        </div>
    )
}

export default Categories
