import React, {useState} from 'react';

import './styles/business.scss'

import LeftRight from '../../shared/LeftRight/LeftRight'
import MainCard from '../../shared/MainCard/MainCard'
import {Data3, Data4} from './data'
import { BiSearch } from 'react-icons/bi'

const Business = () => {
    const [search, setSearch] = useState('');

    return (
        <div className='business'>
             <div className='home-row'>
                <div className='info'>
                    <h1 data-aos='fade-left' data-aos-easing="ease-in-sine">
                        Payment Links is built to cater to all kinds of businesses 
                    </h1>
                    <p className='p' data-aos='fade-left' data-aos-easing="ease-in-sine">
                        Integrate Payment Links to automate collection for clients 
                        without the need for an app or website login flow.
                    </p>
                    <div className='items' data-aos='fade-up' data-aos-easing="ease-in-sine">
                        {Data4.map((d, i) => {
                            return (
                                <MainCard key={i} {...d}/>
                            );
                        })}
                    </div>
                </div>
                <div className='img2' data-aos='flip-left'></div>
            </div>

            <LeftRight    
                styles='leftright-reverse shared-leftright-component'
                title='From which country do you want to accept payments?' 
                description="Accept payments from countries across the world. International payments on AnyPay 
                supports nearly 100 major currencies from all over the globe. Currency conversion is
                not required to be done by you, we do it automatically in real-time."
                link='Learn More'
                to='/'
                other='true'
            >

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



            </LeftRight>

        </div>
    )
}

export default Business
