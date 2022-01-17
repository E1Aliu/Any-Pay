import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import Banner from '../../components/pages/About/Banner'
import SendMoney from '../../components/pages/About/SendMoney'
import Solutions from '../../components/pages/About/Solutions'
import MeetTeam from '../../components/pages/About/MeetTeam'
import Community from '../../components/pages/About/Community'
import Subscribe from '../../components/shared/Subscribe/Subscribe'
import Footer from '../../components/shared/Footer/Footer'

const About = () => {
    return (
        <div className='about-page'>
            <Navbar />
            <Banner />
            <SendMoney />
            <Solutions />
            <MeetTeam />
            <Community />
            <Subscribe />
            <Footer />
        </div>
    )
}

export default About
