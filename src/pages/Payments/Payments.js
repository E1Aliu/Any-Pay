import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Payments/Banner'
import Solutions from '../../components/pages/Payments/Solutions'
import HostedPayment from '../../components/pages/Payments/HostedPayment'
import BuySlider from '../../components/shared/BuySlider/BuySlider'
import PaymentLinks from '../../components/pages/Payments/PaymentLinks'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Payments = () => {
    return (
        <div className='payments-page'>
            <Navbar />
            <Banner />
            <Solutions />
            <HostedPayment />
            <BuySlider />
            <PaymentLinks />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Payments
