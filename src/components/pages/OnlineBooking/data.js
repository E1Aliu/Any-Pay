import {RiPlaneFill} from 'react-icons/ri'
import {FaBus, FaTrain, FaHotel} from 'react-icons/fa'
import {MdMovieFilter} from 'react-icons/md'

import img1 from '../../../assets/OnlineBooking/img1.png'
import img2 from '../../../assets/OnlineBooking/img2.png'
import img3 from '../../../assets/OnlineBooking/img3.png'
import img4 from '../../../assets/OnlineBooking/img4.png'
import img5 from '../../../assets/OnlineBooking/img5.png'

import item1 from '../../../assets/OnlineBooking/item1.png'
import item2 from '../../../assets/OnlineBooking/item2.png'
import item3 from '../../../assets/OnlineBooking/item3.png'


export const BannerData = [
    {
        icon: <RiPlaneFill className='icon1' />,
        title:'Fly Tickets'
    },
    {
        icon: <FaBus className='icon2' />,
        title:'Bus Tickets'
    },
    {
        icon: <FaTrain  className='icon3' />,
        title:'Trains Tickets'
    },
    {
        icon: <FaHotel className='icon4' />,
        title:'Hotels Tickets'
    },
    {
        icon: <MdMovieFilter className='icon5' />,
        title:'Movie Tickets'
    }
] 

export const Data = [
    {
        img:img1,
        link:'Paris, France',
        to:'/'
    },
    {
        img:img2,
        link:'Milan, Italy',
        to:'/'
    },
    {
        img:img3,
        link:'Bogota, Columbia',
        to:'/'
    },
    {
        img:img4,
        link:'Rome, Italy',
        to:'/'
    },
    {
        img:img5,
        link:'Berlin, Germany',
        to:'/'
    }
]

export const Data2 = [
    {
        img:item1,
        link:'Exclusive Features',
        to:'/'
    },
    {
        img:item2,
        link:'Quick Book Feature',
        to:'/'
    },
    {
        img:item3,
        link:'Check PNR status',
        to:'/'
    }
]