import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/Home/Banner'
import ShopSlider from '../../components/pages/Home/ShopSlider'
import Protection from '../../components/pages/Home/Protection'
import Pay from '../../components/pages/Home/Pay'
import Finances from '../../components/pages/Home/Finances'
import Businesses from '../../components/pages/Home/Businesses'
import PaymentsLinks2 from '../../components/pages/Home/PaymentsLinks2'
import BuySlider from '../../components/shared/BuySlider/BuySlider'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const Home = () => {
    return (
        <div className='home-page'>
            <Navbar />
            <Banner />
            <BuySlider />
            <ShopSlider />
            <Protection />
            <Pay />
            <Finances />
            <Businesses />
            <PaymentsLinks2 />
            <CustomersComments />
            <Subscribe />
            <Footer />  
           
        </div>
    )
}

export default Home
