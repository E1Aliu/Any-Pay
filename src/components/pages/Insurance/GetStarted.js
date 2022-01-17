import React, {useState} from 'react'
import './styles/getStarted.scss'

import { MdBusiness } from 'react-icons/md'
import { FaUserAlt, FaPhone, FaEnvelope, FaAddressCard } from 'react-icons/fa'

const GetStarted = () => {

    const [company, setCompany] = useState('')
    const [person, setPerson] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [designation, setDesignation] = useState('')
    const [product, setProduct] = useState('')

    return (
        <div className='get-started-row'>
            <h1 data-aos='zoom-in-up'>Get Started</h1>

            <div className="bg1"></div>
            <div className="bg2"></div>
            <form action="" data-aos='flip-up'>
                <div className="form-input">
                    <h6>Company Name*</h6>
                    <div className="input-container">
                        <span><MdBusiness /></span>
                        <input 
                            type='text'
                            name='company'
                            id='company'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder='Write your company name'
                        />
                    </div>
                </div>

                <div className="form-input">
                    <h6>Contact Person’s Name*</h6>
                    <div className="input-container">
                        <span><FaUserAlt /></span>
                        <input 
                            type='text'
                            name='person'
                            id='person'
                            value={person}
                            onChange={(e) => setPerson(e.target.value)}
                            placeholder='Write contact person name'
                        />
                    </div>
                </div>

                <div className="form-input">
                    <h6>Mobile Number*</h6>
                    <div className="input-container">
                        <span><FaPhone /></span>
                        <input 
                            type='text'
                            name='number'
                            id='number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder='Write your mobile number'
                        />
                    </div>
                </div>

                <div className="form-input">
                    <h6>Official Email Address*</h6>
                    <div className="input-container">
                        <span><FaEnvelope /></span>
                        <input 
                            type='email'
                            name='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Write your email adress'
                        />
                    </div>
                </div>

                <div className="form-input">
                    <h6>Designation (Optional)</h6>
                    <div className="input-container">
                        <span><FaAddressCard /></span>
                        <input 
                            type='text'
                            name='designation'
                            id='designation'
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder='Write your designation'
                        />
                    </div>
                </div>

                <div className="form-input">
                    <h6>Product Interested in*</h6>
                    <div className="input-container">
                        <select value={product} onChange={(e) => setProduct(e.target.value)}>
                            <option value='default'>Select Product</option>
                            <option value='product1'>Product 1</option>
                            <option value='product2'>Product 2</option>
                            <option value='product3'>Product 3</option>
                            <option value='product4'>Product 4</option>
                        </select>
                    </div>
                </div>
                <div className="button-container">
                    <button type='submit' className='hover-button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default GetStarted
