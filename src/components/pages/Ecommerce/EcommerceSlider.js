import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ButtonBase from "@material-ui/core/ButtonBase";

import './styles/slider.scss'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    initialSlide: 0,
    dots:false,
    arrows:false,
    responsive: [
      {
        breakpoint:1000,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint:650,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
};

class Capabilities extends React.Component {
    renderArrows = () => {
      return (
        <div className='slider-arrows'>
            <div className='arrows'>
            <ButtonBase
                className="arrow-btn prev"
                onClick={() => this.slider.slickPrev()}
            >
                    <MdKeyboardArrowLeft />
                </ButtonBase>

                <ButtonBase
          className="arrow-btn next"
          onClick={() => this.slider.slickNext()}
        >
                    <MdKeyboardArrowRight />
                </ButtonBase>
            </div>
        </div>
      );
    };

    render() {
      return (
        <div className="slider-component">
    
                    {this.renderArrows()}
        
                    <Slider 
                        {...settings}
                        ref={(c) => (this.slider = c)}
                        className="inner-slider-container"
                    >
                        <div className='img-container'>
                            <div className='img img1'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img2'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img3'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img4'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img5'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img6'></div>
                        </div>

                        <div className='img-container'>
                            <div className='img img1'></div>
                        </div>
                    </Slider>
            </div>
      );
    }
  }
  export default Capabilities;