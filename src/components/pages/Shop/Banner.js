import React from 'react'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Shop/banner.jpg'
import {FaStore} from 'react-icons/fa'

const Banner = () => {
    return (
            <SharedBanner 
                bg={banner}
                titleIcon={<FaStore />}
                text='Shop'
                title='We make shopping more rewarding'
                description="Enjoy the flexibility to get what you want and pay over time."
                to='/'
                link='Shop now'
            />
    )
}

export default Banner
