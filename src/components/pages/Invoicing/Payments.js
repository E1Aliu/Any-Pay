import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Data3 } from './data'
import { BiSearch } from 'react-icons/bi'
import './styles/payments.scss'

const Payments = () => {

    const [search, setSearch] = useState('');

    return (
        <div className='payments-row' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="inner-row">
                <div className="text">
                    <h1>From which country do you want to accept payments?</h1>
                    <p>
                        Accept payments from countries across the world. International payments on 
                        AnyPay supports nearly 100 major currencies from all over the globe. Currency 
                        conversion is not required to be done by you, we do it automatically in real-time.
                    </p>
                    <Link to='/' className='hover-button'>Learn more</Link>
                </div>
            </div>

            <div className="bg bg1"></div>
            <div className="bg bg2"></div>


            <div className='currency' data-aos='flip-left'>
                    <div className='title'>
                        <h3>Currencies We Support</h3>
                    </div>

                    <div className='search-bar'>
                        <span><BiSearch /></span>
                        <input
                            type='text'
                            name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Vault'
                        />
                    </div>

                    <div className='items3'>
                        {Data3.map((props) => {
                            return(
                                <div className='item3'>
                                    <div className='square-cont'>
                                        <div className='square'></div>
                                        <h5>{props.currency}</h5>
                                    </div>
                                    <div className='line'></div>
                                    <h6>{props.title}</h6>
                                    <div className='line'></div>
                                    <h6>{props.country}</h6>
                                </div>
                            )
                        })}
                    </div>
                </div>

        </div>
    )
}

export default Payments
