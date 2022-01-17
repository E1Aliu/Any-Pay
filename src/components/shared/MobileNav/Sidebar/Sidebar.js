import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { ProductsData, ServicesData, SolutionsData, AppsData, ShopData3, Other} from '../../Navbar/data';

import { FaProductHunt, FaCogs, FaPlusCircle} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import { RiListSettingsLine} from 'react-icons/ri'
import {MdApps, MdKeyboardArrowDown} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Sidebar = (props) => {

    const List = (props) => {
        return (
            <div className='dropdown-links-items'>
                <Link to={props.item.to} className='sidebar-dropdown-link'>
                    <span>{props.item.icon}</span>
                    {props.item.title}
                </Link>
            </div>
        )
    }

    const List2 = (props) => {
        return (
            <div className='dropdown-links-items'>
                <Link to={props.item.to} className='sidebar-dropdown-link sidebar-dropdown-link2'>
                        <div className='img' style={{content: `url(${props.item.img})`}}></div>
                        <h6>{props.item.link}</h6>
                </Link>
            </div>
        )
    }

    const [list,showList] = useState(false);
    function show(){
        showList(!list);
    }

    const [list2,showList2] = useState(false);
    function show2(){
        showList2(!list2);
    }

    const [list3,showList3] = useState(false);
    function show3(){
        showList3(!list3);
    }


    const [list4,showList4] = useState(false);
    function show4(){
        showList4(!list4);
    }

    const [list5,showList5] = useState(false);
    function show5(){
        showList5(!list5);
    }

    const [list6,showList6] = useState(false);
    function show6(){
        showList6(!list6);
    }

    return (
        <div className='mobile-sidebar'>
             <div className='sidebar-logo-row'>
                <Link to='/'>
                    <div className='mobile-logo-container'></div>
                    <h6>AnyPay</h6>
                </Link>
                <button onClick={props.click}><CgClose/> </button>
            </div>

            <div className='mobile-sidebar-links'>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show}>
                        <Link to='/' className='nav-anchor'>
                            <FaProductHunt />
                            Products 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list===true && ProductsData.map(item=>
                                    <List key={item.title} item={item} />) }
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show2}>
                        <Link to='/' className='nav-anchor'>
                            <FaCogs />
                            Services
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list2===true && ServicesData.map(item=>
                                    <List key={item.title} item={item} />) } 
                </div>
                              
                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show3}>
                        <Link to='/' className='nav-anchor'>
                            <RiListSettingsLine />
                            Solutions 
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list3===true && SolutionsData.map(item=>
                                    <List key={item.title} item={item} />) }  
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show5}>
                        <Link to='/Shop' className='nav-anchor'>
                            <AiOutlineShoppingCart />
                            Shop
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list5===true && ShopData3.map(item=>
                                    <List2 key={item.link} item={item} />) } 
                </div>


                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show4}>
                        <Link to='/' className='nav-anchor'>
                            <MdApps />
                            Apps
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list4===true && AppsData.map(item=>
                                    <List key={item.title} item={item} />) } 
                </div>

                <div className='sidebar-dropdown'>
                    <div className='nav-sidebar-link' onClick={show6}>
                        <Link to='/' className='nav-anchor'>
                            <FaPlusCircle />
                            Other
                        </Link>
                        <div className='dropdown-arrow'>
                            <MdKeyboardArrowDown/> 
                        </div>
                    </div>
                    {list6===true && Other.map(item=>
                                    <List key={item.title} item={item} />) } 
                </div>

                <div className='nav-sidebar-link'>
                    <Link to='/Support' className='nav-anchor'><BiSupport/>Help & Support</Link>
                </div>
            </div>

            <div className='sidebar-auth'>
                <div className='nav-auth-link nav-login'>
                    <Link to='/Login'>Log In</Link>
                </div>
                <div className='nav-auth-link nav-signup'>
                    <Link to='/Signup'>Sign Up</Link>
                </div>
            </div>

            <div className='space'></div>
        </div>
    )
}

export default Sidebar
