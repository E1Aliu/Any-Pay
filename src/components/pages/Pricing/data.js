import img1 from '../../../assets/Pricing/img1.png'
import img2 from '../../../assets/Pricing/img2.png'
import img3 from '../../../assets/Pricing/img3.png'

import icon1 from '../../../assets/Pricing/icon1.png'
import icon2 from '../../../assets/Pricing/icon2.png'
import icon3 from '../../../assets/Pricing/icon3.png'
import icon4 from '../../../assets/Pricing/icon4.png'
import icon5 from '../../../assets/Pricing/icon5.png'
import icon6 from '../../../assets/Pricing/icon6.png'
import icon7 from '../../../assets/Pricing/icon7.png'
import icon8 from '../../../assets/Pricing/icon8.png'
import icon9 from '../../../assets/Pricing/icon9.png'
import icon10 from '../../../assets/Pricing/icon10.png'
import icon11 from '../../../assets/Pricing/icon11.png'
import icon12 from '../../../assets/Pricing/icon12.png'
import icon13 from '../../../assets/Pricing/icon13.png'
import icon14 from '../../../assets/Pricing/icon14.png'
import icon15 from '../../../assets/Pricing/icon15.png'
import icon16 from '../../../assets/Pricing/icon16.png'
import icon17 from '../../../assets/Pricing/icon17.png'
import icon18 from '../../../assets/Pricing/icon18.png'
import icon19 from '../../../assets/Pricing/icon19.png'
import icon20 from '../../../assets/Pricing/icon20.png'



import { FaMoneyBill, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineForward, AiFillQuestionCircle, AiOutlineStar, AiOutlineCheckSquare } from 'react-icons/ai'
import { VscStarFull } from 'react-icons/vsc'
import {  BsFillVolumeUpFill } from 'react-icons/bs'
import { ImKey, ImPriceTag } from 'react-icons/im'
import { FiClock, FiPercent } from 'react-icons/fi'
import { BiShieldQuarter } from 'react-icons/bi'
import { HiCode } from 'react-icons/hi'
import { RiCodeBoxLine } from 'react-icons/ri'

export const Data1 = [
    {
        img:img1, 
        title:'STANDARD PLAN',
        text:'Plan designed for Startups, Small and Medium Enterprises. Access a complete payments platform with simple, pay-as-you-go pricing',
        price:'2.9%',
        info:'per successful card charge',
        link:'Get Started Now',
        to:'/',
        items:[
            {
                icon:<FaMoneyBill />,
                description:'Everything you need to manage payments'
            },
            {
                icon:<AiOutlineForward />,
                description:'Get hundreds of feature updates each year'
            },
            {
                icon:<VscStarFull />,
                description:'No setup fees, monthly fees, or hidden fees'
            },
            {
                icon:<FaPhoneAlt />,
                description:'Email, Chat and Call Support Available'
            }
        ]
    },
    {
        img:img2, 
        title:'ENTERPRISE PLAN',
        text:'Plan designed for Large Volumes',
        price:'$50',
        info:'Get access to, Dashboard, Reports & much more',
        link:'Get Started Now',
        to:'/',
        items:[
            {
                icon:<AiOutlineCheckSquare />,
                description:'Online Activation within 24 hours'
            },
            {
                icon:<AiFillQuestionCircle />,
                description:'24x7 Priority Support Available'
            },
            {
                icon:<ImKey />,
                description:'Pre-assigned Key Account Manager'
            },
            {
                icon:<FiClock />,
                description:'Early Access to New Features'
            },
            {
                icon:<BiShieldQuarter />,
                description:'Data security'
            }
        ]
    },
    {
        img:img3, 
        title:'CUSTOMIZED',
        text:'Design a custom package for your business',
        price:'',
        info:'',
        link:'Contact Sales',
        to:'/',
        items:[
            {
                icon:<BsFillVolumeUpFill />,
                description:'Volume discounts'
            },
            {
                icon:<AiOutlineStar />,
                description:'Country-specific rates'
            },
            {
                icon:<FiPercent />,
                description:'Multi-product discounts'
            },
            {
                icon:<ImPriceTag />,
                description:'Interchange pricing'
            },
            {
                icon:<HiCode />,
                description:'Less payments code'
            },
            {
                icon:<RiCodeBoxLine />,
                description:'Focus critical developer'
            }
        ]
    }
]


export const Data2 = [
    {
        img:img1, 
        title:'STANDARD PLAN',
        text:'Plan designed for Startups, Small and Medium Enterprises. Access a complete payments platform with simple, pay-as-you-go pricing',
        price:'5.7%',
        info:'per successful card charge',
        link:'Get Started Now',
        to:'/',
        items:[
            {
                icon:<AiOutlineForward />,
                description:'Get hundreds of feature updates each year'
            },
            {
                icon:<VscStarFull />,
                description:'No setup fees, monthly fees, or hidden fees'
            },
            {
                icon:<FaMoneyBill />,
                description:'Everything you need to manage payments'
            },
            {
                icon:<FaPhoneAlt />,
                description:'Email, Chat and Call Support Available'
            }
        ]
    },
    {
        img:img2, 
        title:'ENTERPRISE PLAN',
        text:'Plan designed for Large Volumes',
        price:'$99',
        info:'Get access to, Dashboard, Reports & much more',
        link:'Get Started Now',
        to:'/',
        items:[
            {
                icon:<ImKey />,
                description:'Pre-assigned Key Account Manager'
            },
            {
                icon:<FiClock />,
                description:'Early Access to New Features'
            },
            {
                icon:<AiOutlineCheckSquare />,
                description:'Online Activation within 24 hours'
            },
            {
                icon:<AiFillQuestionCircle />,
                description:'24x7 Priority Support Available'
            },
            {
                icon:<BiShieldQuarter />,
                description:'Data security'
            }
        ]
    },
    {
        img:img3, 
        title:'CUSTOMIZED',
        text:'Design a custom package for your business',
        price:'',
        info:'',
        link:'Contact Sales',
        to:'/',
        items:[
            {
                icon:<ImPriceTag />,
                description:'Interchange pricing'
            },
            {
                icon:<HiCode />,
                description:'Less payments code'
            },
            {
                icon:<RiCodeBoxLine />,
                description:'Focus critical developer'
            },
            {
                icon:<BsFillVolumeUpFill />,
                description:'Volume discounts'
            },
            {
                icon:<AiOutlineStar />,
                description:'Country-specific rates'
            },
            {
                icon:<FiPercent />,
                description:'Multi-product discounts'
            }
        ]
    }
]

export const Data3 = [
    {
        title:'Tools to build optimized checkout flows',
        items:[
            {
                icon:icon1,
                title2:'Embeddable checkout'
            },
            {
                icon:icon2,
                title2:'Custom UI toolkit'
            },
            {
                icon:icon3,
                title2:'Simplified PCI compliance'
            },
            {
                icon:icon4,
                title2:'Invoice support'
            },
        ]
    },
    {
        title:'Global payments with a single integration',
        items:[
            {
                icon:icon5,
                title2:'135+ currencies'
            },
            {
                icon:icon6,
                title2:'Local payment methods'
            },
            {
                icon:icon7,
                title2:'Global support'
            },
            {
                icon:icon8,
                title2:'Subsidiary support'
            },
        ]
    },
    {
        title:'Comprehensive security and compliance',
        items:[
            {
                icon:icon9,
                title2:'Secure payment info '
            },
            {
                icon:icon10,
                title2:'Data security'
            },
            {
                icon:icon11,
                title2:'Regulatory licenses'
            },
            {
                icon:icon12,
                title2:'Secure Dashboard'
            },
        ]
    },
    {
        title:'Fast, predictable payouts to your  account',
        items:[
            {
                icon:icon13,
                title2:'Control payout timing'
            },
            {
                icon:icon14,
                title2:'Unified payouts'
            },
            {
                icon:icon15,
                title2:'Like-for-like settlement'
            },
            {
                icon:icon16,
                title2:'Transparent payouts'
            },
        ]
    },
    {
        title:'Manage business operations with dashboard',
        items:[
            {
                icon:icon17,
                title2:'iOS and Android apps'
            },
            {
                icon:icon18,
                title2:'Roles and permissions'
            },
            {
                icon:icon19,
                title2:'Take action from Dashboard'
            },
            {
                icon:icon20,
                title2:'Collaboration notes'
            }
        ]
    }
]