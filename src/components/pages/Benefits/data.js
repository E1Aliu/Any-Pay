import icon1 from '../../../assets/Benefits/icon1.png'
import icon2 from '../../../assets/Benefits/icon2.png'
import icon3 from '../../../assets/Benefits/icon3.png'
import icon4 from '../../../assets/Benefits/icon4.png'

import { FaCheckDouble, FaDigitalOcean, FaGasPump } from 'react-icons/fa'
import {MdWebAsset, MdDataUsage} from 'react-icons/md'

export const Data1 = [
    {
        icon:icon1,
        title:'Works Round the Clock',
        description:'24*7 instant payments to ensure your employee gets their benefits on-time.'
    },
    {
        icon:icon2,
        title:'Powerful Dashboard & Insights',
        description:'Easily manage payments invoices track spend on the dashboard.'
    },
    {
        icon:icon3,
        title:'100% Digital Solution',
        description:'No more coupons simply use the AnyPay App to pay.'
    },
    {
        icon:icon4,
        title:'Exclusive Offers',
        description:'Enjoy exclusive benefits and cashback throughout the year.'
    }
]

export const Data2 = [
    {
        items:[
            {
                icon:<FaCheckDouble />,
                title:'Fully Compliant',
                description:'Meal Benefit as per CBDT (Income Tax) & RBI guidelines.  Works only with food merchants,  bank and peer transfer not allowed.',
                to:'/',
                class:'cls1'
            },
            {
                icon:<FaDigitalOcean />,
                title:'100% Digital Solution',
                description:'Instantly send benefits with our powerful dashboard or APIs. No hassle of procurement, handling and distribution of cards.',
                to:'/',
                class:'cls2'
            }
        ]
    },

    {
        items:[
            {
                icon:<FaDigitalOcean />,
                title:'100% Digital Solution',
                description:'Instantly send benefits with our powerful dashboard or APIs. No hassle of procurement, handling and distribution of cards.',
                to:'/',
                class:'cls3'
            },
            {
                icon:<FaCheckDouble />,
                title:'Fully Compliant',
                description:'Meal Benefit as per CBDT (Income Tax) & RBI guidelines.  Works only with food merchants,  bank and peer transfer not allowed.',
                to:'/',
                class:'cls4'
            }
        ]
    }
    
]

export const Data3 = [
    {
        icon:<FaGasPump />,
        class:'cls1',
        title:'Manage employee fuel allowances'
    },
    {
        icon:<FaCheckDouble />,
        class:'cls2',
        title:'Accepted across all major fuel stations'
    },
    {
        icon:<MdWebAsset />,
        class:'cls3',
        title:'Seamless payment from AnyPay app'
    },
    {
        icon:<MdDataUsage />,
        class:'cls4',
        title:'Assured usage at fuel stations only'
    }
]