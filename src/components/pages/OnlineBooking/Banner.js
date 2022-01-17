import React from 'react'
import {Tabs, Tab, TabPanel, TabList} from 'react-tabs'

import './styles/banner.scss'
import {RiBankCardFill} from 'react-icons/ri'
import TripTicket from './TripTicket'
import {BannerData} from './data'

const Banner = () => {
    return (
        <div className='banner'>

            <div className='bg'></div>
            <div className='inner-banner'>
                <h5 data-aos='zoom-in-up'><RiBankCardFill /> Online Booking</h5>
                <h1  data-aos='zoom-in-up'>Your Online Booking System</h1>
                <Tabs className='banner-tab'  data-aos='zoom-in-up'>
                    <TabList>
                        <div className='img'></div>
                        {BannerData.map((props) => {
                            return(
                                <Tab>
                                    {props.icon} {props.title}
                                </Tab>
                            )
                        })}
                    </TabList>

                    <div className='tab-panel-container'>
                        <TabPanel><TripTicket /></TabPanel>
                        <TabPanel><TripTicket /></TabPanel>
                        <TabPanel><TripTicket /></TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    )
}

export default Banner
