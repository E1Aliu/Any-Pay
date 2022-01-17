import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Subscriptions/Banner'
import Payments from '../../components/pages/Subscriptions/Payments'
import Spending from '../../components/pages/Subscriptions/Spending'
import Customers from '../../components/pages/Subscriptions/Customers'
import Business from '../../components/pages/PaymentLinks/Business'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Subscriptions = () => {
    return (
        <div className='subscriptions-page'>
            <Navbar />
            <Banner />
            <Payments />
            <Spending />
            <Customers />
            <Business />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Subscriptions
