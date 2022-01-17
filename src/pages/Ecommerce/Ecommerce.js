import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Ecommerce/Banner'
import EcommerceSlider from '../../components/pages/Ecommerce/EcommerceSlider'
import Features from '../../components/pages/Ecommerce/Features'
import Shopping from '../../components/pages/Ecommerce/Shopping'
import Store from '../../components/pages/Postpaid/Store'
import Transact from '../../components/pages/Ecommerce/Transact'
import Trusted2 from '../../components/shared/Trusted2/Trusted2'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Ecommerce = () => {
    return (
        <div className='postpaid-page ecommerce-page'>
            <Navbar />
            <Banner />
            <EcommerceSlider />
            <Features />
            <Shopping />
            <Store />
            <Transact />
            <Trusted2 />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Ecommerce
