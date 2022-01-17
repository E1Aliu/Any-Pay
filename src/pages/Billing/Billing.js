import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Billing/Banner'
import BillingTab from '../../components/pages/Billing/BillingTab'
import Recharge from '../../components/pages/Billing/Recharge'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Billing = () => {
    return (
        <div className='billing-page'>
            <Navbar />
            <Banner />
            <BillingTab />
            <Recharge />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Billing
