import {FaHome, FaUpload, FaUsers, FaEnvelopeOpen, FaPhoneAlt} from 'react-icons/fa'

import icon1 from '../../../assets/Support/icon1.png'
import icon2 from '../../../assets/Support/icon2.png'
import icon3 from '../../../assets/Support/icon3.png'
import icon4 from '../../../assets/Support/icon4.png'
import icon5 from '../../../assets/Support/icon5.png'
import icon6 from '../../../assets/Support/icon6.png'

import img1 from '../../../assets/Support/img1.png'
import img2 from '../../../assets/Support/img2.png'
import img3 from '../../../assets/Support/img3.png'
import img4 from '../../../assets/Support/img4.png'


export const Data1 = [
    {
        icon:<FaHome />,
        title:'Home',
        to:'/',
        class:'class1'
    },
    {
        icon:<FaUpload />,
        title:'Submit a request',
        to:'/',
        class:'class2'
    },
    {
        icon:<FaUsers />,
        to:'/',
        title:'Community',
        class:'class3'
    }
]

export const Data2 = [
    {
        title:'Payments',
        to:'/Payments'
    },
    {
        title:'Billing',
        to:'/Billing'
    },
    {
        title:'Account',
        to:'/'
    },
    {
        title:'Connect',
        to:'/'
    },
    {
        title:'Payouts',
        to:'/Payouts'
    },
    {
        title:'Privacy',
        to:'/Privacy'
    },
    {
        title:'Refunds',
        to:'/Refunds'
    },
    {
        title:'Plugins',
        to:'/Plugins'
    },
    {
        title:'Point of sale',
        to:'/'
    },
    {
        title:'Verification',
        to:'/'
    }
]
export const Data3 = [
    {
        icon:<FaEnvelopeOpen />,
        title:'support@anypay.com',
        class:'class1'
    },
    {
        icon:<FaPhoneAlt />,
        title:'+31 88 000 0004',
        class:'class2'
    },
    {
        icon:<FaPhoneAlt />,
        title:'(650) 851-4561',
        class:'class3'
    },
]

export const Data4 = [
    {
        icon: icon1,
        title:'Payments',
        description:'Information about payments related actions such as refunds, or find out what to do if you see...'
    },
    {
        icon: icon2,
        title:'Receiving money',
        description:'Receiving money into your account works just like a regular bank account. Just share the account details of the...'
    },
    {
        icon: icon3,
        title:'Plugins',
        description:'Information about integrating our solution using one of our plugins...'
    },
    {
        icon: icon4,
        title:'Account',
        description:'There are several steps you need to complete before you can process live payments...'
    },
    {
        icon: icon5,
        title:'Sending money',
        description:'Setting up, paying for, editing, and cancelling transfers...'
    },
    {
        icon: icon6,
        title:'Integration',
        description:'Find information on most frequently asked questions during integrating on of our solutions...'
    }
]

export const Data5 = [
    {
        img:img1,
        title:'How to use AnyPay?'
    },
    {
        img:img2,
        title:'How to pay through AnyPay?'
    },
    {
        img:img3,
        title:'How to pay electricity bill?'
    },
    {
        img:img4,
        title:'How to receive money?'
    }
]