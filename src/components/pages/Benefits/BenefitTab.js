import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

import './styles/tab.scss'
import { Data2 } from './data'

const BenefitTab = () => {
    return (
        <div className='benefit-tab-container'>

            <div className="images">
                <h1  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Food Wallet
                </h1>
                <p data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    Enjoy Digital Tax- Free food allowance through AnyPay Food Wallet
                </p>
                <div className="inner-images">
                    <div className="img1"></div>
                    <div className="img2" data-aos='flip-left'></div>
                    <div className="leaf leaf1"></div>
                    <div className="leaf leaf2"></div>
                </div>
            </div>

            <Tabs className='tab1'>
                <TabList>
                    <h1>Benefits for</h1>
                    <div className="list">
                        <Tab>Employers</Tab>
                        <Tab>Employees</Tab>
                    </div>
                </TabList>
                <div className="tab-panel">
                    {Data2.map((props) => {
                        return(
                            <TabPanel>
                                {props.items.map((l) => {
                                    return(
                                        <div className="item2">
                                            <div className={`icon ${l.class}`}>{l.icon}</div>
                                            <h6>{l.title}</h6>
                                            <p>{l.description}</p>
                                            <Link to={l.to}>Lean more <BsArrowRight /></Link>
                                        </div>
                                    )
                                })}
                            </TabPanel>
                        )
                    })}
                </div>
            </Tabs>
        </div>
    )
}

export default BenefitTab
