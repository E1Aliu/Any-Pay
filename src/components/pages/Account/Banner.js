import React, {useState} from 'react'

import './styles/banner.scss'
import SharedBanner from '../../shared/SharedBanner/SharedBanner'
import banner from '../../../assets/Account/banner.jpg'

import {FaUniversity, FaPauseCircle} from 'react-icons/fa'
import video1 from '../../../assets/Account/video1.mp4'
import {AiFillPlayCircle} from 'react-icons/ai'

const Banner = () => {

    const [play, setPlay] = useState(false);
    const showVideo = () => {
        setPlay(!play)
    }

    const closeVideo = () => {
        setPlay(false)
    }

    return (
        <div className='banner-container'>
            <SharedBanner 
                bg={banner}
                titleIcon={<FaUniversity />}
                text='Account'
                title='Business Account'
                description="New Age Business Banking for You A Simple & 
                    Powerful Business Acccount is Here."
                to='/'
                link='Get Started' 
            />
            <div className='bg'></div>

            <div className='banner-video'>
                <div className="inner-video">
                    <div className="img"></div>
                    <div className="icon" onClick={showVideo}>
                        {play ? <FaPauseCircle /> : <AiFillPlayCircle /> }
                    </div>
                </div>

            </div>

            {play ? <div className="video-backdrop" onClick={closeVideo}></div> : null }
            {play ? <div className="video-container">
                <video src={video1} controls autoPlay></video>
            </div> : null }
        </div>
    )
}

export default Banner
