import React from 'react'
import { Link } from 'react-router-dom'
import './styles/AccuratePayroll.scss'

const AccuratePayroll = () => {
    return (
        <div className='accurate-payroll-row'>
            <div className="info">
                <h1>Easy, accurate payroll</h1>
                <p>
                    Approve payroll when you’re ready, access integrated 
                    employee services, and manage everything in one 
                    place. Compliance, accuracy, and peace of mind.
                </p>
                <Link to='/' className='hover-button'>Learn more</Link>
            </div>
            <div className="images">
                <div className="img-cont" data-aos='flip-left'>
                    <div className="img"></div>
                </div>
                <div className="bg bg1"></div>
                <div className="bg bg2"></div>
                <div className="circle circle1">
                    <div className="inner-circle">
                        <div className="border"></div>
                        <div className="inner-circle1"></div>
                    </div>
                </div>
                <div className="circle circle2">
                    <div className="inner-circle">
                        <div className="border"></div>
                        <div className="inner-circle1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccuratePayroll
