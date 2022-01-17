import React, {useState} from 'react'
import { BiSearch } from 'react-icons/bi'
import './styles/banner.scss'

const Banner = () => {
    const [search, setSearch] = useState('Search blog')

    return (
        <div className='banner'>

            <h1>Welcome to AnyPay Blog</h1>

            <div className='search-bar-container'>
                <div className='search-bar'>
                    <span><BiSearch /></span>
                    <input type='text' 
                        name='search'
                        id='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type='button'>Search</button>
                </div>
            </div>

        </div>
    )
}

export default Banner
