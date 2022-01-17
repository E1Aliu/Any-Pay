import React from 'react'
import { Link } from 'react-router-dom'
import './styles/style.scss'
import { Data1, Data2 } from './data'

const Component = () => {
    return (
        <div className='component'>
            <div className='row1'>
                <div className='col1'>
                    <h1>
                        Our products are customized for the changing 
                        needs of the modern education industry
                    </h1>

                    <div className='items1'>
                        <div className='line'></div>
                        {Data1.map((props) => {
                            return(
                                <div className='item1'>
                                    <h6>{props.title}</h6>
                                    <div className='icon' style={{content:`url(${props.icon})`}}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='img'></div>
            </div>

            <div className='row2'>
                <div className='img'></div>
                <div className='col2'>
                    <h1>Innovate & Monetize Online learning</h1>
                    {Data2.map((props) => {
                        return(
                            <div className='item2'>
                                <h6>{props.title}</h6>
                                <div className='inline'>
                                    <div className='icon' style={{content:`url(${props.icon})`}}></div>
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        )
                    })}

                    <Link to='/Subscriptions' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Component
