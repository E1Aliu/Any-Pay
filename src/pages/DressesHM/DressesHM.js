import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Main from '../../components/pages/DressesHM/Main'
import Styles from '../../components/pages/DressesHM/Styles'
import Reviews from '../../components/pages/DressesHM/Reviews'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const DressesHM = () => {
    return (
        <div className='dresses-hm-page'>
            <Navbar  styles='white-nav' />
            <Main />
            <Styles />
            <Reviews />
            <CustomersComments />
            <Subscribe />
            <Footer /> 
        </div>
    )
}

export default DressesHM
