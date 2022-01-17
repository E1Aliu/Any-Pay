import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/WomenFashion/Banner'
import FashionSlider from '../../components/shared/FashionSlider/FashionSlider'
import Main from '../../components/pages/Dresses/Main'
import FeaturedStores from '../../components/shared/FeaturedStores/FeaturedStores'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Dresses = () => {
    return (
        <div className='dresses-page'>
            <Navbar />
            <Banner />
            <FashionSlider />
            <Main />
            <FeaturedStores />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Dresses
