import React from 'react'
import { Link } from 'react-router-dom'
import './styles/customers.scss'

const Customers = () => {
    return (
        <div className='customers'>
            <div className="row row1" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="images">
                    <div className="img img1"></div>
                    <div className="bg bg1"></div>
                    <div className="circles circles1">
                        <div className="inner-circles">
                            <div className="circle circle1"></div>
                            <div className="circle circle2"></div>
                        </div>
                    </div>

                    <div className="circles circles2">
                        <div className="inner-circles">
                            <div className="circle circle1"></div>
                            <div className="circle circle2"></div>
                        </div>
                    </div>

                    <div className='phone'>
                        <div className="url">anypay.com</div>
                        <h5>
                            Birds & Bees Nursery 
                        </h5>
                        <h5>
                            Invoice #5
                        </h5>
                        <h2>$240.00</h2>
                        <span>Due April 04 2021</span>
                        <div className="small-item">
                            <h6>Payment amount</h6>
                            <div className="input">$240.00</div>
                        </div>
                        <div className="small-item">
                            <h6>Payment method</h6>
                            <div className="input">
                                <div className="check check1"></div>
                            </div>
                            <div className="input">
                                <div className="check"></div> Paypal
                            </div>
                            <div className="input">
                                <div className="check"></div>Bank transfer
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info">
                    <h1>Share detailed invoices with your customers</h1>
                    <p>
                        Let your customers know what they are being charged for with detailed 
                        breakdown of the expenses including price, taxes & discounts. Provide 
                        your customers the accurate information through online payments.
                    </p>
                    <Link to='/' className='hover-button'>Learn More</Link>
                </div>
            </div>


            <div className="row row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h1>Create customizable invoices</h1>
                    <p>
                        Each invoice is beautifully formatted, making you look like the 
                        professional you are. Use a standard invoice template or add 
                        a logo, choose colors, and include your brand with AnyPay’s 
                        invoicing software.
                    </p>
                    <Link to='/' className='hover-button'>Learn More</Link>
                </div>

                <div className="images">
                    <div className="img img2"></div>
                    <div className="bg bg2"></div>
                    <div className="circles circles1">
                        <div className="inner-circles">
                            <div className="circle circle1"></div>
                            <div className="circle circle2 circle3"></div>
                        </div>
                    </div>

                    <div className="circles circles2">
                        <div className="inner-circles">
                            <div className="circle circle1"></div>
                            <div className="circle circle2 circle3"></div>
                        </div>
                    </div>

                    <div className='cards'>

                        <div className="card1">
                            <h5>COMPANY</h5>
                            <div className="input">Kosoy Customs</div>
                            <h5>COLOR</h5>
                            <div className="colors">
                                <div className="color color1"></div>
                                <div className="color color2"></div>
                                <div className="color color3"></div>
                                <div className="color color4"></div>
                            </div>
                        </div>

                        <div className="card2">
                            <div className="inline">
                                <span>Edit</span>
                                <div className="block">
                                    <h6>Invoice 96</h6>
                                    <small>Kosoy Customs</small>
                                </div>
                                <span>Done</span>
                            </div>
                            <div className="img3"></div>
                            <div className="inner-card">
                                <small>Total</small>
                                <h2>$450.50</h2>
                                <small>Due in 30 days</small>
                                <button>Send</button>
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Customers
