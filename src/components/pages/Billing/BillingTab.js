import React from 'react'
import './styles/tab.scss'
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs'

import { TabData } from './data'
import BillingPanel from './BillingPanel'
import DTH from './DTH'
import Electricity from './Electricity'
import CreditCard from './CreditCard'
import Water from './Water'
import Gas from './Gas'
import Insurance from './Insurance'
import DataCard from './DataCard'
import { AiOutlinePlus } from 'react-icons/ai'

const BillingTab = () => {
    return (
        <div className='billing-tab-container'>
            <h1 data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                Recharges & Pays Bill on AnyPay
            </h1>

            <Tabs className='billing-tab' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <TabList>
                    {TabData.map((props) => {
                        return(
                            <Tab>
                                <div className='icon'>
                                    {props.icon}
                                </div>
                                <h6>{props.title}</h6>
                            </Tab>
                        )
                    })}
                    <button type='button' className='react-tabs__tab'>
                        <div className='icon'>
                            <AiOutlinePlus />
                        </div>
                        <h6>More</h6>
                    </button>
                </TabList>
                <div className='tab-panel'>
                    <TabPanel> <BillingPanel /> </TabPanel>
                    <TabPanel> <DTH /> </TabPanel>
                    <TabPanel> <Electricity /> </TabPanel>
                    <TabPanel> <CreditCard /></TabPanel>
                    <TabPanel> <Water /> </TabPanel>
                    <TabPanel> <Gas /> </TabPanel>
                    <TabPanel> <Insurance /> </TabPanel>
                    <TabPanel> <DataCard /> </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default BillingTab
