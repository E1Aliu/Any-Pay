import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Account/Banner'
import Benefits from '../../components/pages/Account/Benefits'
import Transfers from '../../components/pages/Account/Transfers'
import Banking from '../../components/pages/Account/Banking'
import Trusted2 from '../../components/shared/Trusted2/Trusted2'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Account = () => {
    return (
        <div className='account-page'>
            <Navbar />
            <Banner />
            <Benefits />
            <Transfers />
            <Banking />
            <Trusted2 />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Account
