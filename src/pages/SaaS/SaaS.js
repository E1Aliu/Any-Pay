import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/SaaS/Banner'
import Operations from '../../components/pages/SaaS/Operations'
import Payouts from '../../components/pages/SaaS/Payouts'
import Trusted2 from '../../components/shared/Trusted2/Trusted2'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'
const SaaS = () => {
    return (
        <div className='saas-page'>
            <Navbar />
            <Banner />
            <Operations />
            <Payouts />
            <Trusted2 />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default SaaS
