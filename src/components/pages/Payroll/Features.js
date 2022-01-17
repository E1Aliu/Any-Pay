import React from 'react'
import { Link } from 'react-router-dom'
import { Data2 } from './data'
import './styles/features.scss'

const Features = () => {
    return (
        <div className='features-row'>

            <div className="row1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="img"></div>
                <div className="items1">
                    {Data2.map((props) => {
                        return(
                            <div className="item1">
                                <div className="icon" style={{content:`url(${props.icons})`}}></div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="inner-row">
                    <div className="text">
                        <h1>
                            Insure Employees 
                        </h1>
                        <p>
                            Cover your team regardless of it's size. Best in class employee
                            insurance with comprehensive coverage from day 1 that covers
                            pre-existing diseases, dependents and maternity.
                        </p>
                        <Link to='/' className='hover-button'>Get Started</Link>
                    </div>
                </div>
                <div className="img"></div>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
            </div>
        </div>
    )
}

export default Features
