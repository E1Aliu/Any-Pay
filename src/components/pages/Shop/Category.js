import React, {useState} from 'react'
import './styles/category.scss'
import { Link } from 'react-router-dom'

import {ShopData3} from '../../shared/Navbar/data'
import { BiSearch } from 'react-icons/bi'
import {FiMenu} from 'react-icons/fi'

const Category = () => {

    const [search, setSearch] = useState('')

    return (
        <div className='category-row'>

            <div className='categories'>
                <h4><FiMenu /> Shop by Category</h4>
                {ShopData3.map((props) => {
                    return(
                        <div className='link-container'>
                            <Link to={props.to}>
                                <div className='image' style={{content: `url(${props.img})`}}></div>
                                <h6>{props.link}</h6>
                            </Link>
                        </div>
                    )
                })}
            </div>

            <div className='right'>
                <div className='search-container'>
                    <span><BiSearch /></span>
                    <input 
                        type='text'
                        placeholder='Search for a store, brand or category'
                        name='search'
                        id='search'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className='images'>
                    <div className='img img1' data-aos='zoom-in-up'></div>
                    <div className='img img2' data-aos='zoom-in-up'></div>
                </div>
            </div>

        </div>
    )
}

export default Category
