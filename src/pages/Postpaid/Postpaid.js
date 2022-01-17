import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Postpaid/Banner'
import Shopping from '../../components/pages/Postpaid/Shopping'
import Accepted from '../../components/pages/Postpaid/Accepted'
import BuySlider2 from '../../components/shared/BuySlider2/BuySlider2'
import Store from '../../components/pages/Postpaid/Store'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Postpaid = () => {
    return (
        <div className='postpaid-page'>
            <Navbar />
            <Banner />
            <Shopping />
            <Accepted />
            <BuySlider2 />
            <Store />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Postpaid
