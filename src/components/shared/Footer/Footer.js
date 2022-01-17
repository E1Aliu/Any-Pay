import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Select from 'react-select';

import { FormattedMessage } from "react-intl";
import SelectLanguage from '../SelectLanguage/SelectLanguage';

import {FooterData, SocialMedia} from './data';
import './footer.scss';
import {FaRegCopyright, FaGooglePlay, FaEuroSign} from 'react-icons/fa';
import { RiAppleFill} from 'react-icons/ri'
import {AiOutlineDollarCircle} from 'react-icons/ai'

const DownloadData = [
    {
        icon: <FaGooglePlay />,
        text:'GET IT ON',
        title:'Google Play'
    },
    {
        icon: <RiAppleFill />,
        text:'Download on the',
        title:'App Store'
    }
]

const Footer = (props) => {


    const [email, setEmail] = useState('');

    let euro=<FaEuroSign height="16"/>
    let dollar=<AiOutlineDollarCircle height="16"/>

    const options2 = [
        { value: 'dollar', label: [dollar, 'US Dollar']},
        { value: 'euro', label: [euro, 'Euro']}
    ]

    

    return (
        <footer>
            <div className='row1'>           
                <div className='col1'>
                    <Link to='/'>
                        <div className='logo'></div>
                        <h6>AnyPay</h6>
                    </Link>
                    <p>
                        <FormattedMessage id="footer-paragraph1" />
                    </p>
                </div>

                <div className='col2'>
                    <div className='inner-buttons'>
                        {DownloadData.map((props) => {
                            return(
                                <button type='button'>
                                    <span>{props.icon}</span>
                                    <div className='icons'>
                                        <p>{props.text}</p>
                                        <h6>{props.title}</h6>
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    <div className='social-media-row'>
                        {SocialMedia.map((props) => {
                            return(
                                <div>
                                    <Link to={props.to}>{props.icon}</Link>
                                </div>
                            )
                        })}
                    </div> 
                </div>
            </div>

            <div className='links-row'>
                {FooterData.map((props) => {
                    return(
                        <div className="footer-list">
                            <h6>{props.category}</h6>
                            <div className="links">
                                {props.links.map((l) => {
                                    return (
                                    <Link key={l.to} to={l.to} className="footer-item">
                                        {l.link}
                                    </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        

            <div className='copyright-row'>
                <p><FaRegCopyright /><FormattedMessage id="footer-paragraph2" /></p>

                <div className='bottom-links'>
                    <Link to='/'><FormattedMessage id="footer-link1" /></Link>
                    <Link to='/'><FormattedMessage id="footer-link2" /></Link>
                    <Link to='/'><FormattedMessage id="footer-link3" /></Link>
                    <Link to='/'><FormattedMessage id="footer-link4" /></Link>
                    <Link to='/'><FormattedMessage id="footer-link5" /></Link>
                </div>
                <div className='select-col'>
                    <div className='select1'>
                        <Select options={options2}  menuPlacement="top"
                            defaultValue={{  value: 'dollar', label: [dollar, 'US Dollar'] }}
                        />
                    </div>
                    <SelectLanguage
                        setLanguage={props.setLanguage}
                        language={props.language}
                    />
                </div>
            </div> 
        </footer>
    )
}

export default Footer
