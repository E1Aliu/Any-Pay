import React from 'react'
import { Link } from 'react-router-dom'
import './styles/transfers.scss'
import { Data2 } from './data'
import { BiSearch } from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'

const Transfers = () => {
    return (
        <div className='transfers'>
            
            <div className="row1">

                <div className="image" data-aos='flip-left'>
                    <div className="title">
                        <div className="circles">
                            <div className="circle circle1"></div>
                            <div className="circle circle2"></div>
                            <div className="circle circle3"></div>
                        </div>

                        <div className="logo-container">
                            <div className="logo"></div>
                            <h6>AnyPay</h6>
                        </div>
                    </div>
                    <div className="elements">
                        <h2>Money Transfer</h2>
                        <div className='history'>Transfer History</div>

                        <div className="inline1">
                            <p><BiSearch /> Search saved Account</p>
                            <p>All Saved accounts (14)</p>
                        </div>
                
                        <div className="items1">
                            {Data2.map((props) => {
                                return(
                                    <div className="item1">
                                        <div className="left">
                                            <div className="letter">{props.letter}</div>
                                            <div className="lines">
                                                <div className="line line1"></div>
                                                <div className="line line2"></div>
                                                <div className="line line2"></div>
                                            </div>
                                        </div>

                                        <button><FiMoreHorizontal /></button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h1>
                        Easy money transfers in seconds
                    </h1>
                    <p>
                        No need to add beneficiaries, cool-off period. Simply transfer 
                        funds singly or in bulk. Easily view your most used accounts 
                        for repeat transactions
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
            </div>


            <div className="row2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h1>
                        One Account, Multiple Access
                    </h1>
                    <p>
                        Empower your account with custom access for viewing, 
                        transacting and create custom approval matrix for your 
                        transactions.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>
                <div className="images">
                    <div className="img-cont">
                        <div className="img"></div>
                    </div>
                    <div className="squares squares1">
                        <div className="inner-square">
                            <div className="border"></div>
                            <div className="shadow shadow1"></div>
                        </div>
                    </div>

                    <div className="squares squares2">
                        <div className="inner-square">
                            <div className="border"></div>
                            <div className="shadow shadow2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfers
