import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { Data3, TabData1, TabData2 } from './data'
import './styles/PayoutTab.scss'

const PayoutTab = () => {
    return (
        <div className='tab-container'>

            <div className='row3'>
                <h1 data-aos="fade-right" data-aos-easing="ease-in-sine">
                    Your operations in mind.
                </h1>
                <p className='p' data-aos="fade-left" data-aos-easing="ease-in-sine">
                    Move ahead of file upload errors. Bulk payouts are easy now.
                </p>

                <div className='items3' data-aos='zoom-in-up'>
                    {Data3.map((props) => {
                        return(
                            <div className='item3'>
                                <div className='icon'>{props.icon}</div>
                                <h6>{props.title}</h6>
                                <p>{props.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='inner-container'>
            <Tabs className='payout-tab' data-aos="flip-right">
                    <TabList>
                        <Tab><h5>API</h5></Tab>
                        <Tab><h5>Dashboard</h5></Tab>
                    </TabList>

                    <div className="tab-panel">
                        <TabPanel>
                            {TabData1.map((props) => {
                                return(
                                    <div className='tab-item'>
                                        <div className='icon'>
                                            {props.icon}
                                        </div>
                                        <h6>{props.title}</h6>
                                        <p>{props.description}</p>
                                    </div>
                                )
                            })}
                        </TabPanel>
                        <TabPanel>
                            {TabData2.map((props) => {
                                return(
                                    <div className='tab-item'>
                                        <div className='icon'>
                                            {props.icon}
                                        </div>
                                        <h6>{props.title}</h6>
                                        <p>{props.description}</p>
                                    </div>
                                )
                            })}
                        </TabPanel>     
                    </div>
        
                </Tabs>
            </div>

        </div>
    )
}

export default PayoutTab
