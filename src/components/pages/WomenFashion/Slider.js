import React from 'react'
import FashionSlider from '../../shared/FashionSlider/FashionSlider'
import './styles/slider.scss'

const Slider = () => {
    return (
        <div className='fashion-component'>
            <FashionSlider />

            <div className='images'>
                <div className='img img1'></div>
                <div className='img img2'></div>
            </div>
        </div>
    )
}

export default Slider
