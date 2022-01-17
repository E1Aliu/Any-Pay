import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Marketplaces/Banner'
import Payments from '../../components/pages/Marketplaces/Payments'
import Shop from '../../components/pages/Marketplaces/Shop'
import Business from '../../components/pages/PaymentLinks/Business'
import Transact from '../../components/pages/PaymentGateway/Transact'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'
const Marketplaces = () => {
    return (
        <div className='payment-gateway-page marketplaces-page'>
            <Navbar />
            <Banner />
            <Payments />
            <Shop />
            <Business />
            <Transact />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Marketplaces
