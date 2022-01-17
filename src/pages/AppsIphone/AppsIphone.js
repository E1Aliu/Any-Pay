import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import AppsBanner from '../../components/shared/AppsBanner/AppsBanner'
import PaymentClicks2 from '../../components/shared/PaymentClicks2/PaymentClicks2'
import Trusted from '../../components/shared/Trusted/Trusted'
import Capabilities from '../../components/pages/Payouts/Capabilities'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const AppsIphone = () => {
    return (
        <div className='apps-page'>
            <Navbar />
            <AppsBanner />
            <PaymentClicks2 />
            <Trusted />
            <Capabilities />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default AppsIphone
