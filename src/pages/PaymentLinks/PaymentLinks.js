import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/PaymentLinks/Banner'
import GetPaid from '../../components/pages/PaymentLinks/GetPaid'
import Business from '../../components/pages/PaymentLinks/Business'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const PaymentLinks = () => {
    return (
        <div className='payment-links-page'>
            <Navbar />
            <Banner />
            <GetPaid />
            <Business />
            <CustomersComments />
            <Subscribe />
            <Footer />  
        </div>
    )
}

export default PaymentLinks
