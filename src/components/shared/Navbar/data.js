import {BiWallet, BiDesktop, BiCheckShield} from 'react-icons/bi'
import {FaMoneyBillWave, 
        FaStoreAlt,
        FaStaylinked,
        FaRegCreditCard, 
        FaBriefcase, 
        FaTelegramPlane, 
        FaUniversity,
        FaStore,
        FaWallet,
        FaHandHoldingHeart,
        FaMobile,
        FaTabletAlt,
        FaGraduationCap} from 'react-icons/fa'
import {AiOutlineShoppingCart, AiTwotoneShop, AiOutlineCode} from 'react-icons/ai'
import {RiMoneyDollarBoxFill, RiBankCardFill,RiHome7Line, RiNewspaperLine} from 'react-icons/ri'
import {MdDesktopMac, MdPhoneAndroid, MdPhoneIphone, MdTabletAndroid, MdComputer} from 'react-icons/md'
import {SiGlassdoor} from 'react-icons/si'
import { FiCloudLightning } from 'react-icons/fi'

import img1 from '../../../assets/Navbar/img1.png'
import img2 from '../../../assets/Navbar/img2.png'
import img3 from '../../../assets/Navbar/img3.png'
import img4 from '../../../assets/Navbar/img4.png'
import img5 from '../../../assets/Navbar/img5.png'
import img6 from '../../../assets/Navbar/img6.png'
import img7 from '../../../assets/Navbar/img7.png'
import img8 from '../../../assets/Navbar/img8.png'
import img9 from '../../../assets/Navbar/img9.png'
import img10 from '../../../assets/Navbar/img10.png'
import img11 from '../../../assets/Navbar/img11.png'
import img12 from '../../../assets/Navbar/img12.png'
import img13 from '../../../assets/Navbar/img13.png'
import img14 from '../../../assets/Navbar/img14.png'
import img15 from '../../../assets/Navbar/img15.png'
import img16 from '../../../assets/Navbar/img16.png'

export const ProductsData = [ 
    {
        icon: <BiWallet />,
        title:'Payments',
        descirption:'Flexible payment tools',
        class:'class1',
        to:'/Payments'
    },
    {
        icon: <FaStaylinked />,
        title:'Payment Links',
        descirption:'Get paid instantly',
        class:'class2',
        to:'/PaymentLinks'
    },
    {
        icon: <FaMoneyBillWave />,
        title:'Billing',
        descirption:'Recharges & Pays Bill on AnyPay',
        class:'class3',
        to:'/Billing'
    },
    {
        icon: <FaRegCreditCard />,
        title:'Payouts',
        descirption:'Send Instant Payouts',
        class:'class4',
        to:'/Payouts'
    },
    {
        icon: <FaBriefcase />,
        title:'Business',
        descirption:'The smart choice for business',
        class:'class5',
        to:'/Business'
    },
    {
        icon: <RiBankCardFill />,
        title:'Online Booking',
        descirption:'Quick online ticket bookings',
        class:'class6',
        to:'/OnlineBooking'
    },
    {
        icon: <FaTelegramPlane />,
        title:'Send Money',
        descirption:'Send money in a few seconds',
        class:'class7',
        to:'/SendMoney'
    },
    {
        icon: <AiOutlineShoppingCart />,
        title:'PostPaid',
        descirption:'Shop now, pay later',
        class:'class8',
        to:'/Postpaid'
    }, 
]

export const ServicesData = [ 
    {
        icon: <FaWallet />,
        title:'Payroll',
        descirption:'Payroll, simplified by AnyPay',
        class:'cls1',
        to:'/Payroll'
    },
    {
        icon: <RiMoneyDollarBoxFill />,
        title:'Invoice',
        descirption:'Pay your Invoices online',
        class:'cls2',
        to:'/Invoicing'
    },
    {
        icon: <AiOutlineCode />,
        title:'Terminal',
        descirption:'Extend AnyPay payments',
        class:'cls3',
        to:'/Terminal'
    },
    {
        icon: <FaStoreAlt />,
        title:'In-store',
        descirption:'In-store Payments',
        class:'cls4',
        to:'/InStorePayments'
    },
    {
        icon: <FaUniversity />,
        title:'Account',
        descirption:'Business Account',
        class:'cls5',
        to:'/Account'
    },
    {
        icon: <RiHome7Line />,
        title:'Insurance',
        descirption:'Business Insurance',
        class:'cls6',
        to:'/Insurance'
    },
    {
        icon: <FiCloudLightning />,
        title:'Settlements',
        descirption:'AnyPay Settlements',
        class:'cls7',
        to:'/Settlements'
    },
    {
        icon: <FaHandHoldingHeart />,
        title:'Benefits',
        descirption:'Employees Benefits',
        class:'cls8',
        to:'/Benefits'
    }
]

export const SolutionsData = [ 
    {
        icon: <SiGlassdoor />,
        title:'Payment Gateway',
        descirption:'',
        class:'cl1',
        to:'/PaymentGateway'
    },
    {
        icon: <FaStore />,
        title:'Ecommerce',
        descirption:'',
        class:'cl2',
        to:'/Ecommerce'
    },
    {
        icon: <RiNewspaperLine />,
        title:'Subscriptions',
        descirption:'',
        class:'cl3',
        to:'/Subscriptions'
    },
    {
        icon: <FaGraduationCap />,
        title:'Education',
        descirption:'',
        class:'cl4',
        to:'/Education'
    },
    {
        icon: <BiCheckShield />,
        title:'Insurance',
        to:'/Insurance',
        descirption:'',
        class:'cl5',
    },
    {
        icon: <MdComputer />,
        title:'SaaS and IT',
        descirption:'',
        class:'cl6',
        to:'/SaaS'
    },
    {
        icon: <FaMobile />,
        title:'Mobile Wallet',
        descirption:'',
        class:'cl7',
        to:'/'
    },
    {
        icon: <AiTwotoneShop />,
        title:'Marketplaces',
        descirption:'',
        class:'cl8',
        to:'/Marketplaces'
    }
]

export const AppsData = [ 
    {
        icon: <BiDesktop />,
        title:'Desktop',
        descirption:'Download the Desktop App',
        class:'class1',
        to:'/AppsDesktop'
    },
    {
        icon: <MdDesktopMac />,
        title:'iMac',
        descirption:'Download the iMac App',
        class:'class2',
        to:'/AppsMac'
    },
    {
        icon: <MdPhoneAndroid />,
        title:'Android Phone',
        descirption:'Download the Android Phone',
        class:'class3',
        to:'/'
    },
    {
        icon: <MdPhoneIphone />,
        title:'iPhone',
        descirption:'Download the iPhone App',
        class:'class4',
        to:'/AppsIphone'
    },
    {
        icon: <MdTabletAndroid />,
        title:'Android Tablet',
        descirption:'Download the Android Tablet',
        class:'class5',
        to:'/'
    },
    {
        icon: <FaTabletAlt />,
        title:'iPad',
        descirption:'Download the iPad App',
        class:'class6',
        to:'/'
    }
]

export const ProductsData2 = [
    {
        to:'/Pricing',
        title:'Pricing',
        text:'Transparent pricing for all businesses.'
    },
    {
        to:'/',
        title:'Partner Ecosystem',
        text:'Platforms and integrators supported by AnyPay.'
    },
    {
        to:'/',
        title:'Documentation',
        text:'View our integration docs.'
    },
    {
        to:'/',
        title:'Affiliates & Partners',
        text:'We have countless opportunities waiting for you.'
    }
]

export const ServicesData2 = [
    {
        to:'/Blog',
        title:'Blog',
        text:'Read our articles made for you'
    },
    {
        to:'/About',
        title:'About ',
        text:'More AnyPay Information'
    },
    {
        to:'/Events',
        title:'Events',
        text:'See upcoming events'
    },
    {
        to:'/',
        title:'Learn',
        text:'Lessons to help you get started'
    },
]

export const SolutionsData2 = [
    {
        to:'/',
        title:'Getting Started',
        text:'Steps to get started with the AnyPay platform.'
    },
    {
        to:'/',
        title:'Customer success',
        text:"What it's like to work with our team."
    },
    {
        to:'/',
        title:'Become a partner',
        text:"Grow your client's business with AnyPay."
    },
    {
        to:'/',
        title:'Plugins with AnyPay',
        text:'Accept payments with ecommerce platform.'
    },
]



// SHOP DATA-----------------------------------------------
export const ShopData1 = [
    {
        img:img1,
        link:'Mobiles',
        to:'/'
    },
    {
        img:img2,
        link:'Electronics',
        to:'/'
    },
    {
        img:img3,
        link:'Fashion',
        to:'/'
    },
    {
        img:img4,
        link:'Fashion Accessories',
        to:'/'
    },
    {
        img:img5,
        link:"Women's Fashion",
        to:'/WomenFashion'
    },
    {
        img:img6,
        link:'Gadgets',
        to:'/'
    },
    {
        img:img7,
        link:'Footwear',
        to:'/'
    },
    {
        img:img8,
        link:'Home & Kitchen',
        to:'/'
    }
]

export const ShopData2 = [
    {
        img:img9,
        link:'Sephora',
        to:'/'
    },
    {
        img:img10,
        link:'Asos',
        to:'/'
    },
    {
        img:img11,
        link:'Wayfair',
        to:'/'
    },
    {
        img:img12,
        link:"Levi's",
        to:'/'
    },
    {
        img:img13,
        link:'H&M',
        to:'/DressesHM'
    },
    {
        img:img14,
        link:'Hypop',
        to:'/'
    },
    {
        img:img15,
        link:'Boohoo',
        to:'/'
    },
    {
        img:img16,
        link:'MiHIGH',
        to:'/'
    }
]


export const ShopData3 = [
    {
        img:img1,
        link:'Mobiles',
        to:'/'
    },
    {
        img:img2,
        link:'Electronics',
        to:'/'
    },
    {
        img:img3,
        link:'Fashion',
        to:'/'
    },
    {
        img:img4,
        link:'Fashion Accessories',
        to:'/'
    },
    {
        img:img5,
        link:"Women's Fashion",
        to:'/WomenFashion'
    },
    {
        img:img6,
        link:'Gadgets',
        to:'/'
    },
    {
        img:img7,
        link:'Footwear',
        to:'/'
    },
    {
        img:img8,
        link:'Home & Kitchen',
        to:'/'
    },
    {
        img:img9,
        link:'Sephora',
        to:'/'
    },
    {
        img:img10,
        link:'Asos',
        to:'/'
    },
    {
        img:img11,
        link:'Wayfair',
        to:'/'
    },
    {
        img:img12,
        link:"Levi's",
        to:'/'
    },
    {
        img:img13,
        link:'H&M',
        to:'/DressesHM'
    },
    {
        img:img14,
        link:'Hypop',
        to:'/'
    },
    {
        img:img15,
        link:'Boohoo',
        to:'/'
    },
    {
        img:img16,
        link:'MiHIGH',
        to:'/'
    }
]

export const Other = [
    {
        to:'/',
        title:'Getting Started',
        text:'Steps to get started with the AnyPay platform.'
    },
    {
        to:'/',
        title:'Customer success',
        text:"What it's like to work with our team."
    },
    {
        to:'/',
        title:'Become a partner',
        text:"Grow your client's business with AnyPay."
    },
    {
        to:'/',
        title:'Plugins with AnyPay',
        text:'Accept payments with ecommerce platform.'
    },
    {
        to:'/Pricing',
        title:'Pricing',
        text:'Transparent pricing for all businesses.'
    },
    {
        to:'/',
        title:'Partner Ecosystem',
        text:'Platforms and integrators supported by AnyPay.'
    },
    {
        to:'/',
        title:'Documentation',
        text:'View our integration docs.'
    },
    {
        to:'/',
        title:'Affiliates & Partners',
        text:'We have countless opportunities waiting for you.'
    },
    {
        to:'/Blog',
        title:'Blog',
        text:'Read our articles made for you'
    },
    {
        to:'/About',
        title:'About ',
        text:'More AnyPay Information'
    },
    {
        to:'/Events',
        title:'Events',
        text:'See upcoming events'
    },
    {
        to:'/',
        title:'Learn',
        text:'Lessons to help you get started'
    }
]