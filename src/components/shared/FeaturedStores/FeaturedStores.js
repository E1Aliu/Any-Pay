import React from 'react'
import './style.scss'
import ShopItem from '../ShopItem/ShopItem'
import { Data } from './data'

const FeaturedStores = () => {
    return (
        <div className='shared-featured-stores'>
            {Data.map((d, i) => {
                return(
                    <ShopItem key={i} {...d} />
                )
            })}
        </div>
    )
}

export default FeaturedStores
