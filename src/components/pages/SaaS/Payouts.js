import React from 'react'
import { Link } from 'react-router-dom'
import './styles/payouts.scss'
import './styles/operations.scss'
import { Data3 } from './data'

const Payouts = () => {
    return (
        <div className='payouts'>

            <div className='row3' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='info'>
                    <h1>
                        Make Easy Payouts
                    </h1>
                    <p>
                        Focus on your business and leave the hassles of money 
                        movement to us. Make payouts to vendors and sellers with 
                        a single click and effortlessly handle your end-to-end money flow.
                    </p>
                    <Link to='/Payouts' className='hover-button'>Get Started</Link>
                </div>

                <div className='image'></div>
            </div>
            
            <div className="row4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className='bg bg1'></div>
                <div className='bg bg2'></div>
                <div className="img"></div>
                <div className="inner-row">
                    <div className='info'>
                        <h1>
                            Customize settlements
                        </h1>
                        <p>
                            Make easy transfers and settlements to vendors and partners with 
                            flexible and automatic settlement plans. Choose between on-demand 
                            or rule-based settlements.
                        </p>
                        <Link to='/' className='hover-button'>Get Started</Link>
                    </div>
                </div>
            </div>

            <div className='saas-row'>
                <div className='inner-row' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='images'>
                        <div className='top top2'></div>
                        <div className='bg bg2'></div>
                    </div>
                    <div className='items'>
                        {Data3.map((props) => {
                            return(
                                <div className='item'>
                                    <h6>{props.title}</h6>
                                    <p>{props.description}</p>
                                </div>
                            )
                        })}

                        <Link to='/Payments' className='hover-button'>Get Started</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payouts
