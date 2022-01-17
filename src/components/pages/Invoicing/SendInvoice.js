import React from 'react'
import { Link } from 'react-router-dom'
import './styles/SendInvoice.scss'
import { FaCheckDouble } from 'react-icons/fa'

const SendInvoice = () => {
    return (
        <div className='send-invoice' >
            <div className="row3" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <h1>Invoices that are instantly payable</h1>
                <div className="cards">
                    <div className="card-container">
                        <h5>Create GST based invoices through an easy to use platform</h5>
                        <div className="card card1">
                            <h6>ADD ITEM</h6>
                            <div className="input">Single room for 2 nights</div>
                            <div className="input input1">Total Amount $9000</div>

                            <h6>ADD TAX</h6>
                            <div className="input">GST @15% Inclusive</div>
                            <button type='button'>CREATE INVOICE</button>
                        </div>
                    </div>

                    <div className="card-container">
                        <h5>Notify your customer through email and sms</h5>
                        <div className="card card2">
                            <h6>ADD ITEM</h6>
                            <div className="input input1">Total Amount $9000</div>

                            <h6>CUSTOMER DETAILS</h6>
                            <div className="input">GST @15% Inclusive</div>
                            <div className="input">hanna.sels@email.com</div>
                            <button type='button'>SEND INVOICE</button>
                        </div>
                    </div>

                    <div className="card-container">
                        <h5>Get paid faster directly from the invoice</h5>
                        <div className="card card3">
                            <div className="item1">
                                <div className="icon"><FaCheckDouble /></div>
                                <div className="block">
                                    <h4>Payment Received</h4>
                                    <h4> $9000</h4>
                                </div>
                            </div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h1>Send an invoice </h1>
                    <p>
                        Send an invoice via email, Facebook Messenger, and more.
                        Share your invoices via text, email, or other platforms like 
                        WhatsApp and Facebook Messenger.
                    </p>
                    <Link to='/' className='hover-button'>Learn more</Link>
                </div>
                <div className="images">
                    <div className="img1"></div>
                    <div className="img2"></div>
                </div>
            </div>
        </div>
    )
}

export default SendInvoice
