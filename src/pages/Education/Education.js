import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Education/Banner'
import Component from '../../components/pages/Education/Component'
import Trusted from '../../components/shared/Trusted/Trusted'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Education = () => {
    return (
        <div className='education-page'>
            <Navbar />
            <Banner />
            <Component />
            <Trusted />
            <CustomersComments />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Education
