import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/InStorePayments/Banner'
import Rewards from '../../components/pages/InStorePayments/Rewards'
import Stores from '../../components/pages/InStorePayments/Stores'
import Payouts from '../../components/pages/SaaS/Payouts'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const InStorePayments = () => {

    return (
        <div className='in-store-payments-page'>
            <Navbar />
            <Banner />
            <Rewards />
            <Stores />
            <Payouts />
            <CustomersComments />
            <Subscribe />
            <Footer /> 
        </div>
    )
}

export default InStorePayments
