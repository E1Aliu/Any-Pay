import React from 'react'
import {Link} from 'react-router-dom'

import { ShopData1, ShopData2 } from '../data'

const ShopMegamenu = () => {
    return (
        <div className='nav-megamenu shop-megamenu'>
            <div className='links-col'>
                <div className='title'>
                    <h5>Products</h5>
                    <Link to='/Shop'>Show All</Link>
                </div>
                <div className='megamenu-links'>
                    {ShopData1.map((props) => {
                        return(
                            <div className='megamenu-link2'>
                                <Link to={props.to} className='shop-link'>
                                    <div className='img' style={{content: `url(${props.img})`}}></div>
                                    <h6>{props.link}</h6>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='lines'>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
                <div className='line line4'></div>
                <div className='line line1'></div>
                <div className='line line2'></div>
                <div className='line line3'></div>
                <div className='line line4'></div>
            </div>
            <div className='right-col'>
                <div className='title'>
                    <h5>FEATURED STORES</h5>
                    <Link to='/'>Show All</Link>
                </div>
                <div className='megamenu-links'>
                    {ShopData2.map((props) => {
                        return(
                            <div className='megamenu-link2'>
                                <Link to={props.to} className='shop-link'>
                                    <div className='img' style={{content: `url(${props.img})`}}></div>
                                    <h6>{props.link}</h6>
                                </Link>
                            </div>
                        )
                    })}
                </div>
              
            </div>
        </div>
    )
}
export default ShopMegamenu
