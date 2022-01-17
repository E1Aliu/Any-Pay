import React from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import { BsArrowRight } from 'react-icons/bs'
import './styles/tab.scss'

import { Data1, Data2 } from './data'

const TabPricing = () => {
    return (
        <div className='pricing-tab-container'>
            <Tabs className='pricing-tab'>
                <TabList data-aos='zoom-in-up'>
                    <Tab>Monthly</Tab>
                    <Tab>Yearly</Tab>
                </TabList>
                <div className='tab-panel' data-aos='zoom-in-up'>
                    <TabPanel>
                        {Data1.map((props) => {
                            return(
                                <div className='card'>
                                    <div className='img' style={{content: `url(${props.img})`}}></div>
                                    <h1>{props.title}</h1>
                                    <h5>{props.text}</h5>
                                    <div className='inline'>
                                        <h2>{props.price}/ </h2>
                                        <span>{props.info}</span>
                                    </div>

                                    <div className='items'>
                                        {props.items.map((i) => {
                                            return(
                                                <div className='item'>
                                                    <div className='icon'>{i.icon}</div>
                                                    <p>{i.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='link'>
                                        <Link to={props.to}>{props.link} <BsArrowRight /></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </TabPanel>

                    <TabPanel>
                        {Data2.map((props) => {
                            return(
                                <div className='card'>
                                    <div className='img' style={{content: `url(${props.img})`}}></div>
                                    <h1>{props.title}</h1>
                                    <h5>{props.text}</h5>
                                    <div className='inline'>
                                        <h2>{props.price} / </h2>
                                        <span>{props.info}</span>
                                    </div>

                                    <div className='items'>
                                        {props.items.map((i) => {
                                            return(
                                                <div className='item'>
                                                    <div className='icon'>{i.icon}</div>
                                                    <p>{i.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className='link'>
                                        <Link to={props.to}>{props.link} <BsArrowRight /></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    )
}

export default TabPricing
