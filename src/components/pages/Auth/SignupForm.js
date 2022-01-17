import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './styles/authForms.scss'
import {BiUser, BiEnvelope} from 'react-icons/bi'
import {VscLock} from 'react-icons/vsc'

const SignupForm = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className='form-container'>
        <form action=''>
            <div className='logo'></div>
            <h1>Sign Up</h1>

            <div className='input-content'>
                <p>First name<span>*</span></p>
                <div className='inner-input-content'>
                    <span><BiUser /></span>
                    <input
                        type='text'
                        name='firstname'
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        placeholder='Enter your first name'
                        className='auth-form-input'
                    />
                </div>
            </div>

            <div className='input-content'>
                <p>Last name<span>*</span></p>
                <div className='inner-input-content'>
                    <span><BiUser /></span>
                    <input
                        type='text'
                        name='lastname'
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder='Enter your last name'
                        className='auth-form-input'
                    />
                </div>
            </div>

            <div className='input-content'>
                <p>Email address<span>*</span></p>
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
                <p>Password<span>*</span></p>
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

            <div className='input-content'>
                <p>Confirm password<span>*</span></p>
                <div className='inner-input-content'>
                    <span><VscLock /></span>
                    <input
                        type='password'
                        name='password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm your password'
                        className='auth-form-input'
                    />
                </div>
            </div>


                <div className='agree-terms-row'>
                    <div className='inner-row'>
                        <label className='form-label-checkbox'>
                            By proceeding, you agree to the
                            <Link to='/'> Terms and Conditions </Link>
                        </label>
                    </div>
                </div>

                <div className='button-container'>
                    <button type='submit' className='submit-button'>Create Account</button>
                </div>
                <p className='text'>
                    Already have an account? 
                    <Link to='/Login'> Log In</Link>
                </p>
        </form>
    </div>
    )
}

export default SignupForm
