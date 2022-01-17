import { MdShowChart } from "react-icons/md"
import { FaPuzzlePiece, FaHandsHelping } from "react-icons/fa"
import { FiCode } from "react-icons/fi"

import icon1 from '../../../assets/PaymentGateway/icon1.png'
import icon2 from '../../../assets/PaymentGateway/icon2.png'

import logo1 from '../../../assets/PaymentGateway/logo1.png'
import logo2 from '../../../assets/PaymentGateway/logo2.png'
import logo3 from '../../../assets/PaymentGateway/logo3.png'
import logo4 from '../../../assets/PaymentGateway/logo4.png'
import logo5 from '../../../assets/PaymentGateway/logo5.png'

export const Data = [
    {
        title:'Website',
        link:'View Docs',
        icon:icon1,
        to:'/'
    },
    {
        title:'Mobile App',
        link:'View SDKs',
        icon:icon2,
        to:'/'
    }
]

export const Data1 = [
    {
        icon:<MdShowChart />,
        title:'Instant activation',
        description:'AnyPay offers 100% online onboarding with minimum documentation to help your business go online with ease.'
    },
    {
        icon:<FaPuzzlePiece />,
        title:'Easy integration',
        description:'Use AnyPay’s robust APIs and custom SDKs to start accepting digital payments in less than 30 minutes.'
    },
    {
        icon:<FiCode />,
        title:'100+ payment sources',
        description:'Allow your customers to pay way they want with support for debit and credit cards, Netbanking, UPI,  & more.'
    },
    {
        icon:<FaHandsHelping />,
        title:'Dedicated support',
        description:'All online merchants and payment gateway users on AnyPay get dedicated support via a toll-free number and email.'
    }
]

export const Data3 = [
    {
        logo:logo1,
        title:'Java'
    },
    {
        logo:logo2,
        title:'Rubby'
    },
    {
        logo:logo3,
        title:'Python'
    },
    {
        logo:logo4,
        title:'PHP'
    },
    {
        logo:logo5,
        title:'Android'
    }
]