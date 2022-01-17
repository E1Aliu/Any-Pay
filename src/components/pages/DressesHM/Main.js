import React from 'react'
import { Link } from 'react-router-dom'

import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import './styles/main1.scss'
import './styles/main2.scss'

import ProductInfo from './ProductInfo'
import DressesTab from './DressesTab'

const Main = () => {
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

            <div className='tab-container'>
                <DressesTab />
                <ProductInfo />
            </div>
        </div>
    )
}

export default Main
