import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar';
import SignupComponent from '../../components/pages/Auth/SignupComponent';
import Footer from '../../components/shared/Footer/Footer';

const Signup = () => {
    return (
        <div className='signup-page'>
            <Navbar styles='white-nav'/>
            <SignupComponent />
           <Footer /> 
        </div>
    )
}

export default Signup
