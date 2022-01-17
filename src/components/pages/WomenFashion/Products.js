import React from 'react'
import './styles/products.scss'
import Carousel from 'react-elastic-carousel'

import FashionSlider from '../../shared/FashionSlider/FashionSlider'
import ShopItem from '../../shared/ShopItem/ShopItem'
import { Data, Data2 } from './data'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500, itemsToShow: 1}
];


const Products = () => {
    return (
        <div className='fashion-products'>

            <div className='image-slider' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Carousel className="slider" breakPoints={breakPoints} >
                <div className='img img1'></div>
                <div className='img img1'></div>
                <div className='img img1'></div>
                </Carousel>
            </div>

            {Data.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}

            <FashionSlider />

            <div className='image-slider' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <Carousel className="slider" breakPoints={breakPoints} >
                <div className='img img2'></div>
                <div className='img img2'></div>
                <div className='img img2'></div>
                </Carousel>
            </div>

            {Data2.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}

        </div>
    )
}

export default Products
