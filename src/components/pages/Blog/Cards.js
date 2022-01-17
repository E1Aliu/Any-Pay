import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Data2 } from './data'
import { VscCircleFilled } from 'react-icons/vsc'
import './styles/cards.scss'

const Cards = () => {
    return (
        <div className='cards-container'>
            {Data2.map((props) => {
                return(
                    <div className='large-item'>

                        <div className='title'  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                            <div className='col1'>
                                <div className='image' style={{content:`url(${props.image})`}}></div>
                                <h4>{props.title1}</h4>
                            </div>
                            <Link to={props.to}>See all <BsArrowRight /></Link>
                        </div>

                        <div className='small-items'>
                            {props.features.map((l) => {
                                return(
                                    <div className='small-item' data-aos='flip-left'>
                                        <div className='image-container'>
                                            <div className='img' style={{content:`url(${l.img})`}}></div>
                                        </div>
                                        <div className='info'>
                                            <h5>{l.text}</h5>
                                            <h2>{l.title2}</h2>
                                            <p>{l.description}</p>

                                            <div className='inline'>
                                                <div className='first'>
                                                    <div className='profile' style={{content:`url(${l.profile})`}}></div>
                                                    <h6>{l.name}</h6>
                                                </div>
                                                <div className='second'>
                                                    <span>{l.date}</span>
                                                    <VscCircleFilled />
                                                    <span>2 min read</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
