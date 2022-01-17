import React, {useState} from 'react'

import {BiSearch} from 'react-icons/bi'
import './styles/banner.scss'
const Banner = () => {

    const [search, setSearch] = useState('Search keywords')
    return (
        <div className='banner'>
            <div className='inner-banner'>
                <h1 data-aos='zoom-in-up'>Hi, how can we help?</h1>
                <div className='search-bar' data-aos='zoom-in-up'>
                    <div className='inner-search-bar'>
                        <span><BiSearch /></span>
                        <input 
                            type='text'
                            name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button type='button'>Search</button>
                    </div>
                </div>
                <p data-aos='zoom-in-up'>Search tips - Add your community name and keywords</p>
            </div>
        </div>
    )
}

export default Banner
