import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs'

import Categories from './Categories'
import Pagination1 from './Pagination1'
import Pagination2 from './Pagination2'

import './styles/main1.scss'
import './styles/main2.scss'

import { FaHome } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineAppstore, AiOutlineMenu } from 'react-icons/ai'

const Main = () => {

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    return (
        <div className='main-container'>
            <div className='links'>
                <Link to='/'><FaHome /></Link>
                <span><MdKeyboardArrowRight /></span>
                <Link to='/WomenFashion'>Women's Fashion</Link>
                <span><MdKeyboardArrowRight /></span>
                <Link to='/Dresses'>Dresses</Link>
                <span><MdKeyboardArrowRight /></span>
                <Link to='/DressesHM'>H & M</Link>
            </div>

            <div className='categories-container'>
                <Categories />

                <div className='pagination-container'>
                    <Tabs>
                        <div className='list-container'>
                            <div className='search-bar'>
                                <span><BiSearch /></span>
                                <input
                                    type='text'
                                    name='search'
                                    id='search'
                                    placeholder='Search for a store, brand or category'
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            <div className='selects'>
                                <div className='select'>
                                    <p>Sort by:</p>
                                    <select value={sort} onChange={(e) =>setSort(e.target.value)}>
                                        <option value='popularity'>Popularity</option>
                                        <option value='newest'>Newest</option>
                                        <option value='oldest'>Oldest</option>
                                    </select>   
                                </div>
                                <TabList>
                                    <Tab><AiOutlineAppstore /></Tab>
                                    <Tab><AiOutlineMenu /></Tab>
                                </TabList>
                            </div>
                        </div>
                        <div className='tab-panel'>
                            <TabPanel className='tab-panel1'> <Pagination1 /></TabPanel>
                            <TabPanel className='tab-panel2'> <Pagination2 /></TabPanel>
                        </div>
                    </Tabs>           
                </div>
            </div>
        </div>
    )
}

export default Main
