import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Payroll/Banner'
import Businesses from '../../components/pages/Payroll/Businesses'
import AccuratePayroll from '../../components/pages/Payroll/AccuratePayroll'
import Features from '../../components/pages/Payroll/Features'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Payroll = () => {
    return (
        <div className='payroll-page'>
            <Navbar />
            <Banner />
            <Businesses />
            <AccuratePayroll />
            <Features />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Payroll
