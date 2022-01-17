import { Link } from '@material-ui/core'
import React from 'react'
import { Data2 } from './data'
import './styles/solutions.scss'

const Solutions = () => {
    return (
        <div className='solutions'>
            <div className="row3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img"></div>
                <div className="info">
                    <h1>
                        Millions of customers around the world use us for one simple reason: it’s simple.
                    </h1>
                    {Data2.map((props) => {
                        return(
                            <div className="item3">
                                <div className="icon">
                                    <div className="inner-icon inner-icon1"></div>
                                    <div className="inner-icon inner-icon2">{props.icon}</div>
                                </div>
                                <p>{props.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="row4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h5>AnyPay App</h5>
                    <h1>We offer the best solutions for you !</h1>
                    <p>
                        More than 300 million use AnyPay to Pay at their stores. And that’s not all, 
                        AnyPay App is used to Pay bills, do Recharges, Send money to friends & 
                        family, Book movies & travel tickets.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
                <div className="img-cont">
                    <div className="img"></div>
                </div>
            </div>
        </div>
    )
}

export default Solutions
