import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/PaymentGateway/Banner'
import Transact from '../../components/pages/PaymentGateway/Transact'
import Support from '../../components/pages/PaymentGateway/Support'
import Trusted from '../../components/shared/Trusted/Trusted'
import Developer from '../../components/pages/PaymentGateway/Developer'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const PaymentGateway = () => {
    return (
        <div className='payment-gateway-page'>
            <Navbar />
            <Banner />
            <Transact />
            <Support />
            <Trusted />
            <Developer />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default PaymentGateway
