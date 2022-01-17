import { RiPlaneFill } from 'react-icons/ri'
import { FaPlug, FaTrain, FaMoneyBillWave,FaMobileAlt } from 'react-icons/fa'
import { MdMovie } from 'react-icons/md'
import { HiUserGroup,HiShieldCheck } from 'react-icons/hi'
import {GoRocket} from 'react-icons/go'
import {AiFillDollarCircle} from 'react-icons/ai'

export const BannerData = [
    {
        icon:<RiPlaneFill />,
        link:'Flight Tickets',
        to:'/',
        class:'class1'
    },
    {
        icon:<FaPlug />,
        link:'Electricity Bills',
        to:'/',
        class:'class2'
    },
    {
        icon:<MdMovie />,
        link:'Movie Tickets',
        to:'/',
        class:'class3'
    },
    {
        icon:<FaTrain />,
        link:'Train Tickets',
        to:'/',
        class:'class4'
    }
]

export const SliderData = [
    {
        icon: <HiUserGroup />,
        title:'Payments businesses',
        description:'From ecommerce stores, to subscription businesses, to platforms and marketplaces, we offer a stack for all your payments.',
        class:'class1'
    },
    {
        icon: <HiShieldCheck />,
        title:'Optimize your revenue',
        description:'Protect yourself from fraud and increase authorization rates on every payment using our machine learning.',
        class:'class2'
    },
    {
        icon: <GoRocket />,
        title:'Get started in minutes',
        description:'Create an account online in minutes  and use our libraries. We’ll deposit your funds directly into your bank account.',
        class:'class3'
    },
    {
        icon: <HiUserGroup />,
        title:'Payments businesses',
        description:'From ecommerce stores, to subscription businesses, to platforms and marketplaces, we offer a stack for all your payments.',
        class:'class1'
    },
    {
        icon: <HiShieldCheck />,
        title:'Optimize your revenue',
        description:'Protect yourself from fraud and increase authorization rates on every payment using our machine learning.',
        class:'class2'
    },
    {
        icon: <GoRocket />,
        title:'Get started in minutes',
        description:'Create an account online in minutes  and use our libraries. We’ll deposit your funds directly into your bank account.',
        class:'class3'
    }
]

export const Data3 = [
    {
        icon:<AiFillDollarCircle />,
        title:'Available Currencies',
        description:"We support every crypto currency possible.",
        color:'#B556C6'
    },
    {
        icon:<FaMoneyBillWave />,
        title:'Send money online',
        description:"You can send all around the world and they'll be delighted to get.",
        color:'#3AA85F'
    },
    {
        icon:<FaMobileAlt />,
        title:'Shop around the world',
        description:"Shop at thousands of stores around the world in just a few easy clicks.",
        color:'#CC4747'
    }
]