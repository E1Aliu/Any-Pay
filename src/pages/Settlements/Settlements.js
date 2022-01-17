import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Settlements/Banner'
import Gateway from '../../components/pages/Settlements/Gateway'
import Marketplaces from '../../components/pages/Settlements/Marketplaces'
import Gateway2 from '../../components/pages/Settlements/Gateway2'
import Dashboard from '../../components/pages/Settlements/Dashboard'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Settlements = () => {
    return (
        <div className='settlements-page'>
            <Navbar />
            <Banner />
            <Gateway />
            <Marketplaces />
            <Gateway2 />
            <Dashboard />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Settlements
