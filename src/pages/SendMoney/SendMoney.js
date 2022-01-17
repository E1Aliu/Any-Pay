import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/SendMoney/Banner'
import Transfer from '../../components/pages/SendMoney/Transfer'
import Trusted from '../../components/shared/Trusted/Trusted'
import Trusted2 from '../../components/shared/Trusted2/Trusted2'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const SendMoney = () => {
    return (
        <div className='send-money-page'>
            <Navbar />
            <Banner />
            <Transfer />
            <Trusted />
            <Trusted2 />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default SendMoney
