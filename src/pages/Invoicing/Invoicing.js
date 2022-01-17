import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Invoicing/Banner'
import GetPaid from '../../components/pages/Invoicing/GetPaid'
import Customers from '../../components/pages/Invoicing/Customers'
import Payments from '../../components/pages/Invoicing/Payments'
import SendInvoice from '../../components/pages/Invoicing/SendInvoice'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Invoicing = () => {
    return (
        <div className='invoicing-page'>
            <Navbar />
            <Banner />
            <GetPaid />
            <Customers />
            <Payments />
            <SendInvoice />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Invoicing
