import React from 'react'
import {Link} from 'react-router-dom'

import { ProductsData,ProductsData2 } from '../data'

const ProductsMegamenu = () => {
    return (
        <div className='nav-megamenu products-megamenu'>
            <div className='links-col'>
                <div className='title'>
                    <h5>Products</h5>
                    <Link to='/'>Show All</Link>
                </div>
                <div className='megamenu-links'>
                    {ProductsData.map((props) => {
                        return(
                            <div className='megamenu-link'>
                                <Link to={props.to} className={props.class}>
                                    <div className='icon'>
                                        <div className='bg bg1'></div>
                                        <div className='bg bg2'></div>
                                        <div className='inner-icon'>
                                            {props.icon}
                                        </div>
                                    </div>

                                    <div className='block'>
                                        <h6>{props.title}</h6>
                                        <p>{props.descirption}</p>
                                    </div>
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
                <div className='title2'>
                    <h4>HOW WE WORK</h4>
                </div>
                {ProductsData2.map((props) => {
                    return(
                        <div className='col2-link'>
                            <Link to={props.to}>
                                <h6>{props.title}</h6>
                                <p>{props.text}</p>
                            </Link>
                        </div>
                    )
                })}
              
            </div>
        </div>
    )
}

export default ProductsMegamenu
