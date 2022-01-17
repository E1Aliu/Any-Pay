import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { MdAddShoppingCart } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import './styles/styles.scss'
import { Data3 } from './data'

const Styles = () => {
    return (
        <div className='styles-row'>
            <div className="title">
                <h4>Styles you may like</h4>
                <Link to='/Dresses'>See all <BsArrowRight /></Link>
            </div>
            <div className="items1">
                {Data3.map((props) => {
                    return(
                        <div className='item1' data-aos='flip-left'>
                            <div className='img-cont'>
                                <div className='img' style={{content: `url(${props.img})`}}></div>
                            </div>
                            <div className='info'>
                                <div className='inline inline1'>
                                    <h5>{props.title}</h5>
                                    <button type='button'><FiHeart /></button>
                                </div>
                                <h6>{props.price}</h6>
                
                                <div className='inline inline1'>
                                    <div className='circles'>
                                        {props.white ? <div className='circle white'></div> : null}
                                        {props.brown ? <div className='circle brown'></div> : null}
                                        {props.black ? <div className='circle black'></div> : null}
                                        {props.blue ? <div className='circle blue'></div> : null}
                                    </div>
                                    <button type='button'><MdAddShoppingCart /></button>
                                </div>
                
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Styles
