import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/OnlineBooking/Banner'
import FlightSlider from '../../components/pages/OnlineBooking/FlightSlider'
import TrainOffers from '../../components/pages/OnlineBooking/TrainOffers'
import Business from '../../components/pages/PaymentLinks/Business'
import CustomersComments from '../../components/shared/CustomersComments/CustomersComments'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const OnlineBooking = () => {
    return (
        <div className='online-booking-page'>
            <Navbar />
            <Banner />
            <FlightSlider />
            <TrainOffers />
            <Business />
            <CustomersComments />
            <Subscribe />
            <Footer /> 
        </div>
    )
}

export default OnlineBooking
