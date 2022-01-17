import React from 'react'
import { Link } from 'react-router-dom'
import './styles/dashboard.scss'
import { RiVisaLine } from 'react-icons/ri'
const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="row1 row11"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h1>Robust dashboard </h1>
                    <p>
                        Get access to a robust dashboard that offers numerous 
                        intelligent features like analytics as well as filter and search 
                        criteria to derive business-critical insights
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>

             
                    <div className='banner-img'>
                        <div className='inner-img'>

                            <div className='phone'></div>

                            <div className='card'>
                                <div className='code'>
                                    <div className='block'>
                                        <div className='line line1'></div>
                                        <div className='line line1'></div>
                                        <div className='line line1'></div>
                                        <div className='line line1'></div>
                                    </div>
                                    <div className='line3'></div>
                                    <div className='block'>
                                        <div className='line line2'></div>
                                        <div className='line line2'></div>
                                        <div className='line line2'></div>
                                        <div className='line line2'></div>
                                    </div>
                                </div>

                                <p className='p'>1567 0289 5583 4670</p>
                                <div className='inline'>
                                    <p>12/05</p>
                                    <div className='line5'></div>
                                </div>
                            </div>

                            <div className='billing'>
                                <div className='left'>
                                    <h5>Billing Info</h5>
                                    
                                    <div className='item1'>
                                        <h6>Payment Method</h6>
                                        <div className='visa'>
                                            <RiVisaLine /> 
                                            <span>Ending in 4670</span> 
                                            <div className='circle'>
                                                <div className='inner-circle'></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='item1'>
                                        <h6>Billing Address</h6>
                                        <div className='line line1'></div>
                                        <div className='line line2'></div>
                                    </div>
                                    <div className='item1'>
                                        <h6>Shipping Address</h6>
                                        <div className='line line1'></div>
                                        <div className='line line2'></div>
                                    </div>
                                </div>

                                <div className='image1'></div>
                            </div>
                        </div>
                    </div>
            
            </div>


            <div className="row1 row22" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="image"></div>
                <div className="info">
                    <h1>Instant Settlement API</h1>
                    <p>
                        An API to give businesses the edge. You can instantly settle every 
                        transaction when it happens or do it according to your own rules 
                        with easy integration. Schedule your crons as you want.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
