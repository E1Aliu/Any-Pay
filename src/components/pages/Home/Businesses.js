import React from 'react'

import './styles/businesses.scss'
import {FaCheckCircle} from 'react-icons/fa'

const Businesses = () => {
    return (
        <div className='businesses'>

                <div className='bg1'></div>
                <div className='bg2'></div>

                <div className='line1'></div>
                <div className='line2'></div>

            <div className='inner-businesses'>
                <h1 data-aos='zoom-in-up'>Easy payment options, in one place</h1>
                <div className='items'>

                    <div className='item' data-aos='zoom-in-up'>
                        <div className='bg-item bg-item1'></div>

                        <div className='card card1'>
                            <div className='inner-card'>
                                <h6>1. Payment</h6>
                                <h5>Choose your provider</h5>

                                <div className='row1'>
                                    <FaCheckCircle />
                                    <div className='bank'></div>
                                </div>
                                <div className='row2'>
                                    <div className='circle'></div>
                                    <div className='inner-line'></div>
                                </div>
                                <div className='row2'>
                                    <div className='circle'></div>
                                    <div className='inner-line'></div>
                                </div>
                                <div className='row2'>
                                    <div className='circle'></div>
                                    <div className='inner-line'></div>
                                </div>
                                <div className='last'></div>
                            </div>
                        </div>
                    </div>

                    <div className='item' data-aos='zoom-in-up'>
                        <div className='bg-item bg-item2'></div>

                        <div className='card card2'>
                            <div className='inner-card'>
                                <h6>2. Merchant Setup</h6>
                                <h5>Business Type</h5>
                                <div className='images'>
                                    <div className='img-container'>
                                        <div className='inner-img inner-img1'></div>
                                    </div>
                                    <div className='img-container'>
                                        <div className='inner-img inner-img2'></div>
                                    </div>
                                    <div className='img-container'>
                                        <div className='inner-img inner-img3'></div>
                                    </div>
                                    <div className='img-container'>
                                        <div className='inner-img inner-img4'></div>
                                    </div>
                                </div>

                                <h5>Business Details</h5>

                                <div className='lines'>
                                    <div className='inner-line2'></div>
                                    <div className='inner-line2'></div>
                                </div>
                                <div className='last'></div>
                            </div>
                        </div>
                    </div>

                    <div className='item' data-aos='zoom-in-up'>
                        <div className='bg-item bg-item3'></div>

                        <div className='card card3'>
                            <div className='inner-card'>
                                <h6>3.Pay Bill</h6>
                                <div className='dollar'><h6>$</h6></div>

                                <div className='lines3'>
                                    <div className='colored-line colored-line1'></div>
                                    <div className='colored-line colored-line2'></div>
                                    <div className='colored-line colored-line1'></div>
                                </div>
                                <div className='last'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Businesses
