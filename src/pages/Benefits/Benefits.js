import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Benefits/Banner'
import Special from '../../components/pages/Benefits/Special'
import BenefitTab from '../../components/pages/Benefits/BenefitTab'
import Fuel from '../../components/pages/Benefits/Fuel'
import Community from '../../components/pages/Benefits/Community'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Benefits = () => {
    return (
        <div className='benefits-page'>
            <Navbar />
            <Banner />
            <Special />
            <BenefitTab />
            <Fuel />
            <Community />
            <CustomersComments />
            <Subscribe />
            <Footer /> 
        </div>
    )
}

export default Benefits
