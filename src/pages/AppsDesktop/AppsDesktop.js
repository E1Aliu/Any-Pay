import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import AppsBanner from '../../components/shared/AppsBanner/AppsBanner'
import GetMoney from '../../components/shared/GetMoney/GetMoney'
import PaymentClicks from '../../components/shared/PaymentClicks/PaymentClicks'
import Features from '../../components/pages/Payouts/Features'
import Trusted from '../../components/shared/Trusted/Trusted'
import Capabilities from '../../components/pages/Payouts/Capabilities'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const AppsDesktop = () => {
    return (
        <div className='apps-page'>
            <Navbar />
            <AppsBanner />
            <GetMoney />
            <PaymentClicks />
            <Features />
            <Trusted />
            <Capabilities />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default AppsDesktop
