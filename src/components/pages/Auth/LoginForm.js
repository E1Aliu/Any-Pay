import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './styles/authForms.scss'
import {BiEnvelope} from 'react-icons/bi'
import {VscLock} from 'react-icons/vsc'

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    return (
        <div className='form-container'>
            <form action=''>
                <div className='logo'></div>
                <h1>Log In</h1>

                <div className='input-content'>
                    <p>Email Address</p>
                    <div className='inner-input-content'>
                        <span><BiEnvelope /></span>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email'
                            className='auth-form-input'
                        />
                    </div>
                </div>

                <div className='input-content'>
                    <p>Password</p>
                    <div className='inner-input-content'>
                        <span><VscLock /></span>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            className='auth-form-input'
                        />
                    </div>
                </div>

                <div className='agree-terms-row'>
                    <div className='inner-row'>
                        <input type='checkbox' name='keep-logged' id='keep-logged' />
                        <label htmlFor='keep-logged' className='form-label-checkbox'>
                           Remember me
                        </label>
                    </div>
                    <Link to='/' className='link'>Forgot Password?</Link>
                </div>

                <div className='button-container'>
                    <button type='submit' className='submit-button'>Log In</button>
                </div>
                <p className='text'>
                    New to AnyPay? 
                    <Link to='/Signup'> Sign Up</Link>
                </p>

            </form>
        </div>
    )
}

export default LoginForm
