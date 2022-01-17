import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Business/Banner'
import OurProducts from '../../components/pages/Business/OurProducts'
import Banking from '../../components/pages/Business/Banking'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Business = () => {
    return (
        <div className='business-page'>
           <Navbar />
           <Banner />
           <OurProducts />
           <Banking />
           <CustomersComments />
           <Subscribe />
           <Footer />
        </div>
    )
}

export default Business
