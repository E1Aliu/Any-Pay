import React from 'react'
import { Data1 } from './data'
import {FaRegCalendar} from 'react-icons/fa'
import { Link } from '@material-ui/core'
import './styles/pastEvents.scss'

const PastEvents = () => {
    return (
        <div className='past-events' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h1>Past events</h1>
            <div className="items1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {Data1.map((props) => {
                    return(
                        <div className="item1">
                            <div className="img" style={{content: `url(${props.img})`}}></div>
                            <div className="text">
                                <div className="inline">
                                    <p><FaRegCalendar /> {props.date}</p>
                                    <p>{props.place}</p>
                                </div>
                                <h6>{props.title}</h6>
                                <p className="p">{props.description}</p>
                                <Link to={props.to} className='hover-button'>Show event details</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="link-container">
                <Link to='/' className='hover-button'>View All</Link>
            </div>
        </div>
    )
}

export default PastEvents
