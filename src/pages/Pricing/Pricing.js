import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Pricing/Banner'
import TabPricing from '../../components/pages/Pricing/TabPricing'
import Features from '../../components/pages/Pricing/Features'
import Business from '../../components/pages/PaymentLinks/Business'
import Solutions from '../../components/pages/Payments/Solutions'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Pricing = () => {
    return (
        <div className='pricing-page'>
            <Navbar />
            <Banner />
            <TabPricing />
            <Features />
            <Business />
            <Solutions />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Pricing
