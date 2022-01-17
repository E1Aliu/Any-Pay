import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Events/Banner'
import PastEvents from '../../components/pages/Events/PastEvents'
import Banking from '../../components/pages/Business/Banking'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Events = () => {
    return (
        <div className='events-page'>
            <Navbar />
            <Banner />
            <PastEvents />
            <Banking />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Events
