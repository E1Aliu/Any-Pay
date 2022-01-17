import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Data3 } from './data'
import './styles/banking.scss'
import './styles/transfers.scss'

const Banking = () => {
    return (
        <div className='transfers'>
            <div className="row3">
                <h1>
                    One Account for Smarter Online Banking
                </h1>
                <Tabs className='account-tab'>
                    <TabList>
                        <Tab>Collections</Tab>
                        <Tab>Account Management</Tab>
                        <Tab>Payouts</Tab>
                    </TabList>

                    <div className="tab-panel">
                        {Data3.map((props) => {
                            return(
                                <TabPanel>
                                    {props.items.map((l) => {
                                        return(
                                            <div className='item3'>
                                                <div className='icon'>
                                                    <div className='bg'></div>
                                                    {l.icon}
                                                </div>
                                                <h6>{l.title}</h6>
                                                <p>{l.description}</p>
                                            </div>
                                        )
                                    })}
                                </TabPanel>
                            )
                        })}
                    </div>
                </Tabs>
            </div>


            <div className="row2 row4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        
                <div className="images">
                    <div className="img-cont">
                        <div className="img2"></div>
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

                <div className="info">
                    <h1>
                        Easy Reconciliation
                    </h1>
                    <p>
                        Manage all your collections & payouts. Also, 
                        reconcile your transactions easily.
                    </p>
                    <Link to='/' className='hover-button'>Get Started</Link>
                </div>


            </div>

        </div>
    )
}

export default Banking
