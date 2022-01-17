import React from 'react'
import { Link } from 'react-router-dom'
import './styles/community.scss'

const Community = () => {

    return (
        <div className='community'>

            <div className="row2" data-aos='flip-up' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="info">
                    <h5>You are not alone</h5>
                    <h1>Join our online community!</h1>
                    <p>
                        Our online community is a place for autistic people and 
                        their families to meet like-minded people and share their 
                        thoughts and experiences.
                    </p>
                    <Link to='/Signup' className='hover-button'>Join now</Link>
                </div>
                <div className="img"></div>
            </div>
        </div>
    )
}

export default Community
