import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Shop/Banner'
import Slider from '../../components/pages/Shop/Slider'
import Category from '../../components/pages/Shop/Category'
import Products from '../../components/pages/Shop/Products'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Shop = () => {
    return (
        <div className='shop-page'>
            <Navbar />
            <Banner />
            <Slider />
            <Category />
            <Products />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Shop
