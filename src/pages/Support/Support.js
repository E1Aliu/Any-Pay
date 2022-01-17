import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Support/Banner'
import Main from '../../components/pages/Support/Main'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Support = () => {
    return (
        <div className='support-page'>
            <Navbar />
            <Banner />
            <Main />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Support
