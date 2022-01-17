import React, { useState } from 'react'
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi";

const DressesTab = () => {

    const [selectedTab, setSelectedTab] = useState(2);
    const tabCount = 4;

    return (
        <Tabs className='dresses-tab' selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
            <TabList>
                <Tab><div className='img img1'></div></Tab>
                <Tab><div className='img img2'></div></Tab>
                <Tab><div className='img img3'></div></Tab>
                <Tab><div className='img img4'></div></Tab>
            </TabList>

            <div className='tab-panel'>
                <TabPanel><div className='image image1'></div></TabPanel>
                <TabPanel><div className='image image2'></div></TabPanel>
                <TabPanel><div className='image image3'></div></TabPanel>
                <TabPanel><div className='image image4'></div></TabPanel>

                <div className='buttons'>
                    <button onClick={() => setSelectedTab((selectedTab + tabCount - 1) % tabCount )}><HiOutlineChevronLeft /></button>
                    <button onClick={() => setSelectedTab((selectedTab + 1) % tabCount )}><HiOutlineChevronRight /></button>
                </div>
            </div>
        </Tabs>
    )
}

export default DressesTab
