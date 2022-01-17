import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Payouts/Banner'
import Features from '../../components/pages/Payouts/Features'
import PayoutTab from '../../components/pages/Payouts/PayoutTab'
import Capabilities from '../../components/pages/Payouts/Capabilities'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Payouts = () => {
    return (
        <div className='payouts-page'>
            <Navbar />
            <Banner />
            <Features />
            <PayoutTab />
            <Capabilities />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Payouts
