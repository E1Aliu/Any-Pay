import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Insurance/Banner'
import Premium from '../../components/pages/Insurance/Premium'
import Policy from '../../components/pages/Insurance/Policy'
import GetStarted from '../../components/pages/Insurance/GetStarted'
import Business from '../../components/pages/PaymentLinks/Business'
import Spending from '../../components/pages/Subscriptions/Spending'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Insurance = () => {
    return (
        <div className='insurance-page'>
            <Navbar />
            <Banner />
            <Premium />
            <Policy />
            <GetStarted />
            <Business />
            <Spending />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Insurance
