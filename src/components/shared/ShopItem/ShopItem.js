import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import './style.scss'

const ShopItem = (props) => {
    return (
        <div className={`shared-shop-item ${props.style}`} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className='title'>
                <h5>{props.title1}</h5>
                <Link to={props.to}>See All <BsArrowRight /></Link>
            </div>
            <div className='small-items'>
                {props.items.map((l) => {
                    return(
                        <div className='small-item' data-aos='flip-left'>
                            <Link to={l.to2}>
                                <div className='img-container'>
                                    <div className='img' style={{content: `url(${l.img})`}}></div>
                                </div>
                                <h6>{l.title2}</h6>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShopItem
