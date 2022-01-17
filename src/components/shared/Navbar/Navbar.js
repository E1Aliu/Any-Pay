import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import clsx from "clsx";

import {BsTriangleFill} from 'react-icons/bs'
import {MdKeyboardArrowDown} from 'react-icons/md'

import './navbar.scss'
import './Megamenus/style.scss'
import MobileNav from '../MobileNav/MobileNav'

import ProductsMegamenu from './Megamenus/ProductsMegamenu'
import ServicesMegamenu from './Megamenus/ServicesMegamenu'
import SolutionsMegamenu from './Megamenus/SolutionsMegamenu'
import AppsMegamenu from './Megamenus/AppsMegamenu'
import ShopMegamenu from './Megamenus/ShopMegamenu'

const Navbar = (props) => {  

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
    const nav = document.querySelector(".nav");
    const navHeight = nav.scrollHeight;

    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 180 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="navbar" className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")} >
            <Link to='/' className='nav-logo'>
                <div className='logo-container'></div>
                <h6>AnyPay</h6>
            </Link>

            <div className='nav-links'>
                <div className='nav-link products-link'>
                    <Link to='/' className='inner-nav-link'>Products <MdKeyboardArrowDown className='arrow1'/></Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <ProductsMegamenu />
                </div>
                <div className='nav-link services-link'>
                    <Link to='/' className='inner-nav-link'>Services<MdKeyboardArrowDown className='arrow1'/></Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                     <ServicesMegamenu /> 
                </div>
                <div className='nav-link solutions-link'>
                    <Link to='/' className='inner-nav-link'>Solutions <MdKeyboardArrowDown className='arrow1'/></Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <SolutionsMegamenu />
                </div>
                <div className='nav-link shop-link'>
                    <Link to='/Shop' className='inner-nav-link'>Shop <MdKeyboardArrowDown className='arrow1'/></Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                   <ShopMegamenu />
                </div>
                <div className='nav-link apps-link'>
                    <Link to='/' className='inner-nav-link'>Apps <MdKeyboardArrowDown className='arrow1'/></Link>
                    <div className='megamenu-arrow'><BsTriangleFill /></div>
                    <AppsMegamenu />
                </div>
                <div className='nav-link help-link'>
                    <Link to='/Support'  className='inner-nav-link' >Help & Support</Link>
                </div>
             </div>

            <div className='nav-auth'>
                <div className='nav-auth-link nav-login'>
                    <Link to='/Login'>Log In</Link>
                </div>
                <div className='nav-auth-link nav-signup'>
                    <Link to='/Signup'>Sign Up</Link>
                </div>
            </div>

            
            <MobileNav />
        </div>
    )
}

export default Navbar
