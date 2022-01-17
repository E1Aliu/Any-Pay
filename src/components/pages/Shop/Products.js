import React from 'react'
import Carousel from 'react-elastic-carousel'

import ShopSlider from '../../shared/ShopSlider/ShopSlider'
import { Data2, Data3, Data4 } from './data'
import ShopItem from '../../shared/ShopItem/ShopItem'
import './styles/products.scss'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width:500, itemsToShow: 1}
];


const Products = () => {
    return (
        <div className='shop-products-container'>
            {Data2.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}

            <ShopSlider />

            {Data3.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}

        <div className='image-slider' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <Carousel className="slider" breakPoints={breakPoints} >
               <div className='img img1'></div>
               <div className='img img1'></div>
               <div className='img img1'></div>
            </Carousel>
        </div>


            {Data4.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}
        </div>
    )
}

export default Products
