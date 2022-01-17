import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar';
import LoginComponent from '../../components/pages/Auth/LoginComponent';
import Footer from '../../components/shared/Footer/Footer';

const Login = () => {
    return (
        <div className='login-page'>
            <Navbar styles='white-nav' />
            <LoginComponent />
            <Footer /> 
        </div>
    )
}

export default Login
