import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Terminal/Banner'
import Businesses from '../../components/pages/Terminal/Businesses'
import Sale from '../../components/pages/Terminal/Sale'
import Readers from '../../components/pages/Terminal/Readers'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Terminal = () => {
    return (
        <div className='terminal-page'>
            <Navbar />
            <Banner />
            <Businesses />
            <Sale />
            <Readers />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Terminal
