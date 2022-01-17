import {BiDesktop} from 'react-icons/bi'
import {FaTabletAlt} from 'react-icons/fa'
import {MdDesktopMac, MdPhoneAndroid, MdPhoneIphone, MdTabletAndroid} from 'react-icons/md'

export const AppsData = [ 
    {
        icon: <BiDesktop />,
        title:'Desktop',
        class:'class1',
        to:'/AppsDesktop'
    },
    {
        icon: <MdDesktopMac />,
        title:'iMac',
        class:'class2',
        to:'/AppsMac'
    },
    {
        icon: <MdPhoneAndroid />,
        title:'Android Phone',
        class:'class3',
        to:'/'
    },
    {
        icon: <MdPhoneIphone />,
        title:'iPhone',
        class:'class4',
        to:'/AppsIphone'
    },
    {
        icon: <MdTabletAndroid />,
        title:'Android Tablet',
        class:'class5',
        to:'/'
    },
    {
        icon: <FaTabletAlt />,
        title:'iPad',
        class:'class6',
        to:'/'
    }
]