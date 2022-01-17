import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/WomenFashion/Banner'
import Slider from '../../components/pages/WomenFashion/Slider'
import FeaturedStores from '../../components/shared/FeaturedStores/FeaturedStores'
import Products from '../../components/pages/WomenFashion/Products'
import ShopSlider from '../../components/shared/ShopSlider/ShopSlider'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const WomenFashion = () => {
    return (
        <div className='women-fashion-page'>
            <Navbar />
            <Banner />
            <Slider/>
            <FeaturedStores />
            <Products />
            <ShopSlider />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default WomenFashion
